var clouds = [];
var halfClouds = [];
var selectedHairColors = [];
var manLocationX;
var speed;
var clothesColor;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var countClouds = random(25, 30);
  for(i = 0; i < countClouds; i++) {
    newCloud = {
     x: random(0, width),
     y: random(0, height * 2 / 3),
     size: random(2.5, 4.5),
     degree: color(int(random(230, 255)))
    };
    
    clouds.push(newCloud); 
  }
  
  countClouds = random(30, 35);
  for(i = 0; i < countClouds; i++) {
   newCloud = {
    x: i * height / 5,
    y: height / 2 * 3,
    size: random(2.5, 4.5),
    degree: color(int(random(230, 255)))
   }
   halfClouds.push(newCloud);
  }
  
  var from = color(112, 56, 0);
  var to = color(83, 41, 0);
  var interA = lerpColor(from, to, 0.33);
  var interB = lerpColor(from, to, 0.66);
  
  var hairColors = [from, to, interA, interB];
  for(i = 0; i < 100; i++)
    selectedHairColors.push(hairColors[int(random(4))]);
  
  manLocationX = 350;
  speed = 30;
  clothesColor = 0;
}


function draw() {
  var SKY_BLUE = color(126, 192, 238);
  background(SKY_BLUE);

  drawClouds();
  drawBeach();
  drawOcean();
  drawCurtain();
  drawMan(manLocationX, 300);
}

function drawClouds() {
  for (i = 0; i < clouds.length; i++) {
    var currentCloud = clouds[i];
    drawCloud(currentCloud.x, currentCloud.y, currentCloud.size, currentCloud.degree);
    currentCloud.x += 0.5;
    currentCloud.y += random(-0.5, 0.5);
    if(currentCloud.x > width + width / 10)
      currentCloud.x = - width / 10;
  }
  
  for (i = 0; i < halfClouds.length; i++) {
    var currentCloud = halfClouds[i];
    drawHalfCloud(currentCloud.x, height * 2 / 3, currentCloud.size, currentCloud.degree);
    currentCloud.x += 0.5;
    currentCloud.y += random(-0.5, 0.5);
    if(currentCloud.x > width + width / 10)
      currentCloud.x = - width / 10;
  }
}

function drawCloud(x, y, size, degree) {
  fill(degree);
  noStroke();
  arc(x, y, 20 * size, 20 * size, PI + TWO_PI, TWO_PI);
  arc(x + 45, y, 25 * size, 30 * size, PI + TWO_PI, TWO_PI);
  arc(x + 90, y, 25 * size, 30 * size, PI + TWO_PI, TWO_PI);
  arc(x + 135, y, 20 * size, 20 * size, PI + TWO_PI, TWO_PI);
 
  arc(x, y, 20 * size, 20 * size,  TWO_PI, 2 * TWO_PI);
  arc(x + 45, y, 25 * size, 30 * size, TWO_PI, 2 * TWO_PI);
  arc(x + 90, y, 30 * size, 30 * size, TWO_PI, 2 * TWO_PI);
  arc(x + 135, y, 20 * size, 20 * size, TWO_PI, 2 * TWO_PI);

}

function drawHalfCloud(x, y, size, degree) {
  fill(degree);
  noStroke();
  arc(x, y, 20 * size, 20 * size, PI + TWO_PI, TWO_PI);
  arc(x + 45, y, 25 * size, 30 * size, PI + TWO_PI, TWO_PI);
  arc(x + 90, y, 25 * size, 30 * size, PI + TWO_PI, TWO_PI);
  arc(x + 135, y, 20 * size, 20 * size, PI + TWO_PI, TWO_PI);
}

function drawBeach() {
  var BEACH = color(255, 239, 229);
  fill(BEACH);
  rect(0, height * 2 / 3, width, height);
}


var yoff = 0.0;
function drawOcean() {
  var OCEAN_BLUE = color(0, 119, 190);
  fill(OCEAN_BLUE);
  beginShape(); 
  var xoff = 0;
  vertex(width, height * (2 / 3));
  vertex(0, height * (2 / 3));
  for (x = 0; x <= width; x += 30) { 
    var y = map(noise(xoff, yoff), 0, 1, 320, 300);
    y *= 2;
    vertex(x, y); 
    xoff += 0.05;
  }
  yoff += 0.01;
  
  endShape(CLOSE);
}

function mousePressed() {
  for(i = 0; i < halfClouds.length; i++) {
    var hsize = halfClouds[i].size;
    var hx = halfClouds[i].x;
    var hy = halfClouds[i].y;
   if(hx - 20 * hsize < mouseX && mouseX < hx + 135 + 20 * hsize && hy - 20 * hsize > mouseY && mouseY < hy)
      halfClouds.splice(i, 1);
  }
  
  for(i = 0; i < clouds.length; i++) {
    var csize = clouds[i].size;
    var cx = clouds[i].x;
    var cy = clouds[i].y;
    if(cx - 20 * csize < mouseX && mouseX < cx + 135 + 20 * csize && cy - 20 * csize < mouseY && mouseY < cy + 20 * csize)
      clouds.splice(i, 1);
  }
}

function drawMan(x, y) {
  drawHead(x, y);
  drawHat(x, y);
  drawSuit(x, y);
}

function drawHead(x, y) {
  var FACE = color(255, 218, 185);
  fill(FACE);
  
  //face
  arc(x, y + 130, 120, 150, 0, 0);
  
  //ear
  arc(x + 60, y + 130, 20, 50, 0, 0);
  arc(x - 60, y + 130, 20, 50, 0, 0);
  
  //hair
  for(i = 0; i < 100; i++) {
    fill(selectedHairColors[i]); 
    rect(x - 50 + i, y + 100, 1, 70);
  }
  
  //neck
  fill(FACE);
  beginShape(); 
  vertex(x - 50, y + 170);
  vertex(x - 30, y + 210);
  vertex(x + 30, y + 210);
  vertex(x + 50, y + 170);
  endShape(CLOSE);
}

function drawHat(x, y) {
  fill(clothesColor);
  arc(x, y, 100, 50, PI, 0);
  rect(x - 50, y, 100, 70);
  rect(x - 70, y + 70, 140, 30);
}

function drawSuit(x, y) {
  fill(clothesColor);
  
  beginShape(); 
  vertex(x - 30, y + 210);
  vertex(x - 70, y + 250);
  vertex(x + 70, y + 250);
  vertex(x + 30, y + 210);
  endShape(CLOSE);
  
  beginShape(); 
  vertex(x - 70, y + 250);
  vertex(x - 165, y + 275);
  vertex(x - 170, y + 280);
  vertex(x - 175, height);
  vertex(x + 175, height);
  vertex(x + 170, y + 280);
  vertex(x + 165, y + 275);
  vertex(x + 70, y + 250);
  endShape(CLOSE); 
}

function drawCurtain() {
  var CURTAIN = color(143, 0, 80);
  fill(CURTAIN);
  var locX = width - 250;
  var locY = 300;
  
  beginShape();
  vertex(width * 3 / 5, 0);
  vertex(width * 3 / 5, height);
  vertex(locX - 175, height);
  vertex(locX - 170, locY + 280);
  vertex(locX - 165, locY + 275);
  vertex(locX - 70, locY + 250);
  vertex(locX - 30, locY + 210);
  vertex(locX - 50, locY + 170);
  
  vertex(locX - 50, locY + 100);
  vertex(locX - 70, locY + 100);
  vertex(locX - 70, locY + 70);
  vertex(locX - 50, locY + 70);
  vertex(locX - 50, locY);
 
  vertex(locX + 50, locY);
  vertex(locX + 50, locY + 70);
  vertex(locX + 70, locY + 70);
  vertex(locX + 70, locY + 100);
  vertex(locX + 50, locY + 100);
  
  vertex(locX + 50, locY + 170);
  vertex(locX + 30, locY + 210);
  vertex(locX + 70, locY + 250);
  vertex(locX + 165, locY + 275);
  vertex(locX + 170, locY + 280);
  vertex(locX + 175, height);
  vertex(width, height);
  vertex(width, 0);
  endShape(CLOSE);
}


function keyPressed() {
  if (keyCode === LEFT_ARROW)
    manLocationX -= speed;
  if (keyCode === RIGHT_ARROW)
    manLocationX += speed;
  if(keyCode == DOWN_ARROW) {
    if(clothesColor >= 0)
      clothesColor -= 50;
  }
  if(keyCode == UP_ARROW) {
    if(clothesColor <= 255)
      clothesColor += 50;
  }
}
