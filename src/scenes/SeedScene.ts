import dat from 'dat.gui';
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
import { Scene, Color } from 'three';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js and
// https://schteppe.github.io/cannon.js/.
import C from 'cannon';

import Pinball from '../objects/Pinball';
import BasicLights from '../lights/BasicLights';
import Table from '../objects/Table';
import Paddle from '../objects/Paddle';
import ChunkManager from '../objects/ChunkManager';

// Define an object type which describes each object in the update list
type UpdateChild = {
    // Each object *might* contain an update function
    update?: (timeStamp: number) => void;
};

class SeedScene extends Scene {
    // Define the type of the state field
    state: {
        gui: dat.GUI;
        updateList: UpdateChild[];
        score: number;
    };
    document;

    world: C.World;

    constructor(document: Document) {
        // Call parent Scene() constructor
        super();

        // Initializes the Cannon World, adapted from CannonJS tutorial
        // https://tympanus.net/codrops/2019/12/10/building-a-physics-based-3d-menu-with-cannon-js-and-three-js/.
        this.world = new C.World();

        // Init state
        this.state = {
            gui: new dat.GUI(), // Create GUI for scene
            updateList: [],
            score: 0,
        };
        this.document = document;
        // Set background color
        this.background = new Color(0x000000);

        // Add meshes to scene
        const pinball = new Pinball(this);
        const table = new Table(this);
        const lights = new BasicLights();
        const paddleL = new Paddle(this, document, true);
        const paddleR = new Paddle(this, document, false);
        const manager = new ChunkManager(this);
        this.add(pinball, table, lights, paddleL, paddleR, manager);
    }

    addToUpdateList(object: UpdateChild): void {
        this.state.updateList.push(object);
    }

    update(timeStamp: number): void {
        const { updateList } = this.state;

        // Call update for each object in the updateList
        for (const obj of updateList) {
            if (obj.update !== undefined) {
                obj.update(timeStamp);
            }
        }
    }
}

export default SeedScene;
