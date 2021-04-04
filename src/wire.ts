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
  
  
  export class Wire {
      pushWire(delta:number, lastIndex:number,array:{X:number,Y:number}[],indexWire:number,wireY:number){
       accumulate+=delta
        
    
        for (let wire of array) {
            indexWire = array.indexOf(wire);
           lastIndex = array.length - 1;
        
            if (accumulate > 2.5 && stop == 0) {
              accumulate = 0;
        
              array.push({
                X: array[lastIndex].X + 25,
                Y: wireY
              });
            }
            if (wire.X < -25) {
              array.splice(indexWire, 1);
            }
          }
      }
  
      drawWire(img:Texture,batch:SpriteBatch,array:{X:number,Y:number}[],width:number,height:number){
     
        for (let wire of array) {
      
            batch.draw(img, wire.X, wire.Y, width, height);
      
      
            if (stop == 0) {
              wire.X = wire.X - 0.1;
            }
          }
          
      }
  

  }
  
  
  
  
  
  
  