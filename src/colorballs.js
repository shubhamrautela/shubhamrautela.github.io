function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){

  if(mouseIsPressed){
    let r=Math.random()*255,g=Math.random()*255,b = Math.random()*255;
    fill(r,g,b);
  }
  else{
    let r=Math.random()*255,g=Math.random()*255,b = Math.random()*255;
    fill(r,g,b);
  }

  ellipse(mouseX,mouseY,80,80);
}
