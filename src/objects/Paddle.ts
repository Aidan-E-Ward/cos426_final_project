import { Group, Mesh } from 'three';
// import { Vector3 } from 'three';
import SeedScene from '../scenes/SeedScene';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MODEL from './paddle.gltf?url';


// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

class Pinball extends Group {
    paddle_body: C.Body;
    paddle_mesh = Mesh;

    constructor(parent: SeedScene) {
        super();

        // Load object
        const loader = new GLTFLoader();

        this.name = 'paddle';
        loader.load(MODEL, (gltf) => {
            gltf.scene;
            // gltf.scene.traverse((child: Mesh) => {
            //     this.paddle_mesh = child;
            //     this.paddle_mesh.position.set(new Vector3(0,0,0));
            //     this.add(this.paddle_mesh);
            // });
        });

        this.paddle_body = new C.Body({
            mass: 0,
            position: new C.Vec3(0, 5, 0),
        });

        const paddleShape = new C.Box(new C.Vec3(1, 0.2, 0.5)); 
        this.paddle_body.addShape(paddleShape);

        

        parent.addToUpdateList(this);
        parent.world.addBody(this.paddle_body);
    }

    update(): void {
        
    }
}

export default Pinball;
