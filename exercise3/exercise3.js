var count = 0;

function setup() {
 createCanvas(window.innerWidth, window.innerHeight);
 background(0, 0, 0);
 stroke(255, 50);
}

function draw() {
  if(count % 10 == 0) {
    background(random(0, 255), random(0, 255), random(255));
    count = 0;
  }

  count++;
  line(random(0, width), random(0, height), random(0, width), random(0, height));

  fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  var diameter = random(0, width);
  ellipse(random(0, width), random(0, height), diameter, diameter);

  fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  rect(random(0, width), random(0, height), random(0, width), random(0, height));
}
