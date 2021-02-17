let snake = [];
let initX = 50, initY = 250;
let radius = 22;
let step = 2;
let xStep = step;
let yStep = 0;
let easing = (1 / 20) * xStep;
let food;
let width, height;
let length = 3;
let score = 10;
let cnv;

function windowResized() {
  resizeCanvas(windowWidth - 400, windowHeight);
}

function setup() {
  width = windowWidth - 400;
  height = windowHeight;

  cnv = createCanvas(width, height);
  cnv.style("display", "block");
  for (let i = 0; i < length; i++) {
    snake.push(new Ball(initX + (length - i) * length, initY));
  }
  console.log(snake);
  food = new Ball(radius + Math.random() * (width - 3 * radius), radius + Math.random() * (height - 3 * radius));
  stroke(0);

}

function draw() {
  background(0, 100, 0);
  fill(255, 0, 0);
  ellipse(food.x, food.y, radius, radius);
  textSize(50);
  stroke(0);
  fill(0);
  if (score < 10)
    text(score, width - 50, 50);
  else if (score >= 10 && score < 100)
    text(score, width - 75, 50);
  else text(score, width - 100, 50);

  fill(245, 224, 66);
  // snake[0].x += (food.x - snake[0].x)*easing;
  // snake[0].y += (food.y - snake[0].y)*easing;
  snake[0].x += xStep;
  snake[0].y += yStep;
  ellipse(snake[0].x, snake[0].y, radius, radius);
  console.log(food.x + " " + food.y);
  if (Math.sqrt(Math.pow(snake[0].x - food.x, 2) + Math.pow(snake[0].y - food.y, 2)) <= radius) {
    score++;
    food = new Ball(radius + Math.random() * (width - 3 * radius), radius + Math.random() * (height - 3 * radius));
    snake.push(new Ball(snake[snake.length - 1].x, snake[snake.length - 1].y));
  }
  for (let i = 1; i < snake.length; i++) {
    let dx = snake[i - 1].x - snake[i].x;
    snake[i].x += dx * easing;
    let dy = snake[i - 1].y - snake[i].y;
    snake[i].y += dy * easing;
    if (i % 2 == 0) {
      fill(245, 224, 66);
    }
    else fill(0);
    ellipse(snake[i].x, snake[i].y, radius, radius);
  }
}
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xStep = -step;
    yStep = 0;
  } else if (keyCode === RIGHT_ARROW) {
    xStep = step;
    yStep = 0;
  }
  else if (keyCode === UP_ARROW) {
    yStep = -step;
    xStep = 0;
  }
  else if (keyCode === DOWN_ARROW) {
    yStep = step;
    xStep = 0;
  }
  else if (keyCode === 32) {
    if (isLooping()) {
      noLoop();
    }
    else loop();
  }
  else if (keyCode === 83)
    saveCanvas(cnv, "snake", "png");
}
