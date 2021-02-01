// define the constants, reference to myCanvas
// width, height, ctx, dx is the x distance from 0 to where the board starts

const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const dx = 350;
const dy = 9;
const alpha = 1;

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);
console.log(width+" "+height);

const boardHeight = boardWidth = 630;
ctx.fillStyle = "white";
ctx.fillRect(dx,dy,boardWidth,boardHeight);


// for lines with width 42 between them.
for(let i=0;i<=16;i++){
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(dx+i*(boardWidth/15),dy);
  ctx.lineTo(dx+i*(boardHeight/15),height+dy);
  ctx.stroke();
  ctx.moveTo(dx,dy+i*(boardWidth/15));
  ctx.lineTo(width+dx,dy+i*(boardHeight/15));
  ctx.stroke();
}
drawSquare(0,0, 6,"rgb(183, 36, 36)");
drawSquare(378,1,6,"rgb(27, 140, 27)");
drawSquare(0,379,6, "rgb(27, 84, 140)");
drawSquare(378,379,6,"rgb(182, 182, 32)");
drawStars();
drawStripes();

function drawStripes(){
  let j=7;
  for(let i=1;i<14;i++){
    if(i<=6){
    ctx.fillStyle = `rgb(183, 36, 36, ${alpha})`;
    ctx.fillRect(dx+i*42,dy+j*42+1,41,41);
    ctx.fillRect(dx+1*42,dy+6*42+1,41,41);
    ctx.fillStyle = `rgb(27, 140, 27, ${alpha})`;
    ctx.fillRect(dx+j*42+1,dy+i*42,41,41);
    ctx.fillRect(dx+8*42+1,dy+1*42,41,41);
  }
  else if(i>7) {
    ctx.fillStyle = `rgb(182, 182, 32, ${alpha})`;
    ctx.fillRect(dx+i*42,dy+j*42+1,41,41);
    ctx.fillRect(dx+13*42,dy+8*42+1,41,41);
    ctx.fillStyle = `rgb(27, 84, 140, ${alpha})`;
    ctx.fillRect(dx+j*42+1,dy+i*42,41,41);
    ctx.fillRect(dx+6*42+1,dy+13*42,41,41);
  }

  }
}

// the function stroke stars with different coordinates are
// included in this single function so as to allow them to draw again and again
function drawStars(){
  strokeStar(dx+273,116,9,5,2);
  strokeStar(dx+105,368,9,5,2);
  strokeStar(dx+357,536,9,5,2);
  strokeStar(dx+525,284,9,5,2);
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

// this function was copied from stackoverflow
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

// this function probably should move to its class
function drawPiece(piece, forward){
  if(piece.curr == -1){
  ctx.clearRect(dx+piece.x*42-21,dy+piece.y*42-21,40,40);
  return;
  }
  console.log("running");
  if(piece.curr>0 && forward)
  ctx.clearRect(dx+(piece.path[piece.curr-1][0]-1)*42+1,dy+(piece.path[piece.curr-1][1]-1)*42+1,40,40);
  else ctx.clearRect(dx+(piece.path[piece.curr+1][0]-1)*42+1,dy+(piece.path[piece.curr+1][1]-1)*42+1,40,40);
  drawStars();
  drawStripes();
  ctx.beginPath();
  ctx.fillStyle = piece.color;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.arc(dx+42*(piece.path[piece.curr][0]-1)+21,dy+42*(piece.path[piece.curr][1]-1)+21,piece.radius,0,Math.PI*2);
  ctx.fill();
}

// function to move a piece steps number of times
async function movePiece(piece, steps){
  for(let i = 1;i<=steps;i++){
    await sleep(300);
    drawPiece(piece,true);
    piece.curr++;
  }
}

// function when a piece gets run over by another piece
async function goBack(piece){
  for(;piece.curr>=0;piece.curr--){

    await sleep(100);
    drawPiece(piece,false);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let faceOne = document.getElementById("one");
let faceTwo = document.getElementById("two");
let faceThree = document.getElementById("three");
let faceFour = document.getElementById("four");
let faceFive = document.getElementById("five");
let faceSix = document.getElementById("six");

faceOne.addEventListener('load', e => {
  ctx.drawImage(faceOne, 300,10,50,50);
});
async function animate(){
  let j=0;
  for(let i=1;i<=6;i++){
    j = Math.ceil(Math.random()*6);
    switch(j){
      case 1:     ctx.drawImage(faceOne, 300,10,50,50); break;
      case 2:     ctx.drawImage(faceTwo, 300,10,50,50); break;
      case 3:     ctx.drawImage(faceThree, 300,10,50,50); break;
      case 4:     ctx.drawImage(faceFour, 300,10,50,50); break;
      case 5:     ctx.drawImage(faceFive, 300,10,50,50); break;
      case 6:     ctx.drawImage(faceSix, 300,10,50,50); break;

    }
    console.log(j);
    await sleep(180);
  }
  return j;
}
