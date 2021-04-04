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
  import {stop} from "./stop.js" 
  let accumulate = 0;
  // export let stop = 0;
  
  
  export class Pipe {
      pushPipe(bird:{x:number,y:number},delta:number,array:{X:number,Y:number}[],indexPipe:number){
       accumulate+=delta
  
        if (accumulate > 1.5  && stop ==0) {
        
          accumulate = 0;
          
              array.push({
                X: 45,

                Y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
              
              });
        }
        console.log(array.length)
        for (let pipe of array) {  
            
            if (pipe.X < -10) {
              array.splice(indexPipe, 1);
              
          
      }
    }
      }
  
      drawPipe(img:Texture,img1:Texture,img2:Texture,bird:{x:number,y:number},batch:SpriteBatch,array:{X:number,Y:number}[]){
     
          for (let pipe of array) {
     
      batch.draw(img, pipe.X, pipe.Y, 10, 100);
      batch.draw(img1, pipe.X + 3.5, pipe.Y + 7, 3, 3);

      batch.draw(img2, pipe.X, 90 - (90 - pipe.Y) - 20 - 100, 10, 100);
      if (stop == 0) {
        pipe.X = pipe.X - 0.5;
      }
      // if (
      //   bird.y < pipe.Y &&
      //   bird.y > pipe.Y - 20 &&
      //     Math.round(bird.x - pipe.X - 2.5) == 0 
      //   )  {
      // }
      // else if( 
      //   bird.y > pipe.Y && bird.x + 5 > pipe.X && bird.x < pipe.X + 10 ||
      // bird.y < pipe.Y - 20 && bird.x + 5 > pipe.X && bird.x < pipe.X + 10 ||
      // bird.y >= 85
      // ){
      //   pipe.X = pipe.X 
      // }
    
  
    
 
  }
  
  
}

  
} 
  