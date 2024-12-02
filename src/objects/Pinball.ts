import { Group, SphereGeometry, MeshPhongMaterial, Mesh } from 'three';
import SeedScene from '../scenes/SeedScene';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

class Pinball extends Group {
    ball_body;
    ball_mesh;

    constructor(parent: SeedScene) {
        // Call parent Group() constructor
        super();
        this.name = 'pinball';

        const SPHERE_RADIUS = 10;

        // Creates the mesh and body of the pinball, adapted from
        // https://threejs.org/docs/index.html?q=group#api/en/objects/Group,
        // https://tympanus.net/codrops/2019/12/10/building-a-physics-based-3d-menu-with-cannon-js-and-three-js/.
        const geometry = new SphereGeometry(SPHERE_RADIUS);
        const material = new MeshPhongMaterial();
        this.ball_mesh = new Mesh(geometry, material);
        this.ball_mesh.geometry.computeBoundingSphere();
        const center = this.ball_mesh.geometry.boundingSphere.center.clone();

        const sphere = new C.Sphere(SPHERE_RADIUS);
        this.ball_body = new C.Body({
            mass: 10,
        });
        this.ball_body.addShape(
            sphere,
            new C.Vec3(center.x, center.y, center.z)
        );

        parent.addToUpdateList(this);
        parent.world.addBody(this.ball_body);
    }

    update(timeStamp: number): void {}
}

export default Pinball;
