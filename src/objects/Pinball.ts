// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
import { Group, SphereGeometry, MeshPhongMaterial, Mesh } from 'three';
import SeedScene from '../scenes/SeedScene';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js and
// https://schteppe.github.io/cannon.js/.
import C from 'cannon';

class Pinball extends Group {
    ball_body: C.Body;
    ball_mesh: Mesh;

    constructor(parent: SeedScene) {
        // Call parent Group() constructor
        super();
        this.name = 'pinball';

        const SPHERE_RADIUS = 0.5;

        // Creates the mesh and body of the pinball, adapted from
        // https://threejs.org/docs/index.html?q=group#api/en/objects/Group,
        // https://tympanus.net/codrops/2019/12/10/building-a-physics-based-3d-menu-with-cannon-js-and-three-js/.
        const geometry = new SphereGeometry(SPHERE_RADIUS);
        const material = new MeshPhongMaterial({ color: 0x0000ff });
        this.ball_mesh = new Mesh(geometry, material);
        this.ball_mesh.geometry.computeBoundingSphere();
        this.add(this.ball_mesh);

        const sphere = new C.Sphere(SPHERE_RADIUS);
        this.ball_body = new C.Body({
            mass: 1,
            position: new C.Vec3(-15, 1, -4),
        });
        this.ball_body.addShape(sphere);
        this.ball_mesh.position.set(
            this.ball_body.position.x,
            this.ball_body.position.y,
            this.ball_body.position.z
        );

        parent.addToUpdateList(this);
        parent.world.addBody(this.ball_body);
    }

    update(): void {
        this.ball_mesh.position.set(
            this.ball_body.position.x,
            this.ball_body.position.y,
            this.ball_body.position.z
        );

        this.ball_body.applyLocalForce(
            new C.Vec3(20, -100, 0),
            new C.Vec3(0, 0, 0)
        );
    }
}

export default Pinball;
