let detailY;
// slide to see how detailY works
function setup() {
  createCanvas(1000, 1000, WEBGL);
  detailY = createSlider(3, 16, 3);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
  describe(
    'a white sphere with low detail on the y-axis, including a slider to adjust detailY'
  );
}

function draw() {
  background(205, 105, 94);
  rotateY(millis() / 1000);
  rotateX(millis() / 1000);
  sphere(40, 16, detailY.value());
}

