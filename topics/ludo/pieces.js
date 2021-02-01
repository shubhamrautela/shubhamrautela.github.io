class Piece{
  constructor(color){
  this.radius = 10;
  this.color = color;
  this.clickable = false;
  this.path = [];
 }
}


class RedPiece extends Piece{
  constructor(x,y){
    super("red");
    this.x = x;
    this.y = y;
    this.initX = 0;
    this.initY = 0;
    this.curr=-1;
    this.path = [ [2,7],[3,7],[4,7],[5,7],[6,7],
                  [7,6],[7,5],[7,4],[7,3],[7,2],[7,1],
                  [8,1],
                  [9,1],[9,2],[9,3],[9,4],[9,5],[9,6],
                  [10,7],[11,7],[12,7],[13,7],[14,7],[15,7],
                  [15,8],
                  [15,9],[14,9],[13,9],[12,9],[11,9],[10,9],
                  [9,10],[9,11],[9,12],[9,13],[9,14],[9,15],
                  [8,15],
                  [7,15],[7,14],[7,13],[7,12],[7,11],[7,10],
                  [6,9],[5,9],[4,9],[3,9],[2,9],[1,9],
                  [1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8]
                ]
  }
}


class GreenPiece extends Piece{
  constructor(x,y){
    super("lightgreen");
    this.x = x;
    this.y = y;
    this.initX = 0;
    this.initY = 0;
    this.curr=-1;
    this.path = [ [9,2],[9,3],[9,4],[9,5],[9,6],
                  [10,7],[11,7],[12,7],[13,7],[14,7],[15,7],
                  [15,8],
                  [15,9],[14,9],[13,9],[12,9],[11,9],[10,9],
                  [9,10],[9,11],[9,12],[9,13],[9,14],[9,15],
                  [8,15],
                  [7,15],[7,14],[7,13],[7,12],[7,11],[7,10],
                  [6,9],[5,9],[4,9],[3,9],[2,9],[1,9],
                  [1,8],
                  [1,7],[2,7],[3,7],[4,7],[5,7],[6,7],
                  [7,6],[7,5],[7,4],[7,3],[7,2],[7,1],
                  [8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7]
                ]
  }
}




class YellowPiece extends Piece{
  constructor(x,y){
    super("yellow");
    this.x = x;
    this.y = y;
    this.initX = 0;
    this.initY = 0;
    this.curr=-1;
    this.path = [ [14,9],[13,9],[12,9],[11,9],[10,9],
                  [9,10],[9,11],[9,12],[9,13],[9,14],[9,15],
                  [8,15],
                  [7,15],[7,14],[7,13],[7,12],[7,11],[7,10],
                  [6,9],[5,9],[4,9],[3,9],[2,9],[1,9],
                  [1,8],
                  [1,7],[2,7],[3,7],[4,7],[5,7],[6,7],
                  [7,6],[7,5],[7,4],[7,3],[7,2],[7,1],
                  [8,1],
                  [9,1],[9,2],[9,3],[9,4],[9,5],[9,6],
                  [10,7],[11,7],[12,7],[13,7],[14,7],[15,7],
                  [15,8],[14,8],[13,8],[12,8],[11,8],[10,8],[9,8]


                ]
  }
}



class BluePiece extends Piece{
  constructor(x,y){
    super("blue");
    this.x = x;
    this.y = y;
    this.initX = 0;
    this.initY = 0;
    this.curr= -1;
    this.path = [ [7,14],[7,13],[7,12],[7,11],[7,10],
                  [6,9],[5,9],[4,9],[3,9],[2,9],[1,9],
                  [1,8],
                  [1,7],[2,7],[3,7],[4,7],[5,7],[6,7],
                  [7,6],[7,5],[7,4],[7,3],[7,2],[7,1],
                  [8,1],
                  [9,1],[9,2],[9,3],[9,4],[9,5],[9,6],
                  [10,7],[11,7],[12,7],[13,7],[14,7],[15,7],
                  [15,8],
                  [15,9],[14,9],[13,9],[12,9],[11,9],[10,9],
                  [9,10],[9,11],[9,12],[9,13],[9,14],[9,15],
                  [8,15],[8,14],[8,13],[8,12],[8,11],[8,10],[8,9]
                ]
  }
}

let initialPos = {
  redPiece : [[2,2],[4,2],[2,4],[4,4]],
  greenPiece : [[11,2],[13,2],[11,4],[13,4]],
  yellowPiece : [[11,11],[11,13],[13,11],[13,13]],
  bluePiece : [[2,11],[4,11],[2,13],[4,13]]
}

let rPiece1 = new RedPiece(initialPos.redPiece[0][0],initialPos.redPiece[0][1]);
let rPiece2 = new RedPiece(initialPos.redPiece[1][0],initialPos.redPiece[1][1]);
let rPiece3 = new RedPiece(initialPos.redPiece[2][0],initialPos.redPiece[2][1]);
let rPiece4 = new RedPiece(initialPos.redPiece[3][0],initialPos.redPiece[3][1]);

let gPiece1 = new GreenPiece(initialPos.greenPiece[0][0],initialPos.greenPiece[0][1]);
let gPiece2 = new GreenPiece(initialPos.greenPiece[1][0],initialPos.greenPiece[1][1]);
let gPiece3 = new GreenPiece(initialPos.greenPiece[2][0],initialPos.greenPiece[2][1]);
let gPiece4 = new GreenPiece(initialPos.greenPiece[3][0],initialPos.greenPiece[3][1]);

let bPiece1 = new BluePiece(initialPos.bluePiece[0][0],initialPos.bluePiece[0][1]);
let bPiece2 = new BluePiece(initialPos.bluePiece[1][0],initialPos.bluePiece[1][1]);
let bPiece3 = new BluePiece(initialPos.bluePiece[2][0],initialPos.bluePiece[2][1]);
let bPiece4 = new BluePiece(initialPos.bluePiece[3][0],initialPos.bluePiece[3][1]);

let yPiece1 = new YellowPiece(initialPos.yellowPiece[0][0],initialPos.yellowPiece[0][1]);
let yPiece2 = new YellowPiece(initialPos.yellowPiece[1][0],initialPos.yellowPiece[1][1]);
let yPiece3 = new YellowPiece(initialPos.yellowPiece[2][0],initialPos.yellowPiece[2][1]);
let yPiece4 = new YellowPiece(initialPos.yellowPiece[3][0],initialPos.yellowPiece[3][1]);

let pieces = [rPiece1,rPiece2,rPiece3,rPiece4,gPiece1,gPiece2,gPiece3,gPiece4,
              bPiece1,bPiece2,bPiece3,bPiece4,yPiece1,yPiece2,yPiece3,yPiece4
];



function initPiece(piece){
  ctx.beginPath();
  ctx.fillStyle = piece.color;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.arc(dx+42*piece.x,dy+42*piece.y,piece.radius,0,Math.PI*2);
  ctx.fill();
}
let count = 0;
canvas.addEventListener('click', function(e){



   animate().then(r => {
     if(count %2 == 0)
     movePiece(gPiece4,r);
     else if(count%2 ==1)
     movePiece(rPiece4,r);
     count++;
   });



  // movePiece(gPiece1,Math.ceil(Math.random()*6));
  // movePiece(yPiece1,Math.ceil(Math.random()*6));
  // movePiece(bPiece1,Math.ceil(Math.random()*6));
})
for(let i = 0;i<16;i++){
  initPiece(pieces[i]);
}
