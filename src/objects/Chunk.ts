// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
import {
    Group,
    Mesh,
    PlaneGeometry,
    MeshStandardMaterial,
    Vector3,
} from 'three';
import SeedScene from '../scenes/SeedScene';
import Pile from './Pile';

class Chunk extends Group {
    terrainMesh: Mesh;
    state;
    piles: Pile[] = [];
    world;
    scene;

    constructor(scene: SeedScene, initPos: Vector3) {
        super();

        this.state = {
            width: 5,
            height: 12,
            initPos: initPos,
        };

        this.world = scene.world;
        this.scene = scene;

        scene.addToUpdateList(this);

        this.terrainMesh = this.createFlatTerrain();
        this.add(this.terrainMesh);
        this.scene.add(this);
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
        mesh.position.set(
            this.state.initPos.x,
            this.state.initPos.y,
            this.state.initPos.z
        );
        mesh.rotateX(-Math.PI / 2);
        return mesh;
    }

    generatePiles(): void {
        const pileCount = 1; // number of piles in a chunk

        for (let i = 0; i < pileCount; i++) {
            const pile = new Pile(this, this.scene);
            this.add(pile);
            this.piles.push(pile);
        }
    }

    dispose(): void {
        if (this.terrainMesh) {
            this.remove(this.terrainMesh);
            this.terrainMesh.geometry.dispose();
        }

        this.piles.forEach((pile) => pile.dispose());
        this.piles = [];
    }

    update(): void {
        this.terrainMesh.position.set(
            this.terrainMesh.position.x + 0.05,
            this.terrainMesh.position.y,
            this.terrainMesh.position.z
        );
    }
}

export default Chunk;
