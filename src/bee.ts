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
  SpriteBatch,
  Texture,
  TextureRegion,
  Vector2
} from 'gdxjs';
import {stop} from "./stop"

let accumulate = 0;


export class Bee {
    pushBee(delta:number,beeX:number,beeYmax:number,beeYmin:number,array:{X:number,Y:number,powerup:number}[]){
     accumulate+=delta
      
      if (accumulate > 2 && stop == 0) {
      
        accumulate = 0;
        
            array.push({
              X: beeX,
              Y: Math.floor(Math.random() * (beeYmax - beeYmin + 1)) + beeYmin,
              powerup: Math.random()
            });
      }
    }

    drawBee(img:Texture,batch:SpriteBatch,array:{X:number,Y:number,powerup:number}[],indexBee:number,width:number,height:number){
   
        for (let bee of array) {
   
            indexBee = array.indexOf(bee);
            batch.draw(img, bee.X, bee.Y, width, height);
      
            if (bee.powerup < 0.4 && stop == 0) {
              bee.X = bee.X - 0.2;
            } else {
              if (stop == 0) {
                bee.X = bee.X - 0.5;
              }
            }
            if (bee.X< -300) {
              array.splice(indexBee, 1);

            }
          }
        
    }

  
begin(batch:SpriteBatch){
batch.begin()
}
end(batch:SpriteBatch){
  batch.end()
  }
}





