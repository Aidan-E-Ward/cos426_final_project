import {
    Group,
    Mesh,
    PlaneGeometry,
    MeshStandardMaterial,
    BoxGeometry,
    Vector3,
    Quaternion,
} from 'three';
import { Body, Box, Vec3 } from 'cannon';
import ChunkManager from './ChunkManager';
import SeedScene from '../scenes/SeedScene';
import Pile from './Pile';

// Define an object type which describes each object in the update list
type UpdateChild = {
    // Each object *might* contain an update function
    update?: (timeStamp: number) => void;
};

class Chunk extends Group {
    terrainMesh: Mesh;
    state;
    piles: Pile[] = [];
    world;
    scene;

    constructor(parent: ChunkManager, scene: SeedScene) {
        super();

        this.state = {
            width: parent.state.width,
            height: parent.state.height,
            thetaOffset: parent.state.thetaOffset,
            noiseOffset: parent.state.noiseOffset,
            speed: parent.state.speed,
            seed: parent.state.seed,
            resolution: parent.state.resolution,
            noiseScale: parent.state.noiseScale,
            noiseStrength: parent.state.noiseStrength,
            ringRadius: parent.state.ringRadius,
            meshMaterial:
                parent.state.meshMaterial || new MeshStandardMaterial(),
            updateList: [] as UpdateChild[],
        };

        this.world = scene.world;
        this.scene = scene;
        this.parent = parent;

        scene.addToUpdateList(this);

        this.terrainMesh = this.createFlatTerrain();
        this.add(this.terrainMesh);

        this.generatePiles();
    }

    createFlatTerrain(): Mesh {
        const geometry = new PlaneGeometry(
            this.state.width,
            this.state.height,
            1,
            1
        );
        const material = new MeshStandardMaterial({ color: 0x808080 });

        const mesh = new Mesh(geometry, material);
        mesh.position.y = 0;
        return mesh;
    }

    generatePiles(): void {
        const pileCount = 10; // number of piles in a chunk

        for (let i = 0; i < pileCount; i++) {
            const pile = new Pile(this, this.state.scene);
            this.add(pile);
            this.piles.push(pile);
        }
    }

    // moveOnRing(speed: number) {
    //     // Calculate the z position of the mesh based on its theta position in the ring
    //     this.state.thetaOffset -= 0.001 * speed * 2 * Math.PI;
    //     const thetaOffset = this.state.thetaOffset;
    //     const mesh = this.terrainMesh;
    //     const radius = this.state.ringRadius;
    //     let chordThetaOff = 0;

    //     let alpha = (mesh.position.x)/(39*this.state.width)
    //     chordThetaOff = 15* alpha * (2 * Math.PI) / 1000;

    //     mesh.position.x = radius * Math.sin(thetaOffset-chordThetaOff);
    //     mesh.position.z = radius - radius * Math.cos(thetaOffset-chordThetaOff);
    //     mesh.lookAt(0, 0, this.state.ringRadius);
    // }

    explodePile(pileIndex: number) {
        const body = this.pileBodies[pileIndex];
        body.applyImpulse(new Vec3(x, y, z), body.position);
    }

    dispose(): void {
        if (this.terrainMesh) {
            this.remove(this.terrainMesh);
            this.terrainMesh.geometry.dispose();
        }

        this.piles.forEach(pile => pile.dispose());
        this.piles = [];
    }

    update(timeStamp: number, speed: number): void {
        // const { updateList } = this.state;

        // // Translate the chunk (move it closer and update the curve)
        this.moveOnRing(speed);

        // // Call update for each object in the updateList
        // for (const obj of updateList) {
        //     obj.update(timeStamp);
        // }

        this.world.step(1 / 60);

        this.piles.forEach(pile => pile.update(timeStamp));
    }
}

export default Chunk;
