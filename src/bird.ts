import {
  Animation,
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
    SpriteBatch,
    TextureRegion,
    Vector2
  } from 'gdxjs';
import { ViewportAwareInputHandler } from 'gdxjs/lib/createViewportAwareInputHandler';
import {stop }from "./stop"
let accumulate = 0;
let Time_gia_toc = 0;
let rotateAngle = 7;
let roatateTime = 0;
let stateTime = 0;

  export class Bird {
      BirdDown(delta:number,bird:{x:number,y:number}){
        Time_gia_toc = Time_gia_toc + delta;

        if (stop == 0) {
          bird.y = bird.y + 1.3 * Time_gia_toc;
        } else {
          bird.y = bird.y;
        }
        if (Time_gia_toc >= 2) {
          Time_gia_toc = 0;
        }
      }

      touchBird(inputHandler:ViewportAwareInputHandler,delta:number,bird:{x:number,y:number},array:{x:number,y:number}[]){
 accumulate += delta;
    if (accumulate >= 1.5) {
      accumulate = 0;
    }
    if (inputHandler.isTouched() && stop == 0) {
      bird.y = bird.y - 1.5;
      Time_gia_toc = 0;
      rotateAngle = 7;
      roatateTime = 0;

     
    }

      }
rotateRender(delta:number,runAnimation:Animation,runAnimation1:Animation,batch:SpriteBatch,bird:{x:number,y:number}){
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
    stateTime +=delta
    if (rotateAngle >= 10) {
      rotateAngle = 10;
    }

 
}
// checkBird(bird:{x:number,y:number},array:{x:number,y:number}[],stop:number){
//   for(let pipe of array){
// if (
//         bird.y < pipe.y &&
//         bird.y > pipe.y - 20 &&
//         Math.round(bird.x - pipe.x - 2.5) == 0 &&
//         stop == 0
//       ) {
//       } else if (
//         (bird.y > pipe.y && bird.x + 5 > pipe.x && bird.x < pipe.x + 10) ||
//         (bird.y < pipe.y - 20 && bird.x + 5 > pipe.x && bird.x < pipe.x + 10) ||
//         bird.y >= 85
//       ) {
//         stop = 1;
//       }
    
// }
  }
