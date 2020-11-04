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
drawStars();

function drawStars(){
  strokeStar(dx+273,116,10,5,2);
  strokeStar(dx+105,368,10,5,2);
  strokeStar(dx+357,536,10,5,2);
  strokeStar(dx+525,284,10,5,2);
}

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
  drawStars();
  ctx.beginPath();
  ctx.fillStyle = piece.color;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.arc(dx+42*(piece.path[piece.curr][0]-1)+21,dy+42*(piece.path[piece.curr][1]-1)+21,piece.radius,0,Math.PI*2);
  ctx.fill();


}


async function movePiece(piece, steps){
  for(let i = 1;i<=steps;i++){
    await sleep(300);
    drawPiece(piece);
    piece.curr++;
  }
}

async function goBack(piece){
  for(;piece.curr>=0;piece.curr--){

    await sleep(100);
    drawPiece(piece);
  }
}
// let rPiece1 = new Piece(100,100,"red");
// let rPiece2 = new Piece(100,150,"red");
// let rPiece3 = new Piece(150,100,"red");
// let rPiece4 = new Piece(150,150,"red");
// drawPiece(rPiece1);
// drawPiece(rPiece2);
// drawPiece(rPiece3);
// drawPiece(rPiece4);








function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
