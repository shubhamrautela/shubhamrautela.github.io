let canvas1,
    canvas2,
    canvas3,
    canvas4,
    width,
    height,
    centerX,
    centerY;

window.onload = function(){
canvas1 = document.getElementById('canvas1');
canvas2 = document.getElementById('canvas2');
canvas3 = document.getElementById('canvas3');
canvas4 = document.getElementById('canvas4');
width = canvas1.width;
    height = canvas1.height;
    centerX = width/2;
    centerY = height/2;
}


function drawPlane(ctx){
  ctx.strokeStyle="rgb(200,200,200)";
  ctx.lineWidth = 1;
  for(let i=0;i<width;i+=20){
    ctx.beginPath();
    ctx.moveTo(i,0);
    ctx.lineTo(i,height);
    ctx.stroke();
    ctx.moveTo(0,i);
    ctx.lineTo(width,i);
    ctx.stroke();
  }
  ctx.strokeStyle="black";
  ctx.beginPath();
  ctx.moveTo(centerX,0);
  ctx.lineTo(centerX,height);
  ctx.stroke();
  ctx.moveTo(0,centerY);
  ctx.lineTo(width,centerY);
  ctx.stroke();

}

function label(str1, str2, str3,ctx){
  ctx.clearRect(580,0,700,60);
  ctx.fillStyle="rgb(0,102,104)";
  ctx.fillText(str1, 620, 10);
  ctx.fillText(str2, 620, 30);
  ctx.fillText(str3, 620, 50);
  ctx.strokeStyle="rgb(0,153,0)";
  ctx.beginPath();
  ctx.moveTo(590,8);
  ctx.lineTo(615,8);
  ctx.stroke();
  ctx.strokeStyle="red";
  ctx.beginPath();
  ctx.moveTo(590,28);
  ctx.lineTo(615,28);
  ctx.stroke();
  ctx.strokeStyle="rgb(0,102,104)";
  ctx.beginPath();
  ctx.moveTo(590,48);
  ctx.lineTo(615,48);
  ctx.stroke();


}

function example1(){
  let ctx = canvas1.getContext('2d');
  ctx.clearRect(0,0,width,height);
  drawPlane(ctx);

  label("x*x+2","x*x","x*x-2",ctx);

  for(let i=0;i<200;i+=0.1){
    let x=i;
    let y = x*x/40;
    ctx.fillStyle= "red";
    ctx.beginPath();
    ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);
    ctx.arc((centerX-x),centerY-y,1,0,2*Math.PI,true);
    ctx.fill();
    ctx.fillStyle= "rgb(0,153,0)";
    ctx.beginPath();
    ctx.arc((centerX+x),centerY-40-y,1,0,2*Math.PI,true);
    ctx.arc((centerX-x),centerY-40-y,1,0,2*Math.PI,true);
    ctx.fill();
    ctx.fillStyle= "rgb(0,102,104)";
    ctx.beginPath();
    ctx.arc((centerX+x),centerY+40-y,1,0,2*Math.PI,true);
    ctx.arc((centerX-x),centerY+40-y,1,0,2*Math.PI,true);
    ctx.fill();

  }


}



function example2(){

  let ctx = canvas1.getContext('2d');
  ctx.clearRect(0,0,width,height);
  drawPlane(ctx);

  label("sin(x)+2","sin(x)","sin(x)-2",ctx);


  for(let i=-Math.PI*4;i<Math.PI*4;i+=0.01){
    let x=i*40;
    let y = Math.sin(i)*40;
    ctx.fillStyle= "red";
    ctx.beginPath();

    ctx.arc(centerX+x,centerY-y,1,0,2*Math.PI,true);
    ctx.fill();

    ctx.fillStyle= "rgb(0,153,0)";
    ctx.beginPath();
    ctx.arc((centerX+x),centerY-40-y,1,0,2*Math.PI,true);
    ctx.fill();

    ctx.fillStyle= "rgb(0,102,104)";
    ctx.beginPath();
    ctx.arc((centerX+x),centerY+40-y,1,0,2*Math.PI,true);

    ctx.fill();

  }


}

function example3(){
  let ctx = canvas2.getContext('2d');
  ctx.clearRect(0,0,width,height);
  drawPlane(ctx);

  label("(x+5)*(x+5)","x*x","(x-5)*(x-5)",ctx);

  for(let i=0;i<200;i+=0.1){
    let a=100;
    let x=i;
    let y = x*x/40;
    ctx.fillStyle= "red";
    ctx.beginPath();
    ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);
    ctx.arc((centerX-x),centerY-y,1,0,2*Math.PI,true);
    ctx.fill();

    y=(x-a)*(x-a)/40;
    ctx.fillStyle= "rgb(0,102,104)";
    ctx.beginPath();
    ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);
    ctx.arc((centerX-x),centerY-y,1,0,2*Math.PI,true);
    ctx.fill();

    y=(x+a)*(x+a)/40;


    ctx.beginPath();
    ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);
    ctx.arc((centerX-x),centerY-y,1,0,2*Math.PI,true);
    ctx.fillStyle= "rgb(0,153,0)";
    ctx.fill();
  }
}


function example4(){

  let ctx = canvas2.getContext('2d');
  ctx.clearRect(0,0,width,height);
  drawPlane(ctx);

  label("sin(x+PI/2)","sin(x)","sin(x-PI/2)",ctx);


  for(let i=-Math.PI*4;i<Math.PI*4;i+=0.01){
    let x=i*40;
    let y = Math.sin(i)*40;
    ctx.fillStyle= "red";
    ctx.beginPath();

    ctx.arc(centerX+x,centerY-y,1,0,2*Math.PI,true);
    ctx.fill();

    ctx.fillStyle= "rgb(0,153,0)";
    ctx.beginPath();
    ctx.arc((centerX+60+x),centerY-y,1,0,2*Math.PI,true);
    ctx.fill();

    ctx.fillStyle= "rgb(0,102,104)";
    ctx.beginPath();
    ctx.arc((centerX-60+x),centerY-y,1,0,2*Math.PI,true);

    ctx.fill();

  }


}




function example5(){

  let ctx = canvas3.getContext('2d');
  ctx.clearRect(0,0,width,height);
  drawPlane(ctx);

  label("2sin(x)","sin(x)","sin(x-PI/2)/2",ctx);


  for(let i=-Math.PI*4;i<Math.PI*4;i+=0.01){
    let x=i*40;
    let y = Math.sin(i)*40;
    ctx.fillStyle= "red";
    ctx.beginPath();

    ctx.arc(centerX+x,centerY-y,1,0,2*Math.PI,true);
    ctx.fill();

    ctx.fillStyle= "rgb(0,153,0)";
    ctx.beginPath();
    ctx.arc((centerX+x),centerY-y*2,1,0,2*Math.PI,true);
    ctx.fill();

    ctx.fillStyle= "rgb(0,102,104)";
    ctx.beginPath();
    ctx.arc((centerX+x),centerY-y*(1/2),1,0,2*Math.PI,true);

    ctx.fill();

  }


}
