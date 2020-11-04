const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const star = document.getElementById('source');
const dx = 350;
const dy = 9;
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);
console.log(width+" "+height);

const boardHeight = boardWidth = 630;
ctx.fillStyle = "white";
ctx.fillRect(dx,dy,boardWidth,boardHeight);


// for lines with width 42 between them.
for(let i=0;i<=16;i++){
  ctx.beginPath();
  ctx.moveTo(dx+i*(boardWidth/15),dy);
  ctx.lineTo(dx+i*(boardHeight/15),height+dy);
  ctx.stroke();
  ctx.moveTo(dx,dy+i*(boardWidth/15));
  ctx.lineTo(width+dx,dy+i*(boardHeight/15));
  ctx.stroke();
}
drawSquare(0,0, 6,"rgb(183, 36, 36)");
drawSquare(378,0,6,"rgb(27, 140, 27)");
drawSquare(0,378,6, "rgb(27, 84, 140)");
drawSquare(378,378,6,"rgb(182, 182, 32)");

strokeStar(dx+274,116,10,5,2);
strokeStar(dx+106,368,10,5,2);
strokeStar(dx+358,536,10,5,2);
strokeStar(dx+526,284,10,5,2);

// squares for different players
function drawSquare(x,y, length, color){
  ctx.strokeStyle = "black";
  ctx.fillStyle = color;
  ctx.lineWidth = 5;
  ctx.fillRect(dx+x+1,dy+y,length*(boardWidth/15)-2,length*(boardWidth/15)-1);
  ctx.fillStyle = "white";
  ctx.fillRect(dx+x+42,dy+y+42,length*(boardWidth/15)-84,length*(boardWidth/15)-84);
}

function strokeStar(x, y, r, n, inset) {

    ctx.save();
    ctx.fillStyle = "rgb(100,100,100)";
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0,0-r);
    for (var i = 0; i < n; i++) {
        ctx.rotate(2*Math.PI / n);
        ctx.lineTo(0, 0 - (r*inset));
        ctx.rotate(2*Math.PI / n);
        ctx.lineTo(0, 0 - r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

// function Piece(x,y,color){
//   this.x = x;
//   this.y = y;
//   this.radius = 15;
//   this.color = color;
//   this.clickable = false;
//
// }

function drawPiece(piece){
console.log(piece.radius+ "   "+ piece.x+ " " +piece.y);
  if(piece.curr>0)
  ctx.clearRect(dx+(piece.path[piece.curr-1][0]-1)*42+1,dy+(piece.path[piece.curr-1][1]-1)*42+1,40,40);
  ctx.beginPath();
  ctx.fillStyle = piece.color;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.arc(dx+42*(piece.path[piece.curr][0]-1)+21,dy+42*(piece.path[piece.curr][1]-1)+21,piece.radius,0,Math.PI*2);
  ctx.fill();
  piece.curr++;

}
// let rPiece1 = new Piece(100,100,"red");
// let rPiece2 = new Piece(100,150,"red");
// let rPiece3 = new Piece(150,100,"red");
// let rPiece4 = new Piece(150,150,"red");
// drawPiece(rPiece1);
// drawPiece(rPiece2);
// drawPiece(rPiece3);
// drawPiece(rPiece4);



class Piece{
  constructor(color){
  this.radius = 15;
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
let rPiece1 = new RedPiece(100,100);
canvas.addEventListener('click', function(e){
  drawPiece(rPiece1);
})
