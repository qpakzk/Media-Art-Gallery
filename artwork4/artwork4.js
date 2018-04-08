function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  drawRyan(window.innerWidth / 2, window.innerHeight / 2);
}

function drawRyan(x, y) {
  background(255);
  strokeWeight(5);

  drawRyanBody(x, y);
  drawRyanFace(x, y);
}

function drawRyanFace(x, y) {
  black = color(0, 0, 0);
  orange = color(239,166,39);
  
  fill(orange);
  stroke(black);
  strokeWeight(5);
  
  //ear
  ellipse(x - 60, y - 85, 40, 40);
  ellipse(x + 60, y - 85, 40, 40);
  
  //face
  ellipse(x, y, 200, 200);
  
  
  //eyebrows
  strokeWeight(8);
  line(x - 30, y - 40, x - 60, y - 40);
  line(x + 30, y - 40, x + 60, y - 40);
  
  //mustache
  strokeWeight(5);
  fill(255);
  bezier(x, y + 10, x - 42, y - 0, x - 40, y + 50,  x, y + 30);
  bezier(x, y + 10,  x + 42, y - 0, x + 40, y + 50,  x, y + 30);
  
  stroke(0);
  fill(0);
  
  //eyes
  ellipse(x - 40, y - 10, 10, 10);
  ellipse(x + 40, y - 10, 10, 10);
  
  //noses
  ellipse(x, y + 10, 10, 10);
}

function drawRyanBody(x, y) {
  black = color(0, 0, 0);
  white = color(255, 255, 255);
  orange = color(239,166,39);

  fill(orange);
  
  //legs
  stroke(black);
  ellipse(x + 34, y + 200, 54, 103);
  ellipse(x + -34, y + 200, 54, 103);
  
  //body
  stroke(orange);
  rect(x - 64, y + 61, 128, 131);
  
  stroke(black);
  
  //arms
  bezier(x - 65, y + 82, x - 82, y + 102, x - 104, y + 185, x - 66, y + 192);
  bezier(x + 65, y + 82, x + 82, y + 102, x + 104, y + 175, x + 66, y + 192);
  
  //make lines
  line(x + 61, y + 126, x + 61, y + 195);
  line(x - 61, y + 126, x - 61, y + 195);
  line(x + 14, y + 195, x - 14, y + 195);
   
  //stomach
  stroke(white);
  fill(white);
  ellipse(x, y + 145, 65, 65);
  
  noStroke();
  fill(orange);
  triangle(x + -10, y + 125, x -20, y + 110, x + 0, y + 110);
  triangle(x + 10, y + 125, x, y + 110, x + 20, y + 110);
}