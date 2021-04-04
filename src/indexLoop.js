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



  const stage = createStage();

const canvas = stage.getCanvas();
// const ctx = canvas.getContext("2d")
export const viewport = createViewport(canvas, 50, 100);
export const gl = viewport.getContext();
export const inputHandler = createViewportAwareInputHandler(canvas, viewport);


// async () =>{
//     let allImg = {
//         bee1Img:  await loadTexture(gl, './bee01.png'),
//         bee2Img: 0,
//         treeImg:async () =>{ return await loadTexture(gl, './tree.png')},
//         wireImg:async () =>{ return await loadTexture(gl, './wire.png')},
//         houseImg:async () =>{ return await loadTexture(gl, './house.png')},
//         skyImg:async () =>{ return await loadTexture(gl, './sky.jpg')},
//         groundImg:async () =>{ return await loadTexture(gl, './base.jpg')},
//         bike1Img:async () =>{ return await loadTexture(gl, './bike.png')},
//         bike2Img:async () =>{ return await loadTexture(gl, './bike2.png')},
//         pipeImg:async () =>{ return await loadTexture(gl, './pipe.png')},
//         pipeDownImg:async () =>{ return await loadTexture(gl, './pipe-down.png')},
//         cloudImg:async () =>{ return await loadTexture(gl, './cloud.png')},
//         birdImg:async () =>{ return await loadTexture(gl, './main.png')},
    
    
        
//     }
//     showImg =  (index) => { 
//         for(let img in allImg){
//             if(img.toString()==index.toString()){
//                 return allImg[img];
                
//         }
      
//         };
    
//     }
//     x = showImg()
// }



let allIndex = {
    indexBee:0,
    indexBee2:0,
    indexWire:0,
    LastIndexWire:0,
    indexHouse:0,
    LastIndexHouse:0,
    indexCloud:0,
    LastIndexCloud:0,
    LastIndexTree:0,
    indexTree: 0,
    indexSky:0,
    LastIndexSky:0,
    indexGround:0,
    LastIndexGround:0,
    indexBike1:0,
    indexBike2:0,
    indexPipe:0
}

  



export let allArray = {
    bees01:[],
    bees02:[],
    skys:[ {
        X: 0,
        Y: 0
      },
      {
        X: 25,
        Y: 0
      },
      {
        X: 50,
        Y: 0
      }],
    wires:[ {
        X: 0,
        Y: 65
      },
      {
        X: 25,
        Y: 65
      },
      {
        X: 50,
        Y: 65
      }],
    grounds:[ {
        X: 0,
        Y: 90
      },
      {
        X: 10,
        Y: 90
      },
      {
        X: 20,
        Y: 90
      },
      {
        X: 30,
        Y: 90
      },
      {
        X: 40,
        Y: 90
      },
      {
        X: 50,
        Y: 90
      }],
    bikes01:[
        
      ],
    bikes02:[ ],
    trees:[  {
        X: 0,
        Y: 75
      },
      {
        X: 25,
        Y: 75
      },
      {
        X: 50,
        Y: 75
      }],
    houses:[ {
        X: 0,
        Y: 65
      },
      {
        X: 25,
        Y: 65
      },
      {
        X: 50,
        Y: 65
      }],
    clouds:[{
        X: 0,
        Y: 60
      },
      {
        X: 25,
        Y: 60
      },
      {
        X: 50,
        Y: 60
      }],
    skys:[ {
        X: 0,
        Y: 0
      },
      {
        X: 25,
        Y: 0
      },
      {
        X: 50,
        Y: 0
      }],
    pipes:[],
    bird : {
        x:5,
        y:40
    }
}
//  export let pipes = []  


 
  
let memory;
export function showIndex(index){ 
    for(let key in allIndex){
        if(key.toString()==index.toString()){
            return allIndex[key];
            
    }
  
    };

}
export function showArray(index){ 
    for(let key in allArray){
        if(key.toString()==index.toString()){
            return allArray[key];
            
    }
  
    };

}



