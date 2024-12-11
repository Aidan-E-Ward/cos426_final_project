import { Group, 
    Mesh, 
    PlaneGeometry, 
    MeshStandardMaterial,
    BoxGeometry,
    Vector3,
    Quaternion,
} from 'three';
import { Body, Box, Vec3, } from 'cannon';
import { createNoise2D } from 'simplex-noise';
import ChunkManager from './ChunkManager';
import alea from 'alea';
import SeedScene from '../scenes/SeedScene';


class Chunk extends Group {
    terrainMesh: Mesh;
    state;
    pileMeshes: Mesh[] = [];
    pileBodies: Body[] = [];
    world;

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
            meshMaterial: parent.state.meshMaterial || new MeshStandardMaterial(),
            updateList: [] as number[],
        };

        this.world = scene.world;
        this.parent = parent;

        parent.addToUpdateList(this);

        this.terrainMesh = this.createFlatTerrain();
        this.add(this.terrainMesh);

        this.generatePiles();
    }

    createFlatTerrain(): Mesh {
        const geometry = new PlaneGeometry(this.state.width, this.state.height, 1, 1);
        const material = new MeshStandardMaterial({ color: 0x808080 });

        const mesh = new Mesh(geometry, material);

        mesh.rotation.x = -Math.PI / 2;
        mesh.position.y = 0;
        return mesh;
    }

    generatePiles() {
        const pileCount = 10; // number of piles in a chunk
        const pileSize = 3; //  number of cubes per pile

        for (let i = 0; i < pileCount; i++) {
            const pile = new Group();
            const baseX = (Math.random() - 0.5) * this.state.width;
            const baseZ = (Math.random()  - 0.5) * this.state.height;
            const baseY = 0.5 // some y starting point

            for (let j = 0; i < pileSize; j++) {
                // some logic for generating the pile

                const body = new Body({
                    mass: 1,
                    position: new Vec3(baseX, baseY + j, baseZ),
                    shape: new Box(new Vec3(0.5, 0.5, 0.5)),
                });
                this.world.addBody(body);
                this.pileBodies.push(body);
            }

            // somethng to push mesh onto the pileMeshes 
            this.add(pile);
        }
    }

    moveOnRing(speed: number) {
        // Calculate the z position of the mesh based on its theta position in the ring
        this.state.thetaOffset -= 0.001 * speed * 2 * Math.PI;
        const thetaOffset = this.state.thetaOffset;
        const mesh = this.terrainMesh;
        const radius = this.state.ringRadius;
        let chordThetaOff = 0;
        
        let alpha = (mesh.position.x)/(39*this.state.width)
        chordThetaOff = 15* alpha * (2 * Math.PI) / 1000;
        
        mesh.position.x = radius * Math.sin(thetaOffset-chordThetaOff);
        mesh.position.z = radius - radius * Math.cos(thetaOffset-chordThetaOff);
        mesh.lookAt(0, 0, this.state.ringRadius);
    }

    explodePile(pileIndex: number) {
        const body = this.pileBodies[pileIndex];
        body.applyImpulse(new Vec3(
            x,
            y,
            z
        ), body.position);
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

        this.pileBodies.forEach((body, index) => {
            const mesh = this.pileMeshes[index];
            mesh.position.copy(body.position as unknown as Vector3);
            mesh.quaternion.copy(body.quaternion as unknown as Quaternion);
        });
    }
}

export default Chunk;


