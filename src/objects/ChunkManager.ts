import {
    Group,
    PlaneGeometry,
    Mesh,
} from 'three';

import Chunk from "./Chunk";
import SeedScene from "../scenes/SeedScene";

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

            numChunks: 1,
            width: 30,
            height: 150,
            thetaOffset: 0,
            noiseOffset: 0,
            seed: 3,
            resolution: 1,
            noiseScale: 60,
            noiseStrength: 50,
            ringRadius: 1100,
            chordTheta: 0,
            meshMaterial: undefined,
        }

        this.parent = parent;

        // 0 is here, so no EPS at the moment
        const EPS = 0*(2 * Math.PI) / 1000;
        this.state.chordTheta =
            2 * Math.asin(this.state.width / 2 / this.state.ringRadius) - EPS;
        //this.state.numChunks = Math.floor(0.5 * Math.PI / this.state.chordTheta);
        this.state.numChunks = 39;

        // Add self to parent's update list
        parent.addToUpdateList(this);
    }

    addChunk() {
        const chunk = new Chunk(this, this.parent);
        this.add(chunk.terrainMesh);
        this.state.chunks.push(chunk);
        this.state.noiseOffset += this.state.width;
        this.state.thetaOffset += this.state.chordTheta;
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

    update(timeStamp: number) {
        this.state.thetaOffset -= 0.001 * this.state.speed * 2 * Math.PI;

        while (this.state.chunks.length < this.state.numChunks) {
            this.addChunk();
        }

        if (this.state.chunks[0].terrainMesh.position.x < 0) {
            this.removeChunk(this.state.chunks[0]);
        }

        this.state.chunks.forEach(chunk => chunk.update(timeStamp, this.state.speed));
    }

    dispose() {
        this.state.chunks.forEach(chunk => this.removeChunk(chunk));
    }
    
}

export default ChunkManager;