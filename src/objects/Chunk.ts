import { Group, Mesh, PlaneGeometry, Vector3, Object3D, Color } from 'three';
import SeedScene from '../scenes/SeedScene';
import { createNoise2D } from 'simplex-noise';
import alea from 'alea';


class Chunk extends Group {
    heightMap = [];
    terrainMesh;
    state;

    constructor(parent: ChunkManager) {
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
            growthBoundaries: parent.state.growthBoundaries,
            ringRadius: parent.state.ringRadius,
            meshMaterial: parent.state.meshMaterial,
            updateList: [],
        };

        this.parent = parent;

        parent.addToUpdateList(this);

        this.heightMap = [];
        this.terrainMesh = this.generateTerrain();
    }

    generateTerrain() {
        const width = this.state.width;
        const height = this.state.height;
        const radius = this.state.ringRadius;

        const resolution = this.state.resolution;
        const scale = this.state.noiseScale;

        const noise2D = createNoise2D(alea(this.state.seed));

        function map(val: number, smin: number, smax: number, emin: number, emax: number) {
            const t = (val - smin) / (smax - smin);
            return (emax - emin) * t + emin;
        }

        function noise(nx: number, ny: number) {
            return map(noise2D(nx, ny), -1, 1, 0, 1);
        }

        


    }
}

export default Chunk;


