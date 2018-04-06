function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  ellipse(mouseX, mouseY, 50, 50);  
}