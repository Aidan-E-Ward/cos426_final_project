import { Group, BoxGeometry, MeshPhongMaterial, Mesh } from 'three';
// import { Vector3 } from 'three';
import SeedScene from '../scenes/SeedScene';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

class Table extends Group {
    floor_body: C.Body;
    floor_mesh: Mesh;
    lWall_body: C.Body;
    lWall_mesh: Mesh;
    rWall_body: C.Body;
    rWall_mesh: Mesh;
    lSlant_body: C.Body;
    lSlant_mesh: Mesh;
    rSlant_body: C.Body;
    rSlant_mesh: Mesh;

    constructor(parent: SeedScene) {
        // console.log('World object:', parent.world);

        // Call parent Group() constructor
        super();
        this.name = 'table';

        // ----------------------------------------------------------------------------------------

        const floorWidth = 100;
        const floorHeight = 0.1;
        const floorDepth = 15;

        // Creates the mesh and body of the table floor, adapted from
        // https://threejs.org/docs/index.html?q=group#api/en/objects/Group,
        // https://tympanus.net/codrops/2019/12/10/building-a-physics-based-3d-menu-with-cannon-js-and-three-js/.
        const floor_geometry = new BoxGeometry(
            floorWidth,
            floorHeight,
            floorDepth
        );
        const floor_material = new MeshPhongMaterial({ color: 0x0000ff });
        this.floor_mesh = new Mesh(floor_geometry, floor_material);
        this.floor_mesh.geometry.computeBoundingBox();
        this.add(this.floor_mesh);

        // Initializes the body.
        // takes in the box's half extents
        // The half extent of an Axis Aligned Bounding box represents half of the width, height and depth of the box
        const floor_box = new C.Box(
            new C.Vec3(floorWidth / 2, floorHeight / 2, floorDepth / 2)
        );
        this.floor_body = new C.Body({
            mass: 0,
            position: new C.Vec3(0, -1, 0),
        });
        this.floor_body.addShape(floor_box);
        this.floor_body.quaternion.setFromEuler(0, 0, 0);

        // Sets the mesh position to the body position.
        this.floor_mesh.position.set(
            this.floor_body.position.x,
            this.floor_body.position.y,
            this.floor_body.position.z
        );
        const floor_rotation = new C.Vec3(0, 0, 0);
        this.floor_body.quaternion.toEuler(floor_rotation);
        this.floor_mesh.rotation.set(
            floor_rotation.x,
            floor_rotation.y,
            floor_rotation.z
        );
        parent.world.addBody(this.floor_body);

        // ----------------------------------------------------------------------------------------

        const lWallWidth = 30;
        const lWallHeight = 0.75;
        const lWallDepth = 0.5;

        // Creates the mesh and body of the left wall
        const lWall_geometry = new BoxGeometry(
            lWallWidth,
            lWallHeight,
            lWallDepth
        );
        const lWall_material = new MeshPhongMaterial({ color: 0xffffff });
        this.lWall_mesh = new Mesh(lWall_geometry, lWall_material);
        this.lWall_mesh.geometry.computeBoundingBox();
        this.add(this.lWall_mesh);

        // Initializes the body
        const lWall_box = new C.Box(
            new C.Vec3(lWallWidth / 2, lWallHeight / 2, lWallDepth / 2)
        );
        this.lWall_body = new C.Body({
            mass: 0,
            position: new C.Vec3(-15, -0.5, 7.5),
        });
        this.lWall_body.addShape(lWall_box);
        this.lWall_body.quaternion.setFromEuler(0, 0, 0);

        // Sets the mesh position to the body position
        this.lWall_mesh.position.set(
            this.lWall_body.position.x,
            this.lWall_body.position.y,
            this.lWall_body.position.z
        );
        const lWall_rotation = new C.Vec3(0, 0, 0);
        this.lWall_body.quaternion.toEuler(lWall_rotation);
        this.lWall_mesh.rotation.set(
            lWall_rotation.x,
            lWall_rotation.y,
            lWall_rotation.z
        );
        parent.world.addBody(this.lWall_body);

        // ----------------------------------------------------------------------------------------

        const rWallWidth = 30;
        const rWallHeight = 0.75;
        const rWallDepth = 0.5;

        // Creates the mesh and body of the left wall
        const rWall_geometry = new BoxGeometry(
            rWallWidth,
            rWallHeight,
            rWallDepth
        );
        const rWall_material = new MeshPhongMaterial({ color: 0xffffff });
        this.rWall_mesh = new Mesh(rWall_geometry, rWall_material);
        this.rWall_mesh.geometry.computeBoundingBox();
        this.add(this.rWall_mesh);

        // Initializes the body
        const rWall_box = new C.Box(
            new C.Vec3(rWallWidth / 2, rWallHeight / 2, rWallDepth / 2)
        );
        this.rWall_body = new C.Body({
            mass: 0,
            position: new C.Vec3(-15, -0.5, -7.5),
        });
        this.rWall_body.addShape(rWall_box);
        this.rWall_body.quaternion.setFromEuler(0, 0, 0);

        // Sets the mesh position to the body position
        this.rWall_mesh.position.set(
            this.rWall_body.position.x,
            this.rWall_body.position.y,
            this.rWall_body.position.z
        );
        const rWall_rotation = new C.Vec3(0, 0, 0);
        this.rWall_body.quaternion.toEuler(rWall_rotation);
        this.rWall_mesh.rotation.set(
            rWall_rotation.x,
            rWall_rotation.y,
            rWall_rotation.z
        );
        parent.world.addBody(this.rWall_body);

        // ----------------------------------------------------------------------------------------

        const lSlantWidth = 5.4;
        const lSlantHeight = 0.75;
        const lSlantDepth = 0.5;

        // Creates the mesh and body of the left wall
        const lSlant_geometry = new BoxGeometry(
            lSlantWidth,
            lSlantHeight,
            lSlantDepth
        );
        const lSlant_material = new MeshPhongMaterial({ color: 0xffffff });
        this.lSlant_mesh = new Mesh(lSlant_geometry, lSlant_material);
        this.lSlant_mesh.geometry.computeBoundingBox();
        this.add(this.lSlant_mesh);

        // Initializes the body
        const lSlant_box = new C.Box(
            new C.Vec3(lSlantWidth / 2, lSlantHeight / 2, lSlantDepth / 2)
        );
        this.lSlant_body = new C.Body({
            mass: 0,
            position: new C.Vec3(1.4, -0.5, 5.3),
        });
        this.lSlant_body.addShape(lSlant_box);
        this.lSlant_body.quaternion.setFromEuler(0, 0.95, 0);

        // Sets the mesh position to the body position
        this.lSlant_mesh.position.set(
            this.lSlant_body.position.x,
            this.lSlant_body.position.y,
            this.lSlant_body.position.z
        );
        const lSlant_rotation = new C.Vec3(0, 0, 0);
        this.lSlant_body.quaternion.toEuler(lSlant_rotation);
        this.lSlant_mesh.rotation.set(
            lSlant_rotation.x,
            lSlant_rotation.y,
            lSlant_rotation.z
        );
        parent.world.addBody(this.lSlant_body);

        // ----------------------------------------------------------------------------------------

        const rSlantWidth = 5.4;
        const rSlantHeight = 0.75;
        const rSlantDepth = 0.5;

        // Creates the mesh and body of the left wall
        const rSlant_geometry = new BoxGeometry(
            rSlantWidth,
            rSlantHeight,
            rSlantDepth
        );
        const rSlant_material = new MeshPhongMaterial({ color: 0xffffff });
        this.rSlant_mesh = new Mesh(rSlant_geometry, rSlant_material);
        this.rSlant_mesh.geometry.computeBoundingBox();
        this.add(this.rSlant_mesh);

        // Initializes the body
        const rSlant_box = new C.Box(
            new C.Vec3(rSlantWidth / 2, rSlantHeight / 2, rSlantDepth / 2)
        );
        this.rSlant_body = new C.Body({
            mass: 0,
            position: new C.Vec3(1.4, -0.5, -5.3),
        });
        this.rSlant_body.addShape(rSlant_box);
        this.rSlant_body.quaternion.setFromEuler(0, -0.95, 0);

        // Sets the mesh position to the body position
        this.rSlant_mesh.position.set(
            this.rSlant_body.position.x,
            this.rSlant_body.position.y,
            this.rSlant_body.position.z
        );
        const rSlant_rotation = new C.Vec3(0, 0, 0);
        this.rSlant_body.quaternion.toEuler(rSlant_rotation);
        this.rSlant_mesh.rotation.set(
            rSlant_rotation.x,
            rSlant_rotation.y,
            rSlant_rotation.z
        );
        parent.world.addBody(this.rSlant_body);

        // ----------------------------------------------------------------------------------------

        parent.addToUpdateList(this);
    }

    update(): void {
        // console.log(this.ball_body.position);
        // console.log(this.ball_mesh.position);
        this.floor_mesh.position.set(
            this.floor_body.position.x,
            this.floor_body.position.y,
            this.floor_body.position.z
        );
        const floor_rotation = new C.Vec3(0, 0, 0);
        this.floor_body.quaternion.toEuler(floor_rotation);
        this.floor_mesh.rotation.set(
            floor_rotation.x,
            floor_rotation.y,
            floor_rotation.z
        );

        // ----------------------------------------------------------------------------------------

        this.lWall_mesh.position.set(
            this.lWall_body.position.x,
            this.lWall_body.position.y,
            this.lWall_body.position.z
        );
        const lWall_rotation = new C.Vec3(0, 0, 0);
        this.lWall_body.quaternion.toEuler(lWall_rotation);
        this.lWall_mesh.rotation.set(
            lWall_rotation.x,
            lWall_rotation.y,
            lWall_rotation.z
        );

        // ----------------------------------------------------------------------------------------

        this.rWall_mesh.position.set(
            this.rWall_body.position.x,
            this.rWall_body.position.y,
            this.rWall_body.position.z
        );
        const rWall_rotation = new C.Vec3(0, 0, 0);
        this.rWall_body.quaternion.toEuler(rWall_rotation);
        this.rWall_mesh.rotation.set(
            rWall_rotation.x,
            rWall_rotation.y,
            rWall_rotation.z
        );

        // ----------------------------------------------------------------------------------------

        this.lSlant_mesh.position.set(
            this.lSlant_body.position.x,
            this.lSlant_body.position.y,
            this.lSlant_body.position.z
        );
        const lSlant_rotation = new C.Vec3(0, 0, 0);
        this.lSlant_body.quaternion.toEuler(lSlant_rotation);
        this.lSlant_mesh.rotation.set(
            lSlant_rotation.x,
            lSlant_rotation.y,
            lSlant_rotation.z
        );

        // ----------------------------------------------------------------------------------------

        this.rSlant_mesh.position.set(
            this.rSlant_body.position.x,
            this.rSlant_body.position.y,
            this.rSlant_body.position.z
        );
        const rSlant_rotation = new C.Vec3(0, 0, 0);
        this.rSlant_body.quaternion.toEuler(rSlant_rotation);
        this.rSlant_mesh.rotation.set(
            rSlant_rotation.x,
            rSlant_rotation.y,
            rSlant_rotation.z
        );

        // ----------------------------------------------------------------------------------------
    }
}

export default Table;
