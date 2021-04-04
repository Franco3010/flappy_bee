import './index.css';
import {
  createAnimation,
  createBatch,
  createGameLoop,
  createStage,
  createViewport,
  createViewportAwareInputHandler,
  createWhiteTexture,
  loadAtlas,
  loadTexture,
  PlayMode,
  TextureRegion,
  Vector2
} from 'gdxjs';
import  './bee.ts';
import { Bee } from './bee';
import {showArray, showIndex,gl,viewport,inputHandler} from './indexLoop.js';
import {checkStop,resetStop} from "./stop"
import { Wire } from './wire';
import { Pipe } from './pipe';
import { Ground} from './ground'
import { Bike} from './bike'
import { Bird } from './bird';

const init = async () => {

  const camera = viewport.getCamera();
  const batch = createBatch(gl);
  const whiteTex = createWhiteTexture(gl);
  const skyImg = await loadTexture(gl, './sky.jpg');
  const groundsImg = await loadTexture(gl, './base.jpg');
  const bee1Img = await loadTexture(gl, './bee01.png');
  const bee2Img = await loadTexture(gl, './bee02.png');
  const pipeImg = await loadTexture(gl, './pipe.png');
  const pipeDownImg = await loadTexture(gl, './pipe-down.png');
  const signImg = await loadTexture(gl, './sign.png');
  const treeImg = await loadTexture(gl, './tree.png');
  const wireImg = await loadTexture(gl, './wire.png');
  const houseImg = await loadTexture(gl, './house.png');
  const cloudImg = await loadTexture(gl, './cloud.png');
  const bikeImg = await loadTexture(gl, './bike.png');
  const bike2Img = await loadTexture(gl, './bike2.png');
let bee = new Bee();
let wire = new Wire();
let pipe = new Pipe();
let ground = new Ground();
let bike = new Bike();
let birdObj = new Bird();
const birdsImg = await loadTexture(gl, './main.png');

  const birdImg = TextureRegion.splitTexture(birdsImg, 3, 1);

 const runAnimation = createAnimation(0.1, birdImg);

  const runAnimation1 = createAnimation(50, birdImg);

  gl.clearColor(0, 0, 0, 1);
  createGameLoop(delta => {
    birdObj.BirdDown(delta,showArray("bird"))
    birdObj.touchBird(inputHandler,delta,showArray("bird"),showArray("pipes"))
  resetStop(inputHandler)
    
    wire.pushWire(delta,showIndex("LastIndexSky"),showArray("skys"),showIndex("indexSky"),0)
    wire.pushWire(delta,showIndex("LastIndexCloud"),showArray("clouds"),showIndex("indexCloud"),60)
    wire.pushWire(delta,showIndex("LastIndexHouse"),showArray("houses"),showIndex("indexHouse"),65)
    wire.pushWire(delta,showIndex("LastIndexTree"),showArray("trees"),showIndex("indexTree"),75)
    wire.pushWire(delta,showIndex("LastIndexWire"),showArray("wires"),showIndex("indexWire"),65)

    bee.pushBee(delta,80,50,30, showArray("bees01") );
    bee.pushBee(delta,50,60,20, showArray("bees02") );

    bike.pushBike(delta,25,showArray("bikes01"))
    bike.pushBike(delta,45,showArray("bikes02"))

    pipe.pushPipe(showArray("bird"),delta,showArray("pipes"),showIndex("indexPipe"))
    ground.pushGround(delta,showIndex("LastIndexGround"),showArray("grounds"),showIndex("indexGround"),90)

    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(camera.combined);
    bee.begin(batch)
    batch.draw(whiteTex, 0, 0, 50, 100);
  

wire.drawWire(skyImg,batch,showArray("skys"),25,75)
wire.drawWire(cloudImg,batch,showArray("clouds"),25,25)
wire.drawWire(houseImg,batch,showArray("houses"),25,25)
wire.drawWire(wireImg,batch,showArray("wires"),25,25)

bee.drawBee(bee1Img,batch,showArray("bees01"),showIndex("indexBee"),15,8.55);
bee.drawBee(bee2Img,batch,showArray("bees02"),showIndex("indexBee2"),9,7.7);

wire.drawWire(treeImg,batch,showArray("trees"),25,15)

bike.drawBike(bikeImg,batch,showArray("bikes01"),showIndex("indexBike1"),60,10,0.3)
bike.drawBike(bike2Img,batch,showArray("bikes02"),showIndex("indexBike2"),60,10,0.5)
pipe.drawPipe(pipeImg,signImg,pipeDownImg,showArray("bird"),batch,showArray("pipes"))
ground.drawGround(groundsImg,batch,showArray("grounds"))

birdObj.rotateRender(delta,runAnimation,runAnimation1,batch,showArray("bird"))
   

checkStop();

batch.setColor(0.4, 0.4, 0.4, 1);

batch.setColor(1, 1, 1, 1);

bee.end(batch)
  });

};

init();


