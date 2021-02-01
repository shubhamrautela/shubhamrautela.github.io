let canvas1,
    canvas2,
    canvas3,
    canvas4,
    canvas5,
    width,
    height,
    centerX,
    centerY;


    window.onload = function(){
    canvas1 = document.getElementById('canvas1');
    canvas2 = document.getElementById('canvas2');
    canvas3 = document.getElementById('canvas3');
    canvas4 = document.getElementById('canvas4');
    canvas5 = document.getElementById('canvas5');
    width = canvas1.width;
        height = canvas1.height;
        centerX = width/2;
        centerY = height/2;

        example1();
        example2();
        example3();
        example4();
        example5();
        example6();
        example7();
        example8();
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

      label("f(x) = 5","","",ctx);

      for(let i=0;i<200;i+=1){
        let x=i;
        let y = 40;

        ctx.fillStyle= "rgb(0,153,0)";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-60-y,1,0,2*Math.PI,true);
        ctx.arc((centerX-x),centerY-60-y,1,0,2*Math.PI,true);
        ctx.fill();


      }


    }



    function example2(){
      let ctx = canvas2.getContext('2d');
      ctx.clearRect(0,0,width,height);
      drawPlane(ctx);

      label("","f(x) = x","",ctx);

      for(let i=0;i<2000;i+=0.1){
        let x=i;
        let y = x;
        ctx.fillStyle= "red";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);
        ctx.arc((centerX-x),centerY+y,1,0,2*Math.PI,true);
        ctx.fill();


      }


    }

    function example3(){
      let ctx = canvas3.getContext('2d');
      ctx.clearRect(0,0,width,height);
      drawPlane(ctx);

      label("","f(x) = |x|","",ctx);

      for(let i=0;i<200;i+=1){
        let x=i;
        let y = x;
        ctx.fillStyle= "red";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);
        ctx.arc((centerX-x),centerY-y,1,0,2*Math.PI,true);
        ctx.fill();


      }


    }


    function example4(){
      let ctx = canvas4.getContext('2d');
      ctx.clearRect(0,0,width,height);
      drawPlane(ctx);

      label("","f(x) = floor(x)","",ctx);

      for(let i=-200;i<200;i+=1){
        let x=i;
        let y = 20*(Math.floor(x/20));
        console.log(y +" "+ Math.floor(20+ x/20));
        ctx.fillStyle= "red";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);

        ctx.fill();


      }


    }


    function example5(){
      let ctx = canvas5.getContext('2d');
      ctx.clearRect(0,0,width,height);
      drawPlane(ctx);

      label("","f(x) = ceil(x)","",ctx);

      for(let i=-200;i<200;i+=1){
        let x=i;
        let y = 20*(Math.ceil(x/20));
        console.log(y +" "+ Math.floor(20+ x/20));
        ctx.fillStyle= "red";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);

        ctx.fill();


      }


    }


    function example6(){
      let ctx = canvas6.getContext('2d');
      ctx.clearRect(0,0,width,height);
      drawPlane(ctx);

      label("","f(x) = signum(x)","",ctx);

      for(let i=-500;i<500;i+=1){

        let y = 0;
        if(i>0)y=20;
        else if (i<0)y=-20;
        else y=0;

        ctx.fillStyle= "red";
        ctx.beginPath();
        ctx.arc((centerX+i),centerY-y,1,0,2*Math.PI,true);
        ctx.arc((centerX+1),centerY-y,2,0,2*Math.PI);

        ctx.fill();


      }


    }

    function example7(){
      let ctx = canvas7.getContext('2d');
      ctx.clearRect(0,0,width,height);
      drawPlane(ctx);

      label("3^x","2^x","4^x",ctx);

      for(let i=-200;i<200;i+=0.9){
        let x=i;
        let y = 20*Math.pow(2,i/50);
        ctx.fillStyle= "red";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);

        ctx.fill();
        y = 20*(Math.pow(3,i/50));
        ctx.fillStyle= "rgb(0,153,0)";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);

        ctx.fill();
        y = 20*Math.pow(4,i/50);
        ctx.fillStyle= "rgb(0,102,104)";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);

        ctx.fill();

      }


    }



    function example8(){
      let ctx = canvas8.getContext('2d');
      ctx.clearRect(0,0,width,height);
      drawPlane(ctx);

      label("3^x","2^x","4^x",ctx);

      for(let i=-200;i<200;i+=0.9){
        let x=i;
        let y = 20*Math.pow(1/2,i/50);
        ctx.fillStyle= "red";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);

        ctx.fill();
        y = 20*(Math.pow(1/3,i/50));
        ctx.fillStyle= "rgb(0,153,0)";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);

        ctx.fill();
        y = 20*Math.pow(1/4,i/50);
        ctx.fillStyle= "rgb(0,102,104)";
        ctx.beginPath();
        ctx.arc((centerX+x),centerY-y,1,0,2*Math.PI,true);

        ctx.fill();

      }


    }
