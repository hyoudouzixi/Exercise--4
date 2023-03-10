let x = 0;
let y = 0;
let clr;
let circleX = 100;
let circleY = 0;
let xSpeed = 1;
let ySpeed = 1;
let circleSize = 20;
let circleSpeedX = 5;
let circleSpeedY = 5;


function setup() {
  myCanvas = createCanvas(700, 480);
  clr = color(0, 0, 0);
  noStroke();
}

function draw() {
  background(150);
  push();
  fill(clr);
  translate(0, 0);
  beginShape();
  vertex(x, 0);
  vertex(x + 10, 0); 
  vertex(x + 20, 20); 
  vertex(x + 10, 40); 
  vertex(x, 40); 
  vertex(x + 10, 20); 
  endShape(CLOSE);

  translate(0, 0);
  beginShape();
  vertex(x + 20, 0);
  vertex(x + 30, 0); 
  vertex(x + 40, 20); 
  vertex(x + 30, 40); 
  vertex(x + 20, 40); 
  vertex(x + 30, 20); 
  endShape(CLOSE);

  x = x + 5;
  y += 5;
  if (x > width) {
    x = 0;
  }
  if (y > 255) {
    y = 0;
  }
  
  clr = color(0, y, y);
  pop();

  push();
  circle(circleX, circleY, 50);
  fill(255, 255, 0);

  // modify state
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  //bounce off left and right
  if(circleX < 0 || circleX > width) {
    xSpeed = xSpeed * -1;
    fill(255, 0, 0);
  }

  // bounce off top and bottom
  if(circleY < 0 || circleY > height) {
    ySpeed = ySpeed * -1;
    fill(0, 0, 255);
  }
  pop();

}

