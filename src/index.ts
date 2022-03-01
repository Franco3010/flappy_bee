import './index.css';
import {
  createAnimation,
  createBatch,
  createGameLoop,
  createWhiteTexture,
  TextureRegion,
  loadTexture
} from 'gdxjs';
import './bee.ts';
import { Bee } from './bee';
import {
  showArray,
  showIndex,
  gl,
  viewport,
  inputHandler
} from './indexLoop.js';
import { checkStop, resetStop } from './stop';
import { Wire } from './wire';
import { Pipe } from './pipe';
import { Ground } from './ground';
import { Bike } from './bike';
import { Bird } from './bird';

const init = async () => {
  const camera = viewport.getCamera();
  const batch = createBatch(gl);
  const whiteTex = createWhiteTexture(gl);
  let bee = new Bee();
  let wire = new Wire();
  let pipe = new Pipe();
  let ground = new Ground();
  let bike = new Bike();
  let birdObj = new Bird();

let birdsImg = await loadTexture(gl, './main.png');
let imgSky = await loadTexture(gl, './sky.jpg');
  let groundsImg = await loadTexture(gl, './base.jpg');
  let bee1Img = await loadTexture(gl, './bee01.png');
  let bee2Img = await loadTexture(gl, './bee02.png');
  let pipeImg = await loadTexture(gl, './pipe.png');
  let pipeDownImg = await loadTexture(gl, './pipe-down.png');
  let signImg = await loadTexture(gl, './sign.png');
  let treeImg = await loadTexture(gl, './tree.png');
  let wireImg = await loadTexture(gl, './wire.png');
  let houseImg = await loadTexture(gl, './house.png');
  let cloudImg = await loadTexture(gl, './cloud.png');
  let bikeImg = await loadTexture(gl, './bike.png');
  let bike2Img = await loadTexture(gl, './bike2.png');

  const birdImg = TextureRegion.splitTexture(birdsImg, 3, 1);

  const runAnimation = createAnimation(0.1, birdImg);

  const runAnimation1 = createAnimation(50, birdImg);
  console.log("hello")

  gl.clearColor(0, 0, 0, 1);
  createGameLoop(delta => {
    birdObj.BirdDown(delta, showArray('bird'));
    birdObj.touchBird(
      inputHandler,
      delta,
      showArray('bird'),
      showArray('pipes')
    );
    resetStop(inputHandler);

    
//     moi class wire, bee,... co function 
//    1.tao ra 1 mang rong chua cac phan tu
//    2. add các phân tử vào mảng theo thời gian
//    3. xóa các phần tử khi không cân đến
    wire.pushWire(
      delta,
      showIndex('LastIndexSky'),
      showArray('skys'),
      showIndex('indexSky'),
      0
    );
    wire.pushWire(
      delta,
      showIndex('LastIndexCloud'),
      showArray('clouds'),
      showIndex('indexCloud'),
      60
    );
    wire.pushWire(
      delta,
      showIndex('LastIndexHouse'),
      showArray('houses'),
      showIndex('indexHouse'),
      65
    );
    wire.pushWire(
      delta,
      showIndex('LastIndexTree'),
      showArray('trees'),
      showIndex('indexTree'),
      75
    );
    wire.pushWire(
      delta,
      showIndex('LastIndexWire'),
      showArray('wires'),
      showIndex('indexWire'),
      65
    );

    bee.pushBee(delta, 80, 50, 30, showArray('bees01'));
    bee.pushBee(delta, 50, 60, 20, showArray('bees02'));

    bike.pushBike(delta, 25, showArray('bikes01'));
    bike.pushBike(delta, 45, showArray('bikes02'));

    pipe.pushPipe(
      showArray('bird'),
      delta,
      showArray('pipes'),
      showIndex('indexPipe')
    );
    ground.pushGround(
      delta,
      showIndex('LastIndexGround'),
      showArray('grounds'),
      showIndex('indexGround'),
      90
    );

    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(camera.combined);
    batch.begin();
    batch.draw(whiteTex, 0, 0, 50, 100);

    wire.drawWire(imgSky, batch, showArray('skys'), 25, 75);
    wire.drawWire(cloudImg, batch, showArray('clouds'), 25, 25);
    wire.drawWire(houseImg, batch, showArray('houses'), 25, 25);
    wire.drawWire(wireImg, batch, showArray('wires'), 25, 25);

    bee.drawBee(
      bee1Img,
      batch,
      showArray('bees01'),
      showIndex('indexBee'),
      15,
      7.5
    );
    bee.drawBee(
      bee2Img,
      batch,
      showArray('bees02'),
      showIndex('indexBee2'),
      9,
      7.7
    );

    wire.drawWire(treeImg, batch, showArray('trees'), 25, 15);

    bike.drawBike(
      bikeImg,
      batch,
      showArray('bikes01'),
      showIndex('indexBike1'),
      60,
      10,
      0.3
    );
    bike.drawBike(
      bike2Img,
      batch,
      showArray('bikes02'),
      showIndex('indexBike2'),
      60,
      10,
      0.5
    );
    pipe.drawPipe(
      pipeImg,
      signImg,
      pipeDownImg,
      showArray('bird'),
      batch,
      showArray('pipes')
    );
    ground.drawGround(groundsImg, batch, showArray('grounds'));
    birdObj.rotateRender(
      delta,
      runAnimation,
      runAnimation1,
      batch,
      showArray('bird')
    );

    checkStop();

    batch.setColor(0.4, 0.4, 0.4, 1);

    batch.setColor(1, 1, 1, 1);

    batch.end();
  });
};

init();
