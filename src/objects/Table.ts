import { Group, BoxGeometry, MeshPhongMaterial, Mesh, Euler } from 'three';
// import { Vector3 } from 'three';
import SeedScene from '../scenes/SeedScene';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

class Table extends Group {
    box_body: C.Body;
    box_mesh: Mesh;

    constructor(parent: SeedScene) {
        // console.log('World object:', parent.world);

        // Call parent Group() constructor
        super();
        this.name = 'table';

        const width = 20;
        const height = 0.1;
        const depth = 20;

        // Creates the mesh and body of the table, adapted from
        // https://threejs.org/docs/index.html?q=group#api/en/objects/Group,
        // https://tympanus.net/codrops/2019/12/10/building-a-physics-based-3d-menu-with-cannon-js-and-three-js/.
        const geometry = new BoxGeometry(width, height, depth);
        const material = new MeshPhongMaterial({ color: 0x0000ff });
        this.box_mesh = new Mesh(geometry, material);
        this.box_mesh.geometry.computeBoundingBox();
        // const corner =
        //     this.box_mesh.geometry.boundingBox?.min.clone() ||
        //     new Vector3(0, 0, 0);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        this.add(this.box_mesh);

        // Initializes the body.
        // takes in the box's half extents
        // The half extent of an Axis Aligned Bounding box represents half of the width, height and depth of the box
        const box = new C.Box(new C.Vec3(width / 2, height / 2, depth / 2));
        this.box_body = new C.Body({
            mass: 0,
            position: new C.Vec3(0, 0, 0),
        });
        this.box_body.addShape(box);
        this.box_body.quaternion.setFromEuler(0, 0, 0);

        // Sets the mesh position to the body position.
        this.box_mesh.position.set(
            this.box_body.position.x,
            this.box_body.position.y,
            this.box_body.position.z
        );
        const euler_rotation = new C.Vec3(0, 0, 0);
        this.box_body.quaternion.toEuler(euler_rotation);
        this.box_mesh.rotation.set(
            euler_rotation.x,
            euler_rotation.y,
            euler_rotation.z
        );

        parent.addToUpdateList(this);
        // console.log('addBody exists:', typeof parent.world.addBody === 'function');
        parent.world.addBody(this.box_body);
    }

    update(): void {
        // console.log(this.ball_body.position);
        // console.log(this.ball_mesh.position);
        this.box_mesh.position.set(
            this.box_body.position.x,
            this.box_body.position.y,
            this.box_body.position.z
        );
        const euler_rotation = new C.Vec3(0, 0, 0);
        this.box_body.quaternion.toEuler(euler_rotation);
        this.box_mesh.rotation.set(
            euler_rotation.x,
            euler_rotation.y,
            euler_rotation.z
        );
    }
}

export default Table;
