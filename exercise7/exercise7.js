function setup() {
  createCanvas(600, 600);
  smooth();
  noLoop();
}

function draw() {
  background(255);
  strokeWeight(10);
  
  for(i = -300; i <= 300; i += 80) {
    push();
    translate(width/2 + i, height - 20, i);
    branch(0);
    pop();
  }
}

function branch(depth) {
  if(depth < 12) {
    line(0, 0, 0, -height/10);
    {
       translate(0, -height/10);
       rotate(random(-0.1, 0.1));
       
       if(random(1.0) < 0.6) {
         rotate(0.3);
         scale(0.7);
         push();
         branch(depth + 1);
         pop();
         rotate(-0.6);
         push();
         branch(depth + 1);
         pop();
       }
       else {
         branch(depth); 
       }
    }
  }
  else {
    noStroke();
    fill(255, 191, 249, 150);
    ellipse(0, 0, random(100, 300), random(100, 300));
    stroke(0);
  }
}

function mouseReleased() {
  redraw(); 
}