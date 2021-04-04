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
  
  
  export class Bike {
      pushBike(delta:number,beeX:number,array:{X:number,Y:number,powerup:number}[]){
       accumulate+=delta
        
        if (accumulate > 3 && stop == 0) {
        
          accumulate = 0;
          
              array.push({
                X: beeX,
                Y: 80,
                powerup: Math.random()
              });
        }
      }
  
      drawBike(img:Texture,batch:SpriteBatch,array:{X:number,Y:number,powerup:number}[],indexBee:number,width:number,height:number,speedBike:number){
     
          for (let bike of array) {
     
              indexBee = array.indexOf(bike);
              batch.draw(img, bike.X, bike.Y, width, height);
        
           
                if (stop == 0) {
                  bike.X = bike.X - speedBike;
                }
              
              if (bike.X< -300) {
                array.splice(indexBee, 1);
  
              }
            }
          
      }
  
  
  }
  
  
  
  
  
  