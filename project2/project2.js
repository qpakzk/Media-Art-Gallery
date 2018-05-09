var areaColors = [];
var BACKGROUND_COLOR;
var MOUSE_CIRCLE_COLOR;
function setup() {
  createCanvas(1000, 900);
  BACKGROUND_COLOR = color(255, 255, 204);
  background(BACKGROUND_COLOR);
  MOUSE_CIRCLE_COLOR = color(255, 255, 255);
  for(i = 0; i < 21; i++) {
    var red = int(random(0, 255));
    var green = int(random(0, 255));
    var blue = int(random(0, 255));
    areaColors.push(color(red, green, blue));
  }
}

function draw() {
  noStroke();
  background(BACKGROUND_COLOR);
  drawArea1(500, 300);
  drawArea2(100, 200);
  drawArea3(100, 200);
  drawArea4(500, 300);
  drawArea5(800, 375);
  drawArea6(350, 500);
  drawArea7(100, 500);
  drawArea8(350, 500);
  drawArea10(800, 500);
  drawArea11(800, 500);
  drawArea9(350, 500);
  fill(MOUSE_CIRCLE_COLOR);
  stroke(MOUSE_CIRCLE_COLOR);
  ellipse(mouseX, mouseY, 20, 20);
}


function drawArea1(x, y) {
  fill(areaColors[0]);
  stroke(areaColors[0]);
  push();
  translate(x, y);
  beginShape();
  vertex(0, 0);
  vertex(100, -150);
  vertex(320, 30);
  vertex(300, 75);
  endShape(CLOSE);
  bezier(100, -150, 150, -70, 300, -100, 320, 30);
  pop();
}

function drawArea2(x, y) {
  fill(areaColors[1]);
  stroke(areaColors[1]);
  push();
  translate(x, y);
  beginShape();
  vertex(0, 0);
  vertex(200, -100);
  vertex(400, 100);
  endShape(CLOSE);
  bezier(0, 0, 40, -100, 100, -40, 200, -100);
 
  beginShape();
  vertex(200, -100);
  vertex(400, 100);
  vertex(500, -50);
  endShape(CLOSE);
  bezier(200, -100, 260, -130, 400, -190, 500, -50);
  bezier(500, -50, 530, 30, 440, 60, 400, 100);
  pop();
}

function drawArea3(x, y) {
  fill(areaColors[2]);
  stroke(areaColors[2]);
  push();
  translate(x, y);
  beginShape();
  vertex(0, 0);
  vertex(0, 300);
  vertex(250, 300);
  vertex(400, 100);
  endShape(CLOSE);
  bezier(0, 0, -50, 100, -50, 200, 0, 300);
  pop();
}

function drawArea4(x, y) {
  fill(areaColors[3]);
  stroke(areaColors[3]);
  push();
  translate(x, y);
  beginShape();
  vertex(0, 0);
  vertex(300, 75);
  vertex(225, 200);
  vertex(-150, 200);
  endShape(CLOSE);
  bezier(0, 0, -5, -5, -100, -5, -150, 200);
  pop();
}

function drawArea5(x, y) {
  push();
  translate(x, y);
  beginShape();
  fill(areaColors[4]);
  stroke(areaColors[4]);
  vertex(0, 0);
  vertex(-75, 125);
  vertex(80, 125);
  vertex(80, 20);
  endShape(CLOSE);
  
  beginShape();
  fill(areaColors[5]);
  stroke(areaColors[5]);
  vertex(0, 0);
  vertex(20, -45);
  vertex(80, -10);
  vertex(80, 20);
  endShape(CLOSE);
  pop();
}

function drawArea6(x, y) {
  push();
  translate(x, y);
  beginShape();
  fill(areaColors[6]);
  stroke(areaColors[6]);
  vertex(0, 0);
  vertex(0, 300);
  vertex(-200, 300);
  vertex(-200, 0);
  endShape(CLOSE);
  pop();
}

function drawArea7(x, y) {
  push();
  translate(x, y);
  beginShape();
  fill(areaColors[7]);
  stroke(areaColors[7]);
  vertex(0, 0);
  vertex(50, 0);
  vertex(50, 300);
  vertex(0, 300);
  endShape(CLOSE);
  pop();
}

function drawArea8(x, y) {
  fill(areaColors[8]);
  stroke(areaColors[8]);
  push();
  translate(x, y);
  beginShape();
  vertex(0, 0);
  vertex(250, 0);
  vertex(200, 250);
  vertex(0, 50);
  endShape(CLOSE);
  pop();
}

function drawArea9(x, y) {
  fill(areaColors[9]);
  stroke(areaColors[9]);
  push();
  translate(x, y);
  beginShape();
  vertex(250, 0);
  vertex(200, 250);
  vertex(200, 300);
  vertex(350, 300);
  endShape(CLOSE);
  bezier(250, 0, 300, 10, 350, 100, 350, 300);
  pop();
}

function drawArea10(x, y) {
  fill(areaColors[10]);
  stroke(areaColors[10]);
  push();
  translate(x, y);
  beginShape();
  vertex(0, 0);
  vertex(100, 300);
  vertex(180, 300);
  vertex(80, 0);
  endShape(CLOSE);
  bezier(80, 0, 120, 10, 160, 10, 180, 300);
  pop();
}

function drawArea11(x, y) {
  fill(areaColors[11]);
  stroke(areaColors[11]);
  push();
  translate(x, y);
  beginShape();
  vertex(0, 0);
  vertex(-100, 300);
  vertex(-185, 300);
  vertex(-75, 0);
  endShape(CLOSE);
  //bezier(250, 0, 300, 10, 350, 100, 350, 300);
  pop();
}

function mousePressed() {
  if(mouseX >= 100 && mouseX <= 600 && mouseY >= 100 && mouseY <= 200)// area 2
    MOUSE_CIRCLE_COLOR = areaColors[1];
  else if(mouseX >= 500 && mouseX <= 820 && mouseY >= 150 && mouseY <= 375)// area 1
    MOUSE_CIRCLE_COLOR = areaColors[0];
  else if(mouseX >= 350 && mouseX <= 800 && mouseY >= 300 && mouseY <= 500)// area 4
    MOUSE_CIRCLE_COLOR = areaColors[3];
   else if(mouseX >= 100 && mouseX <= 500 && mouseY >= 200 && mouseY <= 500)// area 3
     MOUSE_CIRCLE_COLOR = areaColors[2];
   else if(mouseX >= 725 && mouseX <= 880 && mouseY >= 375 && mouseY <= 500)// area 5
     MOUSE_CIRCLE_COLOR = areaColors[4];
   else if(mouseX >= 800 && mouseX <= 880 && mouseY >= 330 && mouseY <= 395)// area 5
     MOUSE_CIRCLE_COLOR = areaColors[5];
   else if(mouseX >= 150 && mouseX <= 350 && mouseY >= 500 && mouseY <= 800)// area 6
     MOUSE_CIRCLE_COLOR = areaColors[6];
   else if(mouseX >= 100 && mouseX <= 150 && mouseY >= 500 && mouseY <= 800)// area 7
     MOUSE_CIRCLE_COLOR = areaColors[7];
   else if(mouseX >= 350 && mouseX <= 600 && mouseY >= 500 && mouseY <= 750)// area 8
     MOUSE_CIRCLE_COLOR = areaColors[8];
   else if(mouseX >= 550 && mouseX <= 700 && mouseY >= 500 && mouseY <= 800)// area 9
     MOUSE_CIRCLE_COLOR = areaColors[9];
   else if(mouseX >= 700 && mouseX <= 800 && mouseY >= 500 && mouseY <= 800)// area 11
     MOUSE_CIRCLE_COLOR = areaColors[11];
   else if(mouseX >= 800 && mouseX <= 980 && mouseY >= 500 && mouseY <= 800)// area 10
     MOUSE_CIRCLE_COLOR = areaColors[10];
}

function keyPressed() {
  for(i = 0; i < areaColors.length; i++) {
    var red = int(random(0, 255));
    var green = int(random(0, 255));
    var blue = int(random(0, 255));
    areaColors[i] = color(red, green, blue);
  }
}