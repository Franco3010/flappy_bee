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

// WebGL
const stage = createStage();

const canvas = stage.getCanvas();
// const ctx = canvas.getContext("2d")
const viewport = createViewport(canvas, 50, 100);
let count = 0
const inputHandler = createViewportAwareInputHandler(canvas, viewport);
let store = {
  x: 5,
  y: 5
}
let score = 0;
let Realscore = "";
let stop = 0
let indexPipe
let drawTime = 0
const init = async () => {
  // const stage = createStage();
  // const canvas = stage.getCanvas();

  // const viewport = createViewport(canvas, 50, 100);

  const gl = viewport.getContext();
  const camera = viewport.getCamera();

  let breakFun = function breakFunc() {

  }

  const batch = createBatch(gl);
  const whiteTex = createWhiteTexture(gl);
  const birdsImg = await loadTexture(gl, './main.png');
  const skyImg = await loadTexture(gl, './sky.jpg');
  const groundsImg = await loadTexture(gl, './base.jpg');
  const bee1Img = await loadTexture(gl, './bee01.png');
  const pipeImg = await loadTexture(gl, './pipe.png');
  const pipeDownImg = await loadTexture(gl, './pipe-down.png');
  const signImg = await loadTexture(gl, './sign.png');
  const treeImg = await loadTexture(gl, './tree.png');
  const wireImg = await loadTexture(gl, './wire.png');
  const house = await loadTexture(gl, './house.png');
  const cloud = await loadTexture(gl, './cloud.png');
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





  const bikeImg = await loadTexture(gl, './bike.png');
  const bike2Img = await loadTexture(gl, './bike2.png');




  const birdImg = TextureRegion.splitTexture(birdsImg, 3, 1)
  const bird = {
    x: 5,
    y: 40
  }
  const gr4 = {
    x: 40,
    y: 90
  }
  const gr3 = {
    x: 30,
    y: 90
  }
  const gr2 = {
    x: 20,
    y: 90
  }
  const gr1 = {
    x: 10,
    y: 90
  }
  const gr0 = {
    x: 0,
    y: 90
  }


  const mainAtlas = await loadAtlas(gl, './enemy.atlas', {});
  const runRegions = mainAtlas.findRegions('boss_projectile_A');
  const runRegions1 = mainAtlas.findRegions('boss_die');
  const runAnimation = createAnimation(0.1, birdImg);
  const runAnimation1 = createAnimation(50, birdImg);



  const bees01: { x: number; y: number; powerup: number }[] = [];

  const bikes: { x: number; y: number; speedup: number }[] = [];
  const pipes: { x: number; y: number; }[] = [];
  const trees: { x: number; y: number; }[] = [
    {
      x: 0,
      y: 80
    }
  ];
  const wires: { x: number; y: number; }[] = [
    {
      x: 0,
      y: 65
    }
  ];
  let treeIndex = 0;
  let wireIndex = 0;
  // const treebase = {
  //   x: 40,
  //   y: 80
  // }
  const grounds: { x: number; y: number }[] = [];
  const gr: { x: number; y: number }[] = [
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
    }
  ];


  let indexMemo = 0;
  let indexMole = 0;
  const DROP_RATE = 4;
  let accumulate = 0;//?
  let accumulate1 = 0;//?
  let accuTree = 0;

  const mole_SIZE = 10;

  let oldstore = {
    x: 0,
    y: 0
  }
  let signal = 1
  let drawSignal = 0;
  let stateTime = 0;//?
  let accumulateScore = 0;
  gl.clearColor(0, 0, 0, 1);
  createGameLoop(delta => {
    if (inputHandler.isTouched() && stop == 0) {

      bird.y = bird.y - 2



    }
    if (inputHandler.isTouched() && stop == 1) {
      for (let pipe of pipes) {
        pipe.x = pipe.x - 30
      }
      bird.y = 40
      score = 0
      stop = 0

    }
    accumulate += delta;
    accumulate1 += delta;
    accuTree += delta


    if (accumulate1 > 1.5 && stop == 0) {
      accumulate1 = 0;

      bikes.push({
        x: 25,
        y: 80,
        speedup: Math.random()
      })

    }



    if (accumulate > 2 && stop == 0) {
      accumulate = 0;
      bees01.push(
        {
          x: 50,
          y: 30,
          powerup: Math.random()
        }
      )
      pipes.push(
        {
          x: 45,

          y: Math.floor(Math.random() * (80 - 30 + 1)) + 30,
        }
      )


    }
    if (trees[treeIndex].x < -30 && stop == 0) {


      trees.push(
        {
          x: 50,
          y: 80,
        }
      )
      treeIndex = treeIndex + 1

    }
    if (wires[wireIndex].x < -9 && stop == 0) {


      wires.push(
        {
          x: 50,
          y: 65,
        }
      )
      wireIndex = treeIndex + 1

    }




    grounds.push({
      x: 1 * gr[0].x,
      y: 90
    })
    grounds.push({
      x: 1 * gr[4].x,
      y: 90
    })
    grounds.push({
      x: 1 * gr[3].x,
      y: 90
    })
    grounds.push({
      x: 1 * gr[2].x,
      y: 90
    })













    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(camera.combined);
    batch.begin();
    batch.draw(whiteTex, 0, 0, 50, 100);



    if (stop == 0) {
      bird.y = bird.y + 0.5
    }
    else {
      bird.y = bird.y
    }



    // batch.draw(treeImg, treebase.x, treebase.y, 20, 10)
    // batch.draw(treeImg, treebase.x - 20, treebase.y, 20, 10)

    // batch.draw(treeImg, treebase.x - 40, treebase.y, 20, 10)
    // treebase.x = treebase.x - 0.1





    for (let wire of wires) {

      batch.draw(sora, wire.x, wire.y - 70, 20, 40)
      batch.draw(sora, wire.x + 20, wire.y - 70, 20, 40)
      batch.draw(sora, wire.x + 40, wire.y - 70, 20, 40)

      batch.draw(skyImg, wire.x, wire.y - 30, 20, 25)
      batch.draw(skyImg, wire.x + 20, wire.y - 30, 20, 25)
      batch.draw(skyImg, wire.x + 40, wire.y - 30, 20, 25)

      batch.draw(cloud, wire.x, wire.y - 10, 20, 25)
      batch.draw(cloud, wire.x + 20, wire.y - 10, 20, 25)
      batch.draw(cloud, wire.x + 40, wire.y - 10, 20, 25)

      batch.draw(house, wire.x, wire.y, 20, 25)
      batch.draw(house, wire.x + 20, wire.y, 20, 25)
      batch.draw(house, wire.x + 40, wire.y, 20, 25)

      batch.draw(wireImg, wire.x, wire.y, 20, 25)
      batch.draw(wireImg, wire.x + 20, wire.y, 20, 25)
      batch.draw(wireImg, wire.x + 40, wire.y, 20, 25)






      // if (stop == 1) {
      //   break;
      // }
      if (stop == 0) {
        wire.x = wire.x - 0.1
      }




    }

    for (let bee of bees01) {
      batch.draw(bee1Img, bee.x, bee.y, 10, 10)
      // if (stop == 1) {
      //   break;
      // }
      if (bee.powerup < 0.3 && stop == 0) {
        bee.x = bee.x - 0.2
      }
      else {
        if (stop == 0) {
          bee.x = bee.x - 1
        }


      }
    }
    for (let tree of trees) {

      batch.draw(treeImg, tree.x, tree.y, 40, 10)
      batch.draw(treeImg, tree.x + 40, tree.y, 40, 10)





      if (stop == 0) {
        tree.x = tree.x - 0.1
      }




      // if (stop == 1) {
      //   break;
      // }
    }


    for (let bike of bikes) {
      if (bike.speedup < 0.2) {
        batch.draw(bikeImg, bike.x, bike.y, 50, 10)

        if (stop == 0) {
          bike.x = bike.x - 0.2
        }
      }
      else {
        batch.draw(bike2Img, bike.x - 10, bike.y, 50, 10)
        if (stop == 0) {
          bike.x = bike.x - 0.4
        }


      }

    }
    accumulateScore += delta
    for (let pipe of pipes) {

      batch.draw(pipeImg, pipe.x, pipe.y, 10, 100)
      batch.draw(signImg, pipe.x + 3.5, pipe.y + 7, 3, 3)


      batch.draw(pipeDownImg, pipe.x, (90 - (90 - pipe.y) - 20) - 100, 10, 100)
      if (stop == 0) {
        pipe.x = pipe.x - 0.4
      }


      if (bird.y < pipe.y &&
        bird.y > pipe.y - 20 &&
        Math.round(bird.x - pipe.x - 2.5) == 0 &&


        stop == 0
      ) {

        score = score + 0.5
        console.log(score)

      }
      else if (bird.y > pipe.y &&
        bird.x + 5 > pipe.x &&
        bird.x < pipe.x + 10 ||
        bird.y < pipe.y - 20 &&
        bird.x + 5 > pipe.x &&
        bird.x < pipe.x + 10 ||
        bird.y >= 85) {
        stop = 1
      }
      // if (stop == 1) {
      //   break;
      // }
    }
    // console.log(accumulateScore)

    if (Number.isInteger(score)) {
      Realscore = score.toString();
    }
    for (var i = Realscore.length - 1; i >= 0; i--) {
      switch (Realscore[i]) {
        case "0":
          batch.draw(number0, 10 + 2 * i, 0, 2, 2)
          break;
        case "1":
          batch.draw(number1, 10 + 2 * i, 0, 2, 2)
          break;
        case "2":
          batch.draw(number2, 10 + 2 * i, 0, 2, 2)
          break;
        case "3":
          batch.draw(number3, 10 + 2 * i, 0, 2, 2)
          break;
        case "4":
          batch.draw(number4, 10 + 2 * i, 0, 2, 2)
          break;
        case "5":
          batch.draw(number5, 10 + 2 * i, 0, 2, 2)
          break;
        case "6":
          batch.draw(number6, 10 + 2 * i, 0, 2, 2)
          break;
        case "7":
          batch.draw(number7, 10 + 2 * i, 0, 2, 2)
          break;
        case "8":
          batch.draw(number8, 10 + 2 * i, 0, 2, 2)
          break;
        case "9":
          batch.draw(number9, 10 + 2 * i, 0, 2, 2)
          break;

      }

    }

    for (let ground of grounds) {
      batch.draw(groundsImg, ground.x, ground.y, 10, 10)
      ground.x = ground.x - 0.5
    }


    // ctx?.rotate(40 * Math.PI / 180)
    if (stop == 0) {
      runAnimation
        .getKeyFrame(stateTime, PlayMode.LOOP)
        .draw(batch, bird.x, bird.y, 5, 5);
    }
    else {
      runAnimation1
        .getKeyFrame(stateTime, PlayMode.LOOP)
        .draw(batch, bird.x, bird.y, 5, 5);
    }

    stateTime += delta;



    for (let pipe of pipes) {
      indexPipe = pipes.indexOf(pipe)
      if (pipe.x < -10) {
        pipes.splice(indexPipe, 1)
        // console.log(pipes.length)
      }

    }




    indexMemo = 1;

    // batch.draw(scoreImg, 2, 0, 10, 10)







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

/**
 * 1. Typescript
 * 2. WebGL
 * 3. Async/await, promise
 */
