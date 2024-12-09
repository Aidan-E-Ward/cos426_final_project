import { Group, SphereGeometry, MeshPhongMaterial, Mesh } from 'three';
// import { Vector3 } from 'three';
import SeedScene from '../scenes/SeedScene';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

class Pinball extends Group {
    ball_body: C.Body;
    ball_mesh: Mesh;

    constructor(parent: SeedScene) {
        // console.log('World object:', parent.world);

        // Call parent Group() constructor
        super();
        this.name = 'pinball';

        const SPHERE_RADIUS = 0.5;

        // Creates the mesh and body of the pinball, adapted from
        // https://threejs.org/docs/index.html?q=group#api/en/objects/Group,
        // https://tympanus.net/codrops/2019/12/10/building-a-physics-based-3d-menu-with-cannon-js-and-three-js/.
        const geometry = new SphereGeometry(SPHERE_RADIUS);
        const material = new MeshPhongMaterial({ color: 0x00ff00 });
        this.ball_mesh = new Mesh(geometry, material);
        this.ball_mesh.geometry.computeBoundingSphere();
        // const center =
        //     this.ball_mesh.geometry.boundingSphere?.center.clone() ||
        //     new Vector3(0, 0, 0);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        this.add(this.ball_mesh);

        const sphere = new C.Sphere(SPHERE_RADIUS);
        this.ball_body = new C.Body({
            mass: 10,
            position: new C.Vec3(0, 5, 0),
        });
        this.ball_body.addShape(sphere);
        this.ball_mesh.position.set(
            this.ball_body.position.x,
            this.ball_body.position.y,
            this.ball_body.position.z
        );

        parent.addToUpdateList(this);
        // console.log('addBody exists:', typeof parent.world.addBody === 'function');
        parent.world.addBody(this.ball_body);
    }

    update(): void {
        // console.log(this.ball_body.position);
        // console.log(this.ball_mesh.position);
        this.ball_mesh.position.set(
            this.ball_body.position.x,
            this.ball_body.position.y,
            this.ball_body.position.z
        );
    }
}

export default Pinball;
