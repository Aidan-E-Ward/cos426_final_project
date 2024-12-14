// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
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
            radius: Math.floor(Math.random() * 2) + 2,
            resolution: 7,
        };

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
        const y = -0.95; // y-value of table surface
        return new Vector3(x, y, z);
    }

    createMesh(): Mesh {
        const baseY = -0.9; // some y starting point
        const AMPLITUDE = 20;

        const noise2D = createNoise2D();

        // https://github.com/mwcooper/COS426FinalProject/blob/main/src/components/objects/Chunk/Chunk.js
        // for inspiration with simplex-noise library

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
            const falloff = Math.max(0, 1 - distance / (this.state.radius / 2)); // Falloff towards edges to create piles concentrated
            // in height around the center

            const noiseValue = noise2D(x * 0.1, y * 0.1) * falloff * AMPLITUDE;
            position.setZ(i, baseY + noiseValue);
        }

        position.needsUpdate = true;

        geometry.computeVertexNormals();

        const mesh = new Mesh(geometry, material);
        mesh.position.set(
            this.state.position.x,
            this.state.position.y,
            this.state.position.z
        );
        mesh.rotateX(-Math.PI / 2);

        return mesh;
    }

    cubify(): void {
        if (this.state.isCubified) return;
        if (!this.pileMesh) return;

        const geo = this.pileMesh.geometry;

        const position = geo.attributes.position;

        let minY = Infinity;
        let maxY = -Infinity;

        for (let i = 0; i < position.count; i++) {
            const y = this.state.position.y + Math.abs(position.getZ(i));
            if (y <= 0.01) {
                continue;
            }
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        }

        for (let i = 0; i < position.count; i++) {
            const x = this.state.position.x + position.getX(i);
            const y = this.state.position.z + position.getY(i);
            const z = this.state.position.y + Math.abs(position.getZ(i));

            if (z >= 0.01) {
                for (let j = -0.9; j < z; j++) {
                    const cubePos = new Vec3(
                        x,
                        j * (this.state.radius / this.state.resolution) - 0.3,
                        y
                    );
                    const normalizedY = (j - minY) / (maxY - minY);
                    const color = this.interpolateColor(
                        [0.25, 0.41, 0.88],
                        [0.68, 0.85, 0.9],
                        normalizedY
                    );

                    const cube = new Cube(this.scene, cubePos, color);
                    this.add(cube);
                    this.state.cubeArray.push(cube);
                    this.state.numCubes++;
                }
            }
        }

        this.state.isCubified = true;
    }

    interpolateColor(
        color1: [number, number, number],
        color2: [number, number, number],
        factor: number
    ): [number, number, number] {
        return color1.map((c, i) => c + factor * (color2[i] - c)) as [
            number,
            number,
            number,
        ];
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
            this.cubify();
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

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        const index = this.scene.state.updateList.indexOf(this);
        if (index > -1) {
            this.scene.state.updateList.splice(index, 1);
        }
    }
}

export default Pile;
