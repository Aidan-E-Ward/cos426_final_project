import {
    Group,
    Mesh,
    PlaneGeometry,
    MeshStandardMaterial,
    BoxGeometry,
    Vector3,
    Quaternion,
} from 'three';
import { Body, Box, Vec3, World } from 'cannon';
import Chunk from './Chunk';
import SeedScene from '../scenes/SeedScene';
import { createNoise2D } from 'simplex-noise';
import alea from 'alea';
import Cube from './Cube';

class Pile extends Group {
    state: {
        pileHeight: number;
        numCubes: number;
        cubeArray: Cube[],
        position: Vector3,
        isCubified: boolean,
    };
    scene: SeedScene;
    world: World;
    parent: Chunk;
    pileMesh: Mesh | undefined;

    constructor(parent: Chunk, scene: SeedScene) {
        super();

        this.state = {
            pileHeight: 1 + Math.floor(Math.random() * 10),
            numCubes: 0,
            cubeArray: [],
            position: this.generateRandomPosition(),
            isCubified: false,
        };

        this.world = scene.world;
        this.scene = scene;
        this.parent = parent;
        this.parent.addToUpdateList(this); // what do i do here?

        this.pileMesh = this.createMesh();
        this.add(this.pileMesh);
    }

    generateRandomPosition(): Vector3 {
        const x = (Math.random() - 0.5) * this.parent.state.width;
        const z = (Math.random() - 0.5) * this.parent.state.height;
        const y = 0; // MUST CHANGE TO y-value of table surface
        return new Vector3(x,y,z);
    }

    createMesh(): Mesh {
        const baseX = Math.random() * this.parent.state.width;
        const baseZ = Math.random() * this.parent.state.height;
        const baseY = -0.95; // some y starting point
        const radius = 3 + Math.floor(Math.random() * 5);
        const AMPLITUDE = 15;

        const noise2D = createNoise2D();

        // function map(
        //     val: number,
        //     smin: number,
        //     smax: number,
        //     emin: number,
        //     emax: number
        // ): number {
        //     const t = (val - smin) / (smax - smin);
        //     return (emax - emin) * t + emin;
        // }

        // function noise(nx: number, nz: number): number {
        //     // Re-map from -1.0:+1.0 to 0.0:1.0
        //     return map(noise2D(nx, nz), -1, 1, 0, 1);
        // }

        // https://github.com/mwcooper/COS426FinalProject/blob/main/src/components/objects/Chunk/Chunk.js
        // function fbm(x: number, z: number) {
        //     const octaves = 4;
        //     const lacunarity = 2.0; // How quickly width shrinks
        //     const gain = 0.5; // How slowly height shrinks

        //     let freq = 1;
        //     let amp = 1;
        //     let y = 0;
        //     let max = 0;
        //     for (let i = 0; i < octaves; i++) {
        //         y += amp * noise(x * freq, z * freq);
        //         max += amp;
        //         freq *= lacunarity;
        //         amp *= gain;
        //     }
        //     return y / max;
        // }
        const seed = this.parent.state.seed;

        const geometry = new PlaneGeometry(radius, radius, 10, 10);
        const material = new MeshStandardMaterial({ color: 0x808080 });

        const position = geometry.attributes.position;

        // Modify vertex positions using noise
        for (let i = 0; i < position.count; i++) {
            const x = position.getX(i);
            const z = position.getZ(i);

            const distance = Math.sqrt(x * x + z * z);
            const falloff = Math.max(0, 1 - distance / (radius / 2)); // Falloff towards edges

            // Generate noise-based y-values
            const noiseValue = noise2D(x * 0.1, z * 0.1) * falloff * AMPLITUDE; // Combine FBM with falloff
            position.setY(i, baseY + noiseValue);
        }

        position.needsUpdate = true;
        // geo.colorsNeedUpdate = true;

        geometry.computeVertexNormals();

        const mesh = new Mesh(geometry, material);
        mesh.position.set(this.state.position.x, 0, this.state.position.z);

        return mesh;
    }

    cubify(): void {
        if (this.state.isCubified) return;

        if (!this.pileMesh) return;

        const geo = this.pileMesh!.geometry;

        const position = geo.attributes.position;

        for (let i = 0; i < position.count; i++) {
            const x = position.getX(i); // do i have to do + this.pileMesh.position.x???
            const y = position.getY(i);
            const z = position.getZ(i);

            for (let j = 0; j < y; j++) {
                const cubePos = new Vec3(x, j * 0.25, z);
                const cube = new Cube(this.scene, cubePos);
                this.add(cube);
                this.state.cubeArray.push(cube);
                this.state.numCubes++;
            }
        }

        this.removeMesh();
        this.state.isCubified = true;
    }

    removeMesh(): void {
        if (this.pileMesh) {
            this.remove(this.pileMesh);
            this.pileMesh.geometry.dispose();
            this.pileMesh = undefined;
        }
    }

    update(timeStamp: number): void {
        if (this.shouldCubify()) {
            this.cubify(); // based on proximity to camera i believe
        }

        if (this.state.isCubified) {
            this.state.cubeArray.forEach(cube => cube.update());
        }
        else {
            // move the mesh ???
        }
    }

    shouldCubify(): boolean {
        const cameraPosition = ;
        const distance = this.pileMesh?.position.distanceTo(cameraPisition): Infinity;
        const cubifyDistance = 10;
        return distance < cubifyDistance;
    }

    dispose(): void {
        this.removeMesh();

        this.state.cubeArray.forEach(cube => {
            this.remove(cube);
            cube.dispose();
        })
        this.state.cubeArray = [];

        const index = this.parent.state.updateList.indexOf(this);
        if (index > -1) {
            this.parent.state.updateList.splice(index, 1);
        }
    }
}

export default Pile;
