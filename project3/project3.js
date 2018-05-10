var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
}
function draw() {
  background(40, 0, 0);
  for(i = 0; i < circles.length; i++) {
    drawCircle(circles[i]);
  }
}

function setCircles() {
  circles.push({
    posX: mouseX,
    posY: mouseY,
    radius: int(random(10, height / 6)),
    col: color(int(random(0, 255)), int(random(0, 255)), int(random(0, 255)), int(random(0, 255)))
  });
}

function drawCircle(circle) {
  fill(circle.col);
  ellipse(circle.posX, circle.posY, circle.radius * 2, circle.radius * 2);
}

function mousePressed() {
  setCircles();
}