import {

    createStage,
    createViewport,
    createViewportAwareInputHandler,
} from 'gdxjs';



  const stage = createStage();

const canvas = stage.getCanvas();
export const viewport = createViewport(canvas, 50, 100);
export const gl = viewport.getContext();
export const inputHandler = createViewportAwareInputHandler(canvas, viewport);

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



