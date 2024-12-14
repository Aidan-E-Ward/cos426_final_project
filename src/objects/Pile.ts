import {
    Group,
    Mesh,
    PlaneGeometry,
    MeshStandardMaterial,
    Vector3,
} from 'three';
import { Vec3, World } from 'cannon';
import Chunk from './Chunk';
import SeedScene from '../scenes/SeedScene';
import { createNoise2D } from 'simplex-noise'; // https://www.npmjs.com/package/simplex-noise
import Cube from './Cube';

class Pile extends Group {
    state: {
        numCubes: number;
        cubeArray: Cube[];
        position: Vector3;
        isCubified: boolean;
        radius: number;
        resolution: number;
    };
    scene: SeedScene;
    world: World;
    parent: Chunk;
    pileMesh: Mesh | undefined;

    constructor(parent: Chunk, scene: SeedScene) {
        super();
        this.parent = parent;

        this.state = {
            numCubes: 0,
            cubeArray: [],
            position: this.generateRandomPosition(),
            isCubified: false,
            radius: 2,
            resolution: 7,
        };

        // console.log('constructing pile');

        this.world = scene.world;
        this.scene = scene;

        this.pileMesh = this.createMesh();
        this.add(this.pileMesh);
        this.scene.add(this);
        this.scene.addToUpdateList(this);
    }

    generateRandomPosition(): Vector3 {
        const x =
            Math.random() * this.parent.state.width -
            this.parent.state.width / 2 +
            this.parent.terrainMesh.position.x;
        const z =
            Math.random() * this.parent.state.height -
            this.parent.state.height / 2 +
            this.parent.terrainMesh.position.z;
        const y = -0.95; // MUST CHANGE TO y-value of table surface
        return new Vector3(x, y, z);
    }

    createMesh(): Mesh {
        const baseY = -0.9; // some y starting point
        // const radius = 0.5 + Math.floor(Math.random() * 3);
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

        const geometry = new PlaneGeometry(
            this.state.radius,
            this.state.radius,
            this.state.resolution,
            this.state.resolution
        );
        const material = new MeshStandardMaterial({ color: 0x808080 });

        // https://threejs.org/docs/#api/en/core/BufferGeometry
        const position = geometry.attributes.position;

        // Modify vertex positions using noise
        for (let i = 0; i < position.count; i++) {
            const x = position.getX(i);
            const y = position.getY(i);

            const distance = Math.sqrt(x * x + y * y);
            const falloff = Math.max(0, 1 - distance / (this.state.radius / 2)); // Falloff towards edges

            const noiseValue = noise2D(x * 0.1, y * 0.1) * falloff * AMPLITUDE;
            position.setZ(i, baseY + noiseValue);
        }

        position.needsUpdate = true;
        // geo.colorsNeedUpdate = true;

        geometry.computeVertexNormals();

        const mesh = new Mesh(geometry, material);
        mesh.position.set(
            this.state.position.x,
            this.state.position.y,
            this.state.position.z
        );
        mesh.rotateX(-Math.PI / 2);

        // console.log('creating mesh');
        return mesh;
    }

    cubify(): void {
        if (this.state.isCubified) return;
        if (!this.pileMesh) return;

        const geo = this.pileMesh.geometry;

        const position = geo.attributes.position;

        for (let i = 0; i < position.count; i++) {
            const x = this.state.position.x + position.getX(i);
            const y = this.state.position.z + position.getY(i);
            const z = this.state.position.y + Math.abs(position.getZ(i));

            if (z >= 0.01) {
                // const cubePos = new Vec3(x, z - 0.5, y);
                // console.log(cubePos);
                // const cube = new Cube(this.scene, cubePos);
                // this.add(cube);
                // this.state.cubeArray.push(cube);
                // this.state.numCubes++;

                for (let j = -0.9; j < z; j++) {
                    const cubePos = new Vec3(
                        x,
                        j * (this.state.radius / this.state.resolution) - 0.3,
                        y
                    );
                    const cube = new Cube(this.scene, cubePos);
                    this.add(cube);
                    this.state.cubeArray.push(cube);
                    this.state.numCubes++;
                }
            }
        }

        this.state.isCubified = true;
    }

    removeMesh(): void {
        if (this.pileMesh) {
            this.remove(this.pileMesh);
            this.pileMesh.geometry.dispose();
            this.pileMesh = undefined;
        }
    }

    update(): void {
        if (this.shouldCubify()) {
            this.cubify(); // based on proximity to camera i believe
        }

        this.state.cubeArray.forEach((cube) => cube.update());

        this.state.position.set(
            this.state.position.x + 0.05,
            this.state.position.y,
            this.state.position.z
        );

        this.pileMesh?.position.set(
            this.pileMesh.position.x + 0.05,
            this.pileMesh.position.y,
            this.pileMesh.position.z
        );

        if (this.state.isCubified) {
            this.dispose();
        }
    }

    shouldCubify(): boolean {
        if (this.pileMesh) {
            return this.pileMesh.position.x >= -50;
        } else {
            return false;
        }
    }

    dispose(): void {
        this.removeMesh();

        // this.state.cubeArray.forEach((cube) => {
        //     this.remove(cube);
        //     cube.dispose();
        // });
        // this.state.cubeArray = [];

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        const index = this.scene.state.updateList.indexOf(this);
        if (index > -1) {
            this.scene.state.updateList.splice(index, 1);
        }
    }
}

export default Pile;
