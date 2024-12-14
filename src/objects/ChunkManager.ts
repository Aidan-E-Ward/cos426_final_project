// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
import { Group, Vector3 } from 'three';

import Chunk from './Chunk';
import SeedScene from '../scenes/SeedScene';

class ChunkManager extends Group {
    state;
    parent: SeedScene;

    constructor(parent: SeedScene) {
        super();

        this.state = {
            gui: parent.state.gui,
            speed: 0.1,

            updateList: [],
            chunks: [] as Chunk[],

            numChunks: 5,
            width: 10,
            height: 5,
            meshMaterial: undefined,
        };

        this.parent = parent;
        this.state.numChunks = 5;

        parent.addToUpdateList(this);

        // add a sequence of 5 starter chunks that will progress down the table in a line
        // these will generate a pile and then be destroyed
        this.addChunk(new Vector3(-50, -0.9, 0));
        this.addChunk(new Vector3(-55, -0.9, 0));
        this.addChunk(new Vector3(-60, -0.9, 0));
        this.addChunk(new Vector3(-65, -0.9, 0));
        this.addChunk(new Vector3(-70, -0.9, 0));
    }

    addChunk(initPos: Vector3) {
        const chunk = new Chunk(
            this.parent,
            new Vector3(initPos.x, initPos.y, initPos.z)
        );
        this.add(chunk.terrainMesh);
        this.state.chunks.push(chunk);
    }

    removeChunk(chunk: Chunk) {
        this.remove(chunk.terrainMesh);
        if (chunk.terrainMesh) {
            chunk.terrainMesh.geometry.dispose();
        }
        const index = this.state.chunks.indexOf(chunk);
        if (index > -1) {
            this.state.chunks.splice(index, 1);
        }
        chunk.dispose();
    }

    update() {
        while (this.state.chunks.length < this.state.numChunks) {
            this.addChunk(new Vector3(-65, -0.9, 0));
        }

        if (this.state.chunks[0].terrainMesh.position.x >= -40) {
            this.removeChunk(this.state.chunks[0]);
        }
    }

    dispose() {
        this.state.chunks.forEach((chunk) => this.removeChunk(chunk));
    }
}

export default ChunkManager;
