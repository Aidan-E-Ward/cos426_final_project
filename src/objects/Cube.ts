import { Group, BoxGeometry, MeshPhongMaterial, Mesh } from 'three';
import SeedScene from '../scenes/SeedScene';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

class Cube extends Group {
    cube_body: C.Body;
    cube_mesh: Mesh;
    parent: SeedScene;

    constructor(parent: SeedScene, initPosition: C.Vec3) {
        // Call parent Group() constructor
        super();
        this.name = 'cube';
        this.parent = parent;

        const width = 0.25;
        const height = 0.25;
        const depth = 0.25;

        const geometry = new BoxGeometry(width, height, depth);
        const material = new MeshPhongMaterial({ color: 0x0ff0d0 });
        this.cube_mesh = new Mesh(geometry, material);
        this.cube_mesh.geometry.computeBoundingBox();
        this.add(this.cube_mesh);

        const box = new C.Box(new C.Vec3(width / 2, height / 2, depth / 2));
        this.cube_body = new C.Body({
            mass: 1,
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
    }

    update(): void {
        this.cube_mesh.position.set(
            this.cube_body.position.x,
            this.cube_body.position.y,
            this.cube_body.position.z
        );
    }

    dispose(): void {
        // Remove from physics world
        this.parent.world.removeBody(this.cube_body); // uh yes it does

        // Dispose mesh and geometry
        if (this.cube_mesh) {
            this.remove(this.cube_mesh);
            this.cube_mesh.geometry.dispose();
        }
    }
}

export default Cube;
