import { Group, BoxGeometry, MeshPhongMaterial, Mesh } from 'three';
import SeedScene from '../scenes/SeedScene';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

class Cube extends Group {
    cube_body: C.Body;
    cube_mesh: Mesh;
    parent: SeedScene;
    originY: number;
    originZ: number;
    hasCollided: boolean;
    counter: number;

    constructor(parent: SeedScene, initPosition: C.Vec3) {
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
        const material = new MeshPhongMaterial({ color: 0x0ff0d0 });
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

        if (
            !(
                this.cube_body.position.y >= this.originY - 0.01 &&
                this.cube_body.position.y <= this.originY + 0.01
            )
        ) {
            this.hasCollided = true;
        }
    }

    score(): void {
        // Remove from physics world
        this.parent.world.remove(this.cube_body);

        // Dispose mesh and geometry
        if (this.cube_mesh) {
            this.remove(this.cube_mesh);
            this.cube_mesh.geometry.dispose();
        }
    }

    dispose(): void {
        // Remove from physics world
        this.parent.world.remove(this.cube_body);

        // Dispose mesh and geometry
        if (this.cube_mesh) {
            this.remove(this.cube_mesh);
            this.cube_mesh.geometry.dispose();
        }
    }
}

export default Cube;
