export default class map{
  constructor(gameWidth,gameHeight){
    this.gameHeight =gameHeight
    this.gameWidth =gameWidth

    this.img = document.querySelector("#woodTile");
    console.log(this.img.height,this.img.width)

    this.imgHeight = 32;
    this.imgWidth = 32;

    this.row = this.img.height/32;
    this.col = this.img.width/32;

    this.arr = [
      [42,42,42,42,1,1,1,1,1,1,1,1,1,1,42],
      [42,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [42,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [42,1,1,1,3,1,1,1,1,1,1,1,1,1,1],
      [42,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [42,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [42,1,1,22,37,1,1,1,1,1,1,1,1,1,1],
      [42,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [42,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [42,42,42,42,42,42,42,42,42,42,42,42,42,42,42],
    ];
    /*
    this.imgHeight = this.img.height;
    this.imgWidth = this.img.width;
    */
  }
  draw(context,canvX,canvY,canvW,canvH){
    //drawImage(img, imgx, imgy, imgw, imgh, dx, dy, dw, dh)
    //row , height -> px,px
    document.querySelector("#canvasPops").innerHTML = `${canvX},${canvY},${canvW},${canvH},${this.row},${this.col}`;
    for(let row = 0;row<10;row++){ //
      for (let col = 0; col<15; col++) {
        const tileNo = this.arr[row][col];
        const x = (tileNo%this.col) ;
        const y = Math.floor(tileNo/this.col);
        // console.log(tileNo,x,y);
        context.drawImage(
          this.img,
          x*32,y*32,
          this.imgWidth,this.imgHeight,

          col * this.imgWidth,row * this.imgHeight,
          this.imgWidth,this.imgHeight);
      }
    }
  }
  fill(context){
    for (let i = 0; i < this.gameHeight; i += this.imgHeight) {
      for (let j = 0; j < this.gameWidth; j += this.imgWidth) {
        context.drawImage(this.img, 0, 0, this.img.width, this.img.height, j, i,this.imgWidth,this.imgHeight);
      }
    }
  }
}