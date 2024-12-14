// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
import { Group, BoxGeometry, MeshPhongMaterial, Object3D, Mesh } from 'three';
import SeedScene from '../scenes/SeedScene';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js and
// https://schteppe.github.io/cannon.js/.
import C from 'cannon';

// Process of parsing keyboard input for movement adapted from past COS 426 project:
// https://github.com/arcturus3/lightsaber-dojo/blob/master/src/Player.js

class Controller {
    target;
    keys;
    currentState;

    constructor(target: Document) {
        this.target = target;
        this.target.addEventListener(
            'keydown',
            (e) => this.onKeyDown(e),
            false
        );
        this.target.addEventListener('keyup', (e) => this.onKeyUp(e), false);

        this.keys = {
            q: false,
            p: false,
        };

        this.currentState = {
            leftInput: false,
            rightInput: false,
        };
    }

    onKeyDown(e: KeyboardEvent) {
        if (e.key == 'q') {
            this.keys.q = true;
        }
        if (e.key == 'p') {
            this.keys.p = true;
        }
    }

    onKeyUp(e: KeyboardEvent) {
        if (e.key == 'q') {
            this.keys.q = false;
        }
        if (e.key == 'p') {
            this.keys.p = false;
        }
    }
}

class Paddle extends Group {
    inputs;

    width = 0.25;
    height = 0.75;
    depth = 2;

    isLeftPaddle;

    xInitPosition;
    yInitPosition;
    zInitPosition;
    xInitRotation;
    yInitRotation;
    zInitRotation;

    aPivotDirection;

    xOffset;
    yOffset;
    zOffset;
    meshRotation;

    impulseForce;
    returnForce;

    paddle_body;
    paddle_mesh;
    paddle!: Object3D;

    hinge_limit;
    hinge_constraint;
    hinge_mesh;

    constructor(parent: SeedScene, document: Document, isLeftPaddle: boolean) {
        super();

        this.inputs = new Controller(document);

        // Initializes the panel position and rotation depending on the input
        this.isLeftPaddle = isLeftPaddle;

        this.xInitPosition = 4;
        this.yInitPosition = -0.5;
        this.zInitPosition = 2;
        this.xInitRotation = 0;
        this.yInitRotation = 5.7 + Math.PI;
        this.zInitRotation = 0;

        this.aPivotDirection = 1;

        this.meshRotation = 0; // -1.55
        this.xOffset = 0; // -0.2
        this.yOffset = 0; // -0.15
        this.zOffset = 0; // 0.6

        this.impulseForce = 20;
        this.returnForce = -100;

        if (!isLeftPaddle) {
            this.zInitPosition = -2;
            this.yInitRotation = -5.7;

            this.aPivotDirection = -1;

            this.meshRotation = 0; // 1.55
            this.zOffset = 0; // -0.6

            this.impulseForce = -20;
            this.returnForce = 100;
        }

        this.name = 'paddle';

        // Initializes the mesh.
        const geometry = new BoxGeometry(this.width, this.height, this.depth);
        const material = new MeshPhongMaterial({ color: 0xf28e10 });
        this.paddle_mesh = new Mesh(geometry, material);
        this.paddle_mesh.geometry.computeBoundingBox();
        this.add(this.paddle_mesh);

        // Initializes the body.
        this.paddle_body = new C.Body({
            mass: 1,
            position: new C.Vec3(
                this.xInitPosition,
                this.yInitPosition,
                this.zInitPosition
            ),
        });
        const paddleShape = new C.Box(
            new C.Vec3(this.width / 2, this.height / 2, this.depth / 2)
        );
        this.paddle_body.addShape(paddleShape);
        this.paddle_body.quaternion.setFromEuler(
            this.xInitRotation,
            this.yInitRotation,
            this.zInitRotation
        );
        if (isLeftPaddle) {
            this.paddle_body.quaternion.setFromEuler(
                this.xInitRotation,
                this.yInitRotation + 0.75,
                this.zInitRotation
            );
        }

        // Sets the mesh position to the body position.
        this.paddle_mesh.position.set(
            this.paddle_body.position.x,
            this.paddle_body.position.y,
            this.paddle_body.position.z
        );
        const euler_rotation = new C.Vec3(0, 0, 0);
        this.paddle_body.quaternion.toEuler(euler_rotation);
        this.paddle_mesh.rotation.set(
            euler_rotation.x,
            euler_rotation.y,
            euler_rotation.z
        );

        // this.add(this.paddle_mesh);
        parent.addToUpdateList(this);
        parent.world.addBody(this.paddle_body);

        // Initializes the mesh.
        const hingeGeometry = new BoxGeometry(
            this.width,
            this.height,
            this.depth
        );
        const hingeMaterial = new MeshPhongMaterial({ color: 0xffffff });
        this.hinge_mesh = new Mesh(hingeGeometry, hingeMaterial);
        this.hinge_mesh.geometry.computeBoundingBox();
        this.add(this.hinge_mesh);

        // Initializes the body used for the hinge constraint.
        this.hinge_limit = new C.Body({
            mass: 0,
            position: new C.Vec3(
                this.xInitPosition,
                this.yInitPosition,
                this.zInitPosition
            ),
        });
        const hinge_shape = new C.Box(
            new C.Vec3(this.width / 2, this.height / 2, this.depth / 2)
        );
        this.hinge_limit.addShape(hinge_shape);
        this.hinge_limit.quaternion.setFromEuler(
            this.xInitRotation,
            this.yInitRotation,
            this.zInitRotation
        );

        // Sets the mesh position to the body position.
        this.hinge_mesh.position.set(
            this.hinge_limit.position.x,
            this.hinge_limit.position.y,
            this.hinge_limit.position.z
        );
        const hinge_rotation = new C.Vec3(0, 0, 0);
        this.hinge_limit.quaternion.toEuler(hinge_rotation);
        this.hinge_mesh.rotation.set(
            hinge_rotation.x,
            hinge_rotation.y,
            hinge_rotation.z
        );

        // this.add(this.paddle_mesh);
        parent.addToUpdateList(this);
        parent.world.addBody(this.hinge_limit);

        // Creates the hinge constraint, documentation from:
        // https://schteppe.github.io/cannon.js/docs/classes/HingeConstraint.html

        if (!isLeftPaddle) {
            this.hinge_constraint = new C.HingeConstraint(
                this.paddle_body,
                this.hinge_limit,
                {
                    pivotA: new C.Vec3(
                        this.width,
                        0,
                        (this.aPivotDirection * this.depth) / 2
                    ),
                    axisA: new C.Vec3(0, 1, 0),
                    pivotB: new C.Vec3(
                        0,
                        0,
                        (this.aPivotDirection * this.depth) / 2
                    ),
                    axisB: new C.Vec3(0, 1, 0),
                }
            );
        } else {
            this.hinge_constraint = new C.HingeConstraint(
                this.hinge_limit,
                this.paddle_body,
                {
                    pivotA: new C.Vec3(
                        0,
                        0,
                        -(this.aPivotDirection * this.depth) / 2
                    ),
                    axisA: new C.Vec3(0, 1, 0),
                    pivotB: new C.Vec3(
                        -this.width,
                        0,
                        -(this.aPivotDirection * this.depth) / 2
                    ),
                    axisB: new C.Vec3(0, 1, 0),
                }
            );
        }
        parent.world.addConstraint(this.hinge_constraint);
        this.hinge_constraint.enable();
    }

    update(): void {
        this.hinge_constraint.update();

        // Sets the mesh position to the body position.
        this.paddle_mesh.position.set(
            this.paddle_body.position.x + this.xOffset,
            this.paddle_body.position.y + this.yOffset,
            this.paddle_body.position.z + this.zOffset
        );

        // Restricts paddles from moving beyond the sides of the table.
        const euler_rotation = new C.Vec3(0, 0, 0);
        this.paddle_body.quaternion.toEuler(euler_rotation);
        if (
            this.isLeftPaddle &&
            euler_rotation.y > -1.9 &&
            euler_rotation.y < 1
        ) {
            this.paddle_body.quaternion.setFromEuler(
                euler_rotation.x,
                -2,
                euler_rotation.z
            );
        }
        if (
            !this.isLeftPaddle &&
            euler_rotation.y > -2 &&
            euler_rotation.y < -1.2
        ) {
            this.paddle_body.quaternion.setFromEuler(
                euler_rotation.x,
                -1.1,
                euler_rotation.z
            );
        }

        this.paddle_mesh.rotation.set(
            euler_rotation.x,
            euler_rotation.y + this.meshRotation,
            euler_rotation.z
        );

        this.hinge_mesh.position.set(
            this.hinge_limit.position.x,
            this.hinge_limit.position.y,
            this.hinge_limit.position.z
        );
        const hinge_rotation = new C.Vec3(0, 0, 0);
        this.hinge_limit.quaternion.toEuler(hinge_rotation);
        this.hinge_mesh.rotation.set(
            hinge_rotation.x,
            hinge_rotation.y,
            hinge_rotation.z
        );

        // If there is a keyboard input, move the paddle corresponding
        // to the key.
        if (this.inputs.keys.q && this.isLeftPaddle) {
            this.paddle_body.applyLocalImpulse(
                new C.Vec3(this.impulseForce, 0, 0),
                new C.Vec3(0, 0, this.depth / 2)
            );
        }
        if (this.inputs.keys.p && !this.isLeftPaddle) {
            this.paddle_body.applyLocalImpulse(
                new C.Vec3(this.impulseForce, 0, 0),
                new C.Vec3(0, 0, this.depth / 2)
            );
        }

        // Applies the return force on the paddle.
        this.paddle_body.applyLocalForce(
            new C.Vec3(this.returnForce, 0, 0),
            new C.Vec3(0, 0, this.depth * 4)
        );
    }
}

export default Paddle;
