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
  
  
  export class Ground {
      pushGround(delta:number, lastIndex:number,array:{X:number,Y:number}[],indexWire:number,wireY:number){
       accumulate+=delta
        
    
        for (let wire of array) {
            indexWire = array.indexOf(wire);
           lastIndex = array.length - 1;
        
            if (accumulate > 0.3 && stop == 0) {
              accumulate = 0;
        
              array.push({
                X: array[lastIndex].X + 10,
                Y: wireY
              });
            }
            if (wire.X < -10) {
              array.splice(indexWire, 1);
            }
          }
      }
  
      drawGround(img:Texture,batch:SpriteBatch,array:{X:number,Y:number}[]){
     
        for (let wire of array) {
      
            batch.draw(img, wire.X, wire.Y, 10, 10);
      
      
            if (stop == 0) {
              wire.X = wire.X - 0.5;
            }
          }
          
      }
  
    

  }
  
  
  
  
  
  
  