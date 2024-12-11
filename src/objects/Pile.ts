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
import Chunk from './Chunk';
import SeedScene from '../scenes/SeedScene';
import { createNoise2D } from 'simplex-noise';
import alea from 'alea';
import Cube from './Cube';

class Pile extends Group {
    state: {
        pileHeight: number;
        numCubes: number;
        cubeArray: Cube[] | undefined,
    };
    scene;
    world;
    parent;
    pileMesh: Mesh | undefined;

    constructor(parent: Chunk, scene: SeedScene) {
        super();

        this.state = {
            pileHeight: 1 + Math.floor(Math.random() * 10),
            numCubes: 0,
            cubeArray: undefined,
        };

        this.world = scene.world;
        this.scene = scene;
        this.parent = parent;
        this.parent.addToUpdateList(this); // what do i do here?

        this.pileMesh = this.createMesh();
        this.add(this.pileMesh);
    }

    createMesh(): Mesh {
        const baseX = Math.random() * this.parent.state.width;
        const baseZ = Math.random() * this.parent.state.height;
        const baseY = -0.95; // some y starting point
        const radius = 3 + Math.floor(Math.random() * 5);
        const AMPLITUDE = 15;

        const noise2D = createNoise2D();

        function map(
            val: number,
            smin: number,
            smax: number,
            emin: number,
            emax: number
        ): number {
            const t = (val - smin) / (smax - smin);
            return (emax - emin) * t + emin;
        }

        function noise(nx: number, nz: number): number {
            // Re-map from -1.0:+1.0 to 0.0:1.0
            return map(noise2D(nx, nz), -1, 1, 0, 1);
        }

        // https://github.com/mwcooper/COS426FinalProject/blob/main/src/components/objects/Chunk/Chunk.js
        function fbm(x: number, z: number) {
            const octaves = 4;
            const lacunarity = 2.0; // How quickly width shrinks
            const gain = 0.5; // How slowly height shrinks

            let freq = 1;
            let amp = 1;
            let y = 0;
            let max = 0;
            for (let i = 0; i < octaves; i++) {
                y += amp * noise(x * freq, z * freq);
                max += amp;
                freq *= lacunarity;
                amp *= gain;
            }
            return y / max;
        }

        const geometry = new PlaneGeometry(radius, radius, 1, 1);
        const material = new MeshStandardMaterial({ color: 0x808080 });

        const position = geometry.attributes.position;

        // Modify vertex positions using noise
        for (let i = 0; i < position.count; i++) {
            const x = position.getX(i);
            const z = position.getZ(i);

            const distance = Math.sqrt(
                (baseX - x) * (baseX - x) + (baseZ - z) * (baseZ - z)
            );
            const falloff = Math.max(0, 1 - distance / (radius / 2)); // Falloff towards edges

            // Generate noise-based y-values
            const noiseValue = fbm(x * 0.1, z * 0.1) * falloff * AMPLITUDE; // Combine FBM with falloff
            position.setY(i, baseY + noiseValue);
        }

        position.needsUpdate = true;
        // geo.colorsNeedUpdate = true;

        geometry.computeVertexNormals();

        const mesh = new Mesh(geometry, material);

        return mesh;
    }

    cubify(): void {
        const geo = this.pileMesh!.geometry;

        const position = geo.attributes.position;

        for (let i = 0; i < position.count; i++) {
            const x = position.getX(i);
            const y = position.getY(i);
            const z = position.getZ(i);

            for (let j = 0; j < y; j++) {
                let newY = y + -0.95 + 0.05;

                // let geometry = new BoxGeometry(0.25, 0.25, 0.25);
                // let material = new MeshStandardMaterial({ color:0x00ff00});

                // let cubeMesh = new Mesh(geometry, material);

                let newCube = new Cube(this.scene, new Vec3(x, newY, z));
                this.add(newCube);
                this.state.numCubes++;
            }
        }

        this.removeMesh();
    }

    removeMesh(): void {
        if (!this.pileMesh) {
            return;
        }
        this.remove(this.pileMesh);
        this.pileMesh.geometry.dispose();
        this.pileMesh = undefined;
    }

    removePile(): void {
        if (this.pileMesh) {
            this.remove(this.pileMesh);
            this.pileMesh.geometry.dispose();
            this.pileMesh = undefined;
        } 
        if ()

            // add logic for removing cubes from the pile
    }
}

export default Pile;
