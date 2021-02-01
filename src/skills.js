let canvas = rough.canvas(document.getElementById("skills"));
let cnv = document.getElementById("skills");
let context = cnv.getContext("2d");

let lineProp = {
  strokeWidth: 2,
  stroke: "black",
  bowing: 0,
};

let fillProp = {
  fillStyle: "hachure",
  fill: "green",
};
let initX = 150;
let step = 50;

canvas.line(initX, 80, initX, 400, lineProp);
canvas.line(initX - 10, 100, initX + 10, 100, lineProp);
canvas.line(initX - 10, 200, initX + 10, 200, lineProp);
canvas.line(initX - 10, 300, initX + 10, 300, lineProp);

canvas.line(initX, 400, initX + 600, 400, lineProp);

canvas.rectangle(initX + 1 * step, 100, 50, 300, fillProp);
canvas.rectangle(initX + 3 * step, 300, 50, 100, fillProp);
canvas.rectangle(initX + 5 * step, 200, 50, 200, fillProp);
canvas.rectangle(initX + 7 * step, 300, 50, 100, fillProp);
canvas.rectangle(initX + 9 * step, 300, 50, 100, fillProp);

context.font = "20px sans-serif";
context.fillText("HTML", 200, 430);
context.fillText("CSS", 305, 430);
context.fillText("JS", 410, 430);
context.fillText("C", 515, 430);
context.fillText("DSA", 600, 430);

context.font = "15px sans-serif";
context.fillText("Beginner", 50, 305);
context.fillText("Intermediate", 30, 205);
context.fillText("Expert", 60, 105);
