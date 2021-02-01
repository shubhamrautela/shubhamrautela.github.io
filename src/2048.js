let grid;
function setup(){
  createCanvas(windowWidth-200,windowHeight-100);
  stroke(187,173,160);
  strokeWeight(10);
  grid = [[2,2,0,0],[4,2,8,2],[2,2,0,2],[2,2,8,0]];
  textSize(64);
}

function draw(){

  let x = windowWidth/5, y = windowHeight/10;
  let length = 500;
  square(x,y,length);
  for(let i = x + length/4, j = y + length/4; i<= x+length*(3/4); i+=length/4,j+=length/4){
    line(i,y,i,y+length);
    line(x,j,x+length,j);

  }
  for(let i = y - 40 + length/4,a=0; a<=3; i+=length/4,a++){
    for(let j = x - 80 + length/4,b=0;b<=3; j+=length/4,b++){
      if(grid[a][b]!=0){
        if(grid[a][b]>10){
          text(grid[a][b],j-20,i);
        }
        else
          text(grid[a][b],j,i);
      }

    }
  }



}
function pos(){
  let i=Math.floor(Math.random()*4), j = Math.floor(Math.random()*4);
  while(grid[i-1][j-1]!==0){
    let i=Math.random()*4, j = Math.random()*4;
  }
  return [i,j];
}

function keyPressed() {

    if (keyCode === UP_ARROW) {
      moveUp();
    } else if (keyCode === DOWN_ARROW) {
      moveDown();
    }
    else if (keyCode === LEFT_ARROW){
      moveLeft();
    }
    else if (keyCode === RIGHT_ARROW){
      moveRight();
    }

    for(let i = 0;i<=3;i++){
      for(let j = 0;j<=3;j++){
        console.log(grid[0][0]);
      }

    }
    return false; // prevent default
}
function swipe(stack){
  let first, second, third, fourth;
  if(stack[0]==stack[1]){
    first = stack.shift() + stack.shift();
    if(stack[0] == stack[1])
      second = stack.shift() + stack.shift();
    else{
      second = stack.shift();
      third = stack.shift();
    }
  }
  else {
    first = stack.shift();
    if(stack[0] == stack[1]){
      second = stack.shift() + stack.shift();
      third = stack.shift();
    }
    else {
      second = stack.shift();
      if(stack[0] == stack[1]){
        third = stack.shift() + stack.shift();
      }
      else {
        third = stack.shift();
        fourth = stack.shift();
      }
    }

  }
  if(first)stack.push(first);
  if(second)stack.push(second);
  if(third)stack.push(third);
  if(fourth)stack.push(fourth);
}
function moveUp(){
  for(let j = 0;j<4;j++){
    let stack = [];
    for(let i = 0;i<4;i++)
      if(grid[i][j]!=0)
        stack.push(grid[i][j]);

    swipe(stack);
    let i = 0;
    for(;i < stack.length;i++){
      grid[i][j] = stack[i];
    }
    for(;i<4;i++){
      grid[i][j] = 0;
    }
  }
}

function moveDown(){
  for(let j = 0;j<4;j++){
    let stack = [];
    for(let i = 3;i>=0;i--)
      if(grid[i][j]!=0)
        stack.push(grid[i][j]);

    swipe(stack);
    let k = 0;
    for(i = 3;k<stack.length;k++,i--){
      grid[i][j] = stack[k];
    }
    for(;i>=0;i--){
      grid[i][j] = 0;
    }
  }
}

function moveLeft(){
  for(let i = 0;i<4;i++){
    let stack = [];
    for(let j = 0;j<4;j++)
      if(grid[i][j]!=0)
        stack.push(grid[i][j]);

    swipe(stack);
    let k = 0;
    for(j = 0;k<stack.length;k++,j++){
      grid[i][j] = stack[k];
    }
    for(;j<4;j++){
      grid[i][j] = 0;
    }
  }
}


function moveRight(){
  for(let i = 0;i<4;i++){
    let stack = [];
    for(let j = 3;j>=0;j--)
      if(grid[i][j]!=0)
        stack.push(grid[i][j]);

    swipe(stack);
    let k = 0;
    for(j = 3;k<stack.length;k++,j--){
      grid[i][j] = stack[k];
    }
    for(;j>=0;j--){
      grid[i][j] = 0;
    }
  }
}
