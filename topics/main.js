const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const star = document.getElementById('source');
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);
console.log(width+" "+height);

const boardHeight = boardWidth = 630;
ctx.fillStyle = "white";
ctx.fillRect(9,9,boardWidth,boardHeight);


// for lines with width 42 between them.
for(let i=0;i<=15;i++){
  ctx.beginPath();
  ctx.moveTo(9+i*(boardWidth/15),9);
  ctx.lineTo(9+i*(boardHeight/15),639);
  ctx.stroke();
  ctx.moveTo(9,9+i*(boardWidth/15));
  ctx.lineTo(639,9+i*(boardHeight/15));
  ctx.stroke();
}
drawSquare(0,0, 6,"rgb(183, 36, 36)");
drawSquare(378,0,6,"rgb(27, 140, 27)");
drawSquare(0,378,6, "rgb(27, 84, 140)");
drawSquare(378,378,6,"rgb(182, 182, 32)");


// squares for different players
function drawSquare(x,y, length, color){
  ctx.strokeStyle = "black";
  ctx.fillStyle = color;
  ctx.lineWidth = 5;
  ctx.fillRect(9+x+1,9+y+1,length*(boardWidth/15)-2,length*(boardWidth/15)-2);
  ctx.fillStyle = "white";
  ctx.fillRect(9+x+42,9+y+42,length*(boardWidth/15)-84,length*(boardWidth/15)-84);
}

function strokeStar(x, y, r, n, inset) {

    ctx.save();
    ctx.fillStyle = "rgb(100,100,100)";
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0,0-r);
    for (var i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (r*inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

strokeStar(282,112,10,5,2);
