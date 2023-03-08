let x = 0;
let y = 0;
let fr = 30; //starting FPS
let clr;
let xoff = 0.0;
let xincrement = 0.01;


function setup() {
  myCanvas = createCanvas(700, 480);
  frameRate(fr); // Attempt to refresh at starting FPS
  clr = color(0, 0, 0);
  noStroke();
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);

  let n = noise(xoff) * width;

  // With each cycle, increment xoff
  xoff += xincrement;
  x = x + 5;
  y += 5;
  if (x > width) {
    x = 0;
  }
  if (y > 255) {
    y = 0;
  }
  background(150);
  clr = color(0, y, y);

  translate(0, 0);
  fill(clr);
  beginShape();
  vertex(x, 0);
  vertex(x + 10, 0); 
  vertex(x + 20, 20); 
  vertex(x + 10, 40); 
  vertex(x, 40); 
  vertex(x + 10, 20); 
  endShape(CLOSE);


}

