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
    Texture,
    TextureRegion,
    Vector2
  } from 'gdxjs';
  const stage = createStage();

  const canvas = stage.getCanvas();
  // const ctx = canvas.getContext("2d")
  const viewport = createViewport(canvas, 50, 100);
  export const gl = viewport.getContext();
  const camera = viewport.getCamera();

  
  
  const batch = createBatch(gl);