var theta;
function setup() {
 createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(255);
  stroke(0);
  theta = 100;
  translate(width/2, height);
  line(0, 0, 0, -120);
  translate(0, -120);
  branch(100);
}

function branch(h) {
  h *= 2.0/3.0;

  if(h > 2) {
    push();
    rotate(theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();

    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}
