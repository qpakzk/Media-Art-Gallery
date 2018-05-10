var mass = [];
var posX = [];
var posY = [];
var velocityX = [];
var velocityY = [];
var colors = [];
var diameter = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240,248,255);
  
  for (var i = 0; i < mass.length; i++) {
    var accelerationX = 0, accelerationY = 0;
    
    for (var j = 0; j < mass.length; j++) {
      if (i != j) {
        var distX = posX[j] - posX[i];
        var distY = posY[j] - posY[i];

        var dist = sqrt(distX * distX + distY * distY);
        if (dist < 1) dist = 1;

        var force = (dist - 500) * mass[j] / dist;
        accelerationX += force * distX;
        accelerationY += force * distY;
      }
    }
    
    velocityX[i] = velocityX[i] * 0.5 + accelerationX * mass[i];
    velocityY[i] = velocityY[i] * 0.5 + accelerationY * mass[i];
  }
  
  for (var k = 0; k < mass.length; k++) {
    posX[k] += velocityX[k];
    posY[k] += velocityY[k];
    
    noStroke();
    
    ellipse(posX[k], posY[k], diameter[k] + 10, diameter[k] + 10);
    
    fill(colors[k]);
    ellipse(posX[k], posY[k], diameter[k], diameter[k]);
  }
}

function addCircles() {
  mass.push(random(0.003, 0.03));
  posX.push(mouseX);
  posY.push(mouseY);
  velocityX.push(0);
  velocityY.push(0);
  colors.push(color(int(random(0, 255)), int(random(0, 255)), int(random(0, 255)), int(random(0, 255))));
  diameter.push(int(random(20, height / 4)));
}

function mouseClicked() {
  addCircles();
}