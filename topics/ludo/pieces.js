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
    this.curr=0;
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
    super("green");
    this.x = x;
    this.y = y;
    this.initX = 0;
    this.initY = 0;
    this.curr=0;
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
    this.curr=0;
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
    this.curr=0;
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



let rPiece1 = new RedPiece(100,100);
let gPiece1 = new GreenPiece(100,100);
let yPiece1 = new YellowPiece(100,100);
let bPiece1 = new BluePiece(100,100);

canvas.addEventListener('click', function(e){
  if(rPiece1.curr >25){goBack(rPiece1);return;}

  let i = Math.ceil(Math.random()*6);

  movePiece(rPiece1,i);
  // movePiece(gPiece1,Math.ceil(Math.random()*6));
  // movePiece(yPiece1,Math.ceil(Math.random()*6));
  // movePiece(bPiece1,Math.ceil(Math.random()*6));
})
