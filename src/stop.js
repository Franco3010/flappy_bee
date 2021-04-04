
import {allArray} from "./indexLoop"

export let stop = 0

export function checkStop(){
    for(let pipe of allArray.pipes){
        // console.log(stop)
        if(
         allArray.bird.y < pipe.Y &&
         allArray.bird.y > pipe.Y - 20 
  ){
    
stop = 0
      }
     
        else if (      
           allArray.bird.y> pipe.Y &&allArray.bird.x + 5 > pipe.X &&allArray.bird.x < pipe.X + 10 ||
           allArray.bird.y< pipe.Y - 20 &&allArray.bird.x + 5 > pipe.X &&allArray.bird.x < pipe.X + 10 ||
           allArray.bird.y>= 85){
            stop = 1 ;
  
        }
    }
 } 

 export function resetStop(inputHandler){
         if (inputHandler.isTouched() && stop == 1) {
      for (let pipe of allArray.pipes) {
        pipe.X = pipe.X - 30;
      }
      allArray.bird.y = 40;
      stop = 0;
    }
 }