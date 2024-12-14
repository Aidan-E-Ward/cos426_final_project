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

            numChunks: 7,
            width: 10,
            height: 5,
            meshMaterial: undefined,
        };

        this.parent = parent;

        // // 0 is here, so no EPS at the moment
        // const EPS = (0 * (2 * Math.PI)) / 1000;
        // this.state.chordTheta =
        //     2 * Math.asin(this.state.width / 2 / this.state.ringRadius) - EPS;
        // //this.state.numChunks = Math.floor(0.5 * Math.PI / this.state.chordTheta);
        this.state.numChunks = 5;

        // Add self to parent's update list
        parent.addToUpdateList(this);

        this.addChunk(new Vector3(-50, -0.9, 0));
        this.addChunk(new Vector3(-55, -0.9, 0));
        this.addChunk(new Vector3(-60, -0.9, 0));
        this.addChunk(new Vector3(-65, -0.9, 0));
        this.addChunk(new Vector3(-70, -0.9, 0));
    }

    addChunk(initPos: Vector3) {
        // console.log('new chunk');
        const chunk = new Chunk(
            this.parent,
            new Vector3(initPos.x, initPos.y, initPos.z)
        );
        this.add(chunk.terrainMesh);
        this.state.chunks.push(chunk);
        // this.state.noiseOffset += this.state.width;
        // this.state.thetaOffset += this.state.chordTheta;
    }

    removeChunk(chunk: Chunk) {
        // console.log('removing chunk');
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
        // this.state.thetaOffset -= 0.001 * this.state.speed * 2 * Math.PI;

        while (this.state.chunks.length < this.state.numChunks) {
            this.addChunk(new Vector3(-65, -0.9, 0));
        }

        if (this.state.chunks[0].terrainMesh.position.x >= -40) {
            this.removeChunk(this.state.chunks[0]);
        }

        // this.state.chunks.forEach((chunk) => chunk.update(timeStamp));
    }

    dispose() {
        this.state.chunks.forEach((chunk) => this.removeChunk(chunk));
    }
}

export default ChunkManager;
