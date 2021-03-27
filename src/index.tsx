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
import { time } from 'console';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

// // WebGL
const stage = createStage();

const canvas = stage.getCanvas();
// const ctx = canvas.getContext("2d")
const viewport = createViewport(canvas, 50, 100);
let count = 0;
const inputHandler = createViewportAwareInputHandler(canvas, viewport);
let store = {
  x: 5,
  y: 5
};
let score = 0;
let Realscore = '';
let stop = 0;
let indexPipe;
let indexWire;
let indexBike;
let indexBike2;
let indexGround;
let indexHouse;
let indexTree;
let indexSky;
let indexBee;
let indexBee2;
let Time_gia_toc = 0;
let rotateAngle = 7;
let roatateTime = 0;
let lastIndexGround;
let lastIndexWire;
let lastIndexBee01;
let lastIndexBee02;
let lastIndexCloud;
let lastIndexSky;
let lastIndexTree;
let lastIndexHouse;

const init = async () => {
  // const stage = createStage();
  // const canvas = stage.getCanvas();

  // const viewport = createViewport(canvas, 50, 100);

  const gl = viewport.getContext();
  const camera = viewport.getCamera();

  let breakFun = function breakFunc() {};

  const batch = createBatch(gl);
  const whiteTex = createWhiteTexture(gl);
  const birdsImg = await loadTexture(gl, './main.png');
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
  const sora = await loadTexture(gl, './sora.jpg');
  const number1 = await loadTexture(gl, './1.png');
  const number2 = await loadTexture(gl, './2.png');
  const number3 = await loadTexture(gl, './3.png');
  const number4 = await loadTexture(gl, './4.png');
  const number5 = await loadTexture(gl, './5.png');
  const number6 = await loadTexture(gl, './6.png');
  const number7 = await loadTexture(gl, './7.png');
  const number8 = await loadTexture(gl, './8.png');
  const number9 = await loadTexture(gl, './9.png');
  const number0 = await loadTexture(gl, './0.png');
  const square = await loadTexture(gl, './square.png');
  const bikeImg = await loadTexture(gl, './bike.png');
  const bike2Img = await loadTexture(gl, './bike2.png');

  const birdImg = TextureRegion.splitTexture(birdsImg, 3, 1);

  const bird = {
    x: 5,
    y: 40
  };

  const mainAtlas = await loadAtlas(gl, './enemy.atlas', {});
  const runRegions = mainAtlas.findRegions('boss_projectile_A');
  const runRegions1 = mainAtlas.findRegions('boss_die');
  const runAnimation = createAnimation(0.1, birdImg);

  const runAnimation1 = createAnimation(50, birdImg);

  const bees01: { x: number; y: number; powerup: number }[] = [];
  const bees02: { x: number; y: number; powerup: number }[] = [];
  const rotate = [
    -4,
    4.5,
    -5,
    -5.5,
    -6,
    -6.5,
    -7,
    -7.5,
    -8,
    -8.5,
    -9,
    -9.5,
    -10,
    -10.5,
    -11,
    -11.5,
    -12,
    -12.5,
    -13,
    -13.5,
    -14,
    15,
    -15.5,
    -16,
    10,
    9.5,
    9,
    8.5,
    8,
    7.5,
    7,
    6.5,
    6,
    5.5,
    5,
    4.5,
    4,
    3.5,
    3,
    2.5,
    2
  ];
  let rotateIndex = 0;
  let storeValue;
  const bikes1: { x: number; y: number; speedup: number }[] = [
    {
      x: 25,
      y: 80,
      speedup: 0
    }
  ];
  const bikes2: { x: number; y: number; speedup: number }[] = [
    {
      x: 15,
      y: 80,
      speedup: 0
    }
  ];

  const pipes: { x: number; y: number }[] = [];

  const wires: { x: number; y: number }[] = [
    {
      x: 0,
      y: 65
    },
    {
      x: 25,
      y: 65
    },
    {
      x: 50,
      y: 65
    }
  ];
  const clouds: { x: number; y: number }[] = [
    {
      x: 0,
      y: 65
    },
    {
      x: 25,
      y: 65
    },
    {
      x: 50,
      y: 65
    }
  ];
  const houses: { x: number; y: number }[] = [
    {
      x: 0,
      y: 65
    },
    {
      x: 25,
      y: 65
    },
    {
      x: 50,
      y: 65
    }
  ];
  const skys: { x: number; y: number }[] = [
    {
      x: 0,
      y: 65
    },
    {
      x: 25,
      y: 65
    },
    {
      x: 50,
      y: 65
    }
  ];
  const trees: { x: number; y: number }[] = [
    {
      x: 0,
      y: 65
    },
    {
      x: 25,
      y: 65
    },
    {
      x: 50,
      y: 65
    }
  ];

  let treeIndex = 0;
  let wireIndex = 0;
  // const treebase = {
  //   x: 40,
  //   y: 80
  // }
  const grounds: { x: number; y: number }[] = [
    {
      x: 0,
      y: 90
    },
    {
      x: 10,
      y: 90
    },
    {
      x: 20,
      y: 90
    },
    {
      x: 30,
      y: 90
    },
    {
      x: 40,
      y: 90
    },
    {
      x: 50,
      y: 90
    }
  ];

  let indexMemo = 0;
  let indexMole = 0;
  const DROP_RATE = 4;
  let accumulate = 0; //?
  let accuSky = 0;
  let accuHouse = 0;
  let accuGround = 0;
  let accumulate1 = 0; //?
  let accuTree = 0;
  let accumulate2 = 0;
  let accuPipe = 0;
  let accumulateBee2 = 0;
  let indexCloud;

  const mole_SIZE = 10;

  let oldstore = {
    x: 0,
    y: 0
  };
  let signal = 1;
  let drawSignal = 0;
  let stateTime = 0; //?
  let accumulateScore = 0;
  let accuUp = 0;
  let accuCloud = 0;
  gl.clearColor(0, 0, 0, 1);
  createGameLoop(delta => {
    accuUp += delta;
    if (accuUp >= 1.5) {
      accuUp = 0;
    }
    if (inputHandler.isTouched() && stop == 0) {
      bird.y = bird.y - 1.5;
      Time_gia_toc = 0;
      rotateAngle = 7;
      roatateTime = 0;

      if (rotateIndex >= 4) {
        rotateIndex = rotateIndex - 4;
      }
    }
    if (inputHandler.isTouched() && stop == 1) {
      for (let pipe of pipes) {
        pipe.x = pipe.x - 30;
      }
      bird.y = 40;
      score = 0;
      stop = 0;
    }
    accuCloud += delta;
    accumulate += delta;
    accumulate1 += delta;
    accumulate2 += delta;
    accuPipe += delta;
    accuTree += delta;
    accumulateBee2 += delta;
    accuGround += delta;
    accuHouse += delta;
    accuSky += delta;

    if (accuPipe > 1.5 && stop == 0) {
      accuPipe = 0;

      pipes.push({
        x: 45,

        y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
      });
    }
    if (accumulate2 > 3 && stop == 0) {
      accumulate2 = 0;

      bikes1.push({
        x: 25,
        y: 80,
        speedup: Math.random()
      });

      bikes2.push({
        x: 15,
        y: 80,
        speedup: Math.random()
      });
    }

    if (accumulate > 2 && stop == 0) {
      accumulate = 0;

      bees01.push({
        x: 80,
        y: Math.floor(Math.random() * (50 - 30 + 1)) + 30,
        powerup: Math.random()
      });
    }

    if (accumulateBee2 > 2 && stop == 0) {
      accumulateBee2 = 0;

      bees02.push({
        x: 60,
        y: Math.floor(Math.random() * (60 - 20 + 1)) + 20,
        powerup: Math.random()
      });
    }

    for (let sky of skys) {
      indexSky = skys.indexOf(sky);
      lastIndexSky = skys.length - 1;

      if (accuSky > 4 && stop == 0) {
        accuSky = 0;

        skys.push({
          x: skys[lastIndexSky].x + 25,
          y: 65
        });
      }
      if (sky.x < -25) {
        skys.splice(indexSky, 1);
      }
    }
    for (let house of houses) {
      indexHouse = houses.indexOf(house);
      lastIndexHouse = houses.length - 1;

      if (accuHouse > 4 && stop == 0) {
        accuHouse = 0;

        houses.push({
          x: houses[lastIndexHouse].x + 25,
          y: 65
        });
      }
      if (house.x < -25) {
        houses.splice(indexHouse, 1);
      }
    }
    for (let tree of trees) {
      indexTree = trees.indexOf(tree);
      lastIndexTree = trees.length - 1;

      if (accuTree > 4 && stop == 0) {
        accuTree = 0;

        trees.push({
          x: trees[lastIndexTree].x + 25,
          y: 65
        });
      }
      if (tree.x < -25) {
        trees.splice(indexTree, 1);
      }
    }
    for (let wire of wires) {
      indexWire = wires.indexOf(wire);
      lastIndexWire = wires.length - 1;

      if (accumulate1 > 4 && stop == 0) {
        accumulate1 = 0;

        wires.push({
          x: wires[lastIndexWire].x + 25,
          y: 65
        });
      }
      if (wire.x < -25) {
        wires.splice(indexWire, 1);
      }
    }
    for (let cloud of clouds) {
      indexCloud = clouds.indexOf(cloud);
      lastIndexCloud = clouds.length - 1;

      if (accuCloud > 4 && stop == 0) {
        accuCloud = 0;

        clouds.push({
          x: clouds[lastIndexCloud].x + 25,
          y: 65
        });
      }
      if (cloud.x < -25) {
        clouds.splice(indexCloud, 1);
      }
    }

    for (let ground of grounds) {
      indexGround = grounds.indexOf(ground);
      lastIndexGround = grounds.length - 1;
      if (accuGround > 0.3 && stop == 0) {
        accuGround = 0;

        grounds.push({
          x: grounds[lastIndexGround].x + 10,
          y: 90
        });
      }
      if (ground.x < -10) {
        grounds.splice(indexGround, 1);
      }
    }

    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(camera.combined);
    batch.begin();
    batch.draw(whiteTex, 0, 0, 50, 100);
    Time_gia_toc = Time_gia_toc + delta;

    if (stop == 0) {
      bird.y = bird.y + 1.3 * Time_gia_toc;
    } else {
      bird.y = bird.y;
    }
    if (Time_gia_toc >= 2) {
      Time_gia_toc = 0;
    }
    console.log(houses.length);
    for (let sky of skys) {
      batch.draw(skyImg, sky.x, sky.y - 70, 25, 75);

      // batch.draw(house, wire.x, wire.y, 25, 25);

      // batch.draw(treeImg, wire.x, wire.y + 15, 25, 10);

      if (stop == 0) {
        sky.x = sky.x - 0.1;
      }
    }
    for (let cloud of clouds) {
      batch.draw(cloudImg, cloud.x, cloud.y - 3, 25, 25);

      // batch.draw(house, wire.x, wire.y, 25, 25);

      // batch.draw(treeImg, wire.x, wire.y + 15, 25, 10);

      if (stop == 0) {
        cloud.x = cloud.x - 0.1;
      }
    }
    for (let house of houses) {
      // batch.draw(cloudImg, house.x, house.y - 3, 25, 25);

      batch.draw(houseImg, house.x, house.y, 25, 25);

      // batch.draw(treeImg, wire.x, wire.y + 15, 25, 10);

      if (stop == 0) {
        house.x = house.x - 0.1;
      }
    }
    for (let wire of wires) {
      // batch.draw(cloudImg, house.x, house.y - 3, 25, 25);

      batch.draw(wireImg, wire.x, wire.y, 25, 25);

      // batch.draw(treeImg, wire.x, wire.y + 15, 25, 10);

      if (stop == 0) {
        wire.x = wire.x - 0.1;
      }
    }

    for (let tree of trees) {
      batch.draw(treeImg, tree.x, tree.y + 15, 25, 15);

      // batch.draw(house, wire.x, wire.y, 25, 25);

      // batch.draw(treeImg, wire.x, wire.y + 15, 25, 10);

      if (stop == 0) {
        tree.x = tree.x - 0.1;
      }
    }

    for (let bee of bees01) {
      indexBee = bees01.indexOf(bee);
      batch.draw(bee1Img, bee.x, bee.y, 15, 8.55);

      if (bee.powerup < 0.4 && stop == 0) {
        bee.x = bee.x - 0.2;
      } else {
        if (stop == 0) {
          bee.x = bee.x - 0.5;
        }
      }
      if (bee.x < -300) {
        bees01.splice(indexBee, 1);
      }
    }

    for (let bee of bees02) {
      indexBee2 = bees02.indexOf(bee);
      batch.draw(bee2Img, bee.x, bee.y, 9, 7.7);

      if (bee.powerup < 0.2 && stop == 0) {
        bee.x = bee.x - 0.2;
      } else {
        if (stop == 0) {
          bee.x = bee.x - 0.8;
        }
      }
      if (bee.x < -350) {
        bees02.splice(indexBee2, 1);
      }
    }

    for (let bike of bikes1) {
      indexBike = bikes1.indexOf(bike);

      batch.draw(bikeImg, bike.x, bike.y, 60, 10);

      if (stop == 0) {
        bike.x = bike.x - 0.3;
      }
      if (bike.x < -200) {
        bikes1.splice(indexBike, 1);
      }
    }
    for (let bike of bikes2) {
      indexBike2 = bikes2.indexOf(bike);

      batch.draw(bike2Img, bike.x, bike.y, 60, 10);

      if (stop == 0) {
        bike.x = bike.x - 0.5;
      }
      if (bike.x < -200) {
        bikes2.splice(indexBike2, 1);
      }
    }
    accumulateScore += delta;
    for (let pipe of pipes) {
      batch.draw(pipeImg, pipe.x, pipe.y, 10, 100);
      batch.draw(signImg, pipe.x + 3.5, pipe.y + 7, 3, 3);

      batch.draw(pipeDownImg, pipe.x, 90 - (90 - pipe.y) - 20 - 100, 10, 100);
      if (stop == 0) {
        pipe.x = pipe.x - 0.5;
      }

      if (
        bird.y < pipe.y &&
        bird.y > pipe.y - 20 &&
        Math.round(bird.x - pipe.x - 2.5) == 0 &&
        stop == 0
      ) {
        score = score + 0.5;
      } else if (
        (bird.y > pipe.y && bird.x + 5 > pipe.x && bird.x < pipe.x + 10) ||
        (bird.y < pipe.y - 20 && bird.x + 5 > pipe.x && bird.x < pipe.x + 10) ||
        bird.y >= 85
      ) {
        stop = 1;
      }
    }

    if (Number.isInteger(score)) {
      Realscore = score.toString();
    }
    for (var i = Realscore.length - 1; i >= 0; i--) {
      switch (Realscore[i]) {
        case '0':
          batch.draw(number0, 10 + 2 * i, 0, 2, 2);
          break;
        case '1':
          batch.draw(number1, 10 + 2 * i, 0, 2, 2);
          break;
        case '2':
          batch.draw(number2, 10 + 2 * i, 0, 2, 2);
          break;
        case '3':
          batch.draw(number3, 10 + 2 * i, 0, 2, 2);
          break;
        case '4':
          batch.draw(number4, 10 + 2 * i, 0, 2, 2);
          break;
        case '5':
          batch.draw(number5, 10 + 2 * i, 0, 2, 2);
          break;
        case '6':
          batch.draw(number6, 10 + 2 * i, 0, 2, 2);
          break;
        case '7':
          batch.draw(number7, 10 + 2 * i, 0, 2, 2);
          break;
        case '8':
          batch.draw(number8, 10 + 2 * i, 0, 2, 2);
          break;
        case '9':
          batch.draw(number9, 10 + 2 * i, 0, 2, 2);
          break;
      }
    }

    for (let ground of grounds) {
      batch.draw(groundsImg, ground.x, ground.y, 10, 10);
      if (stop == 0) {
        ground.x = ground.x - 0.5;
      }
    }
    if (stop == 0) {
      roatateTime += delta;
      rotateAngle = rotateAngle + 0.2 * roatateTime;
    }

    if (roatateTime >= 1.5) {
      roatateTime = 0;
    }
    if (stop == 0) {
      runAnimation
        .getKeyFrame(stateTime, PlayMode.LOOP)
        .draw(batch, bird.x, bird.y, 5, 4, 2.5, 2, (rotateAngle * Math.PI) / 4);
    } else {
      runAnimation1
        .getKeyFrame(stateTime, PlayMode.LOOP)
        .draw(batch, bird.x, bird.y, 5, 4, 2.5, 2, (rotateAngle * Math.PI) / 4);
    }
    if (rotateAngle >= 10) {
      rotateAngle = 10;
    }

    if (rotateIndex < 40) {
      rotateIndex = rotateIndex + 1;
    }

    stateTime += delta;

    for (let pipe of pipes) {
      indexPipe = pipes.indexOf(pipe);
      if (pipe.x < -10) {
        pipes.splice(indexPipe, 1);
        // console.log(pipes.length)
      }
    }

    indexMemo = 1;

    // batch.draw(scoreImg, 2, 0, 10, 10)
    // batch.draw(square, 20, 20, 10, 10, 7, 10, Math.PI / 2);
    batch.setColor(0.4, 0.4, 0.4, 1);

    batch.setColor(1, 1, 1, 1);

    batch.end();
  });
  // grounds.every(function (e) {
  //   e.x = e.x - 10
  //   console.log(e.x)
  // })
};

init();

// /**
//  * 1. Typescript
//  * 2. WebGL
//  * 3. Async/await, promise
//  */

// const init = async () => {
//   const stage = createStage();
//   const canvas = stage.getCanvas();
//   const viewport = createViewport(canvas, 40, 100);
//   const gl = viewport.getContext();
//   const batch = createBatch(gl);
//   const camera = viewport.getCamera();

//   const font = await loadFont(gl, './test.fnt');
//   const text = font.createRenderer(100);

//   gl.clearColor(0, 0, 0, 1);
//   let i = 0;
//   createGameLoop(delta => {
//     i += delta;
//     gl.clear(gl.COLOR_BUFFER_BIT);
//     batch.setProjection(camera.combined);
//     batch.begin();
//     text.draw(batch, 'blahblah: ' + i, 10, 10, 5);
//     batch.end();
//   });
// };

// init();
