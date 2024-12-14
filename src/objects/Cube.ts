// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
import { Group, BoxGeometry, MeshPhongMaterial, Mesh, Color } from 'three';
import SeedScene from '../scenes/SeedScene';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js and
// https://schteppe.github.io/cannon.js/.
import C from 'cannon';

class Cube extends Group {
    cube_body: C.Body;
    cube_mesh: Mesh;
    parent: SeedScene;
    originY: number;
    originZ: number;
    hasCollided: boolean;
    counter: number;

    constructor(
        parent: SeedScene,
        initPosition: C.Vec3,
        color: [number, number, number]
    ) {
        // Call parent Group() constructor
        super();

        this.name = 'cube';
        this.parent = parent;

        this.originY = initPosition.y;
        this.originZ = initPosition.z;
        this.hasCollided = false;
        this.counter = 0;

        const width = 0.2;
        const height = 0.2;
        const depth = 0.2;

        const geometry = new BoxGeometry(width, height, depth);
        const material = new MeshPhongMaterial({
            color: new Color().setRGB(color[0], color[1], color[2]),
        });
        this.cube_mesh = new Mesh(geometry, material);
        this.cube_mesh.geometry.computeBoundingBox();
        this.add(this.cube_mesh);

        const box = new C.Box(new C.Vec3(width / 2, height / 2, depth / 2));
        this.cube_body = new C.Body({
            mass: 0.001,
            position: initPosition.clone(),
        });
        this.cube_body.addShape(box);
        this.cube_mesh.position.set(
            this.cube_body.position.x,
            this.cube_body.position.y,
            this.cube_body.position.z
        );

        parent.addToUpdateList(this);
        parent.world.addBody(this.cube_body);
        this.parent.add(this);
    }

    update(): void {
        // after a certain length of time after collisions
        // we can despawn the cube, this would count towards the user's score
        if (this.hasCollided) {
            this.counter++;
            if (this.counter >= 100) {
                this.score();
            }
        } else {
            if (this.cube_body.position.x > 0) {
                this.dispose();
            }
        }

        this.cube_body.position.set(
            this.cube_body.position.x + 0.05,
            this.cube_body.position.y,
            this.cube_body.position.z
        );
        this.cube_mesh.position.set(
            this.cube_body.position.x,
            this.cube_body.position.y,
            this.cube_body.position.z
        );

        // if the body position has differed at all from the initial,
        // this would count as a displaced cube to contribute to the user's scoring
        if (
            !(
                this.cube_body.position.y >= this.originY - 0.01 &&
                this.cube_body.position.y <= this.originY + 0.01
            )
        ) {
            this.hasCollided = true;
        }
    }

    // this method was intended to be used as a separate disposal method
    // only to be called when the user scored a point by displacing the box themselves
    // we couldn't get scoring to work on a time step by time step basis
    score(): void {
        this.parent.state.score++;

        // remove from physics world
        this.parent.world.remove(this.cube_body);

        // dispose mesh and geometry
        if (this.cube_mesh) {
            this.remove(this.cube_mesh);
            this.cube_mesh.geometry.dispose();
        }
    }

    dispose(): void {
        // remove from physics world
        this.parent.world.remove(this.cube_body);

        // dispose mesh and geometry
        if (this.cube_mesh) {
            this.remove(this.cube_mesh);
            this.cube_mesh.geometry.dispose();
        }
    }
}

export default Cube;
