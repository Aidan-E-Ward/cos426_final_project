import { Group, BoxGeometry, MeshPhongMaterial, Object3D, Mesh } from 'three';
// import { Vector3 } from 'three';
import SeedScene from '../scenes/SeedScene';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

class Paddle extends Group {

    width = 0.5;
    height = 1;
    depth = 4;

    paddle_body;
    paddle_mesh;
    paddle!: Object3D;

    hinge_limit;
    hinge_constraint;
    hinge_mesh;

    constructor(parent: SeedScene) {
        super();

        // Load object
        const loader = new GLTFLoader();
        this.name = 'paddle';


        // Example from lightsaber project: https://github.com/arcturus3/lightsaber-dojo/blob/master/src/Lightsaber.ts

        // this.mesh = new Group();
        // this.name = 'LightSaber';
        // loader.load('models/obi-wan_kenobi_lightsaber/scene.gltf', (gltf) => {
        //     gltf.scene.scale.divideScalar(50);
        //     // gltf.scene.scale.y *= 30;
        //     gltf.scene.rotateY(degToRad(60));
        //     gltf.scene.rotateZ(degToRad(10));

        //     gltf.scene.rotation.x = degToRad(6.5);
        //     gltf.scene.position.z -= 0.005;
        //     gltf.scene.position.y -= 0.1;

        //     // console.log(gltf.scene.worldToLocal(new Vector3(1,0,0)));
        //     // console.log(gltf.scene.rotation);
        //     this.hilt = gltf.scene.clone();
        //     this.mesh.add(this.hilt);
        
        // });

        // this.paddle_mesh = new Group();
        // loader.load('models/paddle2.gltf', (gltf) => {
        //     gltf.scene.scale.divideScalar(1);
        //     gltf.scene.position.set(0,0,0);
        //     // this.add(gltf.scene.clone());

        //     console.log(gltf.scene.position);

        //     this.paddle = gltf.scene.clone();
        //     this.paddle_mesh.add(this.paddle);
        // });

        // Initializes the mesh.
        const geometry = new BoxGeometry(this.width, this.height, this.depth);
        const material = new MeshPhongMaterial({ color: 0xff0000 });
        this.paddle_mesh = new Mesh(geometry, material);
        this.paddle_mesh.geometry.computeBoundingBox();
        this.add(this.paddle_mesh);

        // Initializes the body.
        this.paddle_body = new C.Body({
            mass: 1,
            position: new C.Vec3(-5, 1, 0),
        });
        const paddleShape = new C.Box(new C.Vec3(this.width / 2, this.height / 2, this.depth / 2)); 
        this.paddle_body.addShape(paddleShape);
        this.paddle_body.quaternion.setFromEuler(0, 0, 0);

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
        const hingeGeometry = new BoxGeometry(this.width, this.height, this.depth);
        const hingeMaterial = new MeshPhongMaterial({ color: 0x000000 });
        this.hinge_mesh = new Mesh(hingeGeometry, hingeMaterial);
        this.hinge_mesh.geometry.computeBoundingBox();
        this.add(this.hinge_mesh);

        // Initializes the body used for the hinge constraint.
        this.hinge_limit = new C.Body({
            mass: 0,
            position: new C.Vec3(-5, 1, 0),
        });
        const hinge_shape = new C.Box(new C.Vec3(this.width / 2, this.height / 2, this.depth / 2)); 
        this.hinge_limit.addShape(hinge_shape);
        this.hinge_limit.quaternion.setFromEuler(0, 0, 0);

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
        this.hinge_constraint = new C.HingeConstraint(this.paddle_body, this.hinge_limit, {
            pivotA: new C.Vec3(this.width, 0, this.depth / 2),
            axisA: new C.Vec3(0, 1, 0),
            pivotB: new C.Vec3(0, 0, this.depth / 2),
            axisB: new C.Vec3(0, 1, 0)
        });
        parent.world.addConstraint(this.hinge_constraint);
        this.hinge_constraint.enable();

    }

    update(timeStamp: number): void {
        this.hinge_constraint.update();

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

        if (timeStamp % 10 <= 0.01 && timeStamp % 10 >= -0.01 ) {
            this.paddle_body.applyLocalImpulse(new C.Vec3(20, 0, 0), new C.Vec3(0, 0, (this.depth / 2)));
        }

    }
}

export default Paddle;
