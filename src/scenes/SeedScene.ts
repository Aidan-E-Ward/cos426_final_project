import dat from 'dat.gui';
import { Scene, Color } from 'three';

// Install information and other documentation from
// https://github.com/schteppe/cannon.js.
import C from 'cannon';

import Flower from '../objects/Flower';
import Land from '../objects/Land';
import Pinball from '../objects/Pinball';
import BasicLights from '../lights/BasicLights';

// Define an object type which describes each object in the update list
type UpdateChild = {
    // Each object *might* contain an update function
    update?: (timeStamp: number) => void;
};

class SeedScene extends Scene {
    // Define the type of the state field
    state: {
        gui: dat.GUI;
        rotationSpeed: number;
        updateList: UpdateChild[];
    };

    world: C.World;

    constructor() {
        // Call parent Scene() constructor
        super();

        // Initializes the Cannon World, adapted from CannonJS tutorial
        // https://tympanus.net/codrops/2019/12/10/building-a-physics-based-3d-menu-with-cannon-js-and-three-js/.
        this.world = new C.World();
        this.world.gravity.set(0, -0.1, 0);

        // Init state
        this.state = {
            gui: new dat.GUI(), // Create GUI for scene
            rotationSpeed: 0,
            updateList: [],
        };

        // Set background to a nice color
        this.background = new Color(0x7ec0ee);

        // Add meshes to scene
        const land = new Land();
        const flower = new Flower(this);
        const pinball = new Pinball(this);
        const lights = new BasicLights();
        this.add(pinball, lights);

        // Populate GUI
        this.state.gui.add(this.state, 'rotationSpeed', -5, 5);
    }

    addToUpdateList(object: UpdateChild): void {
        this.state.updateList.push(object);
    }

    update(timeStamp: number): void {
        const { rotationSpeed, updateList } = this.state;
        this.rotation.y = (rotationSpeed * timeStamp) / 10000;

        // Call update for each object in the updateList
        for (const obj of updateList) {
            if (obj.update !== undefined) {
                obj.update(timeStamp);
            }
        }
    }
}

export default SeedScene;
