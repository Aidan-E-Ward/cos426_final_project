import { Group, Object3D } from 'three';
// import { Vector3 } from 'three';
import SeedScene from '../scenes/SeedScene';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MODEL from './paddle.gltf?url';


// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

class Pinball extends Group {
    paddle_body;
    paddle_mesh;
    paddle: Object3D; // am i dumb why is this not "definitely assigned"

    constructor(parent: SeedScene) {
        super();

        // Load object
        const loader = new GLTFLoader();


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

        this.paddle_mesh = new Group();
        this.name = 'paddle';
        loader.load(MODEL, (gltf) => {
            gltf.scene.position.set(0,0,0);
            this.paddle = gltf.scene.clone();
            this.paddle_mesh.add(this.paddle);
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
