import map from "./map.js";
import Camera from "./camera.js";
export default class Game{
  constructor( canvasWidth,canvasHeight, gameWidth, gameHeight){
    console.log("game constructed");
    this.canvasHeight =canvasHeight
    this.canvasWidth =canvasWidth
    this.gameHeight =gameHeight
    this.gameWidth =gameWidth
    this.tableMap = new map(gameWidth, gameHeight);
    this.camera = new Camera(gameWidth,gameHeight);



  document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "ArrowUp") this.camera.update(0, -1);
    if (e.key === "ArrowDown") this.camera.update(0, 1);
    if (e.key === "ArrowRight") this.camera.update(1, 0);
    if (e.key === "ArrowLeft") this.camera.update(-1, 0);
  })


  }
  render(ctx){
    ctx.drawImage(
      this.tableMap.img,
      this.camera.x,
      this.camera.y,
      this.canvasWidth,
      this.canvasHeight,
      0,
      0,
      this.gameWidth,
      this.gameHeight
    );
  }
}