void drawFrog(int x, int y, int size) {  
  noStroke();

  /*head*/
  fill(53, 182, 44);
  ellipse(x, y-size/4.8, size/1.25, size/1.5); 
  ellipse(x-size/4.8, y-size/2, size/4, size/4); 
  ellipse(x+size/4.8, y-size/2, size/4, size/4); 

  /*body*/
  ellipse(x, y+size/4, size, size); 
  fill(109, 200, 59);
  ellipse(x, y+size/3.7, size/1.6, size/1.5);

  /*legs*/
 
  fill(53, 182, 44);
  bezier(x+size/2.4, y+size/80, x+size/1.1, y-size/12, x+size/1.85, y+size/1.5, x+size/2.4, y+size/1.5);
  bezier(x-size/2.4, y+size/80, x-size/1.1, y-size/12, x-size/1.85, y+size/1.5, x-size/2.4, y+size/1.5);
  rect(x+size/3, y+size/2, size/3, size/4.8, 100);
  rect(x-size/1.55, y+size/2, size/3, size/4.8, 100);

  /*eyes*/
  fill(255); 
  ellipse(x-size/4.8, y-size/2, size/6, size/6); 
  ellipse(x+size/4.8, y-size/2, size/6, size/6); 

  fill(0); 
  ellipse(x-size/4.8, y-size/2, size/8, size/8); 
  ellipse(x+size/4.8, y-size/2, size/8, size/8);   

  ellipse(x-size/24, y-size/2.7, size/40, size/40); 
  ellipse(x+size/24, y-size/2.7, size/40, size/40); 

  fill(255); 
  ellipse(x-size/5.3, y-size/1.9, size/40, size/40); 
  ellipse(x+size/5.3, y-size/1.9, size/40, size/40); 

  /*cheek*/
  fill(200, 0, 0); 
  ellipse(x-size/4, y-size/3.9, size/4, size/4); 
  ellipse(x+size/4, y-size/3.9, size/4, size/4);

  /*mouth*/
  noFill();
  stroke(0);
  strokeWeight(size/55);
  arc(x, y-size/3.5, size/3, size/4, 0, PI);
} 

void drawRyan(int x, int y) {
  //background(255);
  strokeWeight(5);

  drawRyanBody(x, y);
  drawRyanFace(x, y);
}

void drawRyanFace(int x, int y) {
  color black = color(0, 0, 0);
  color orange = color(239,166,39);  
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

void drawRyanBody(int x, int y) {
  color black = color(0, 0, 0);
  color white = color(255, 255, 255);
  color orange = color(239,166,39);

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
  triangle(x + -10, y + 125, x + -20, y + 110, x + 0, y + 110);
  triangle(x + 10, y + 125, x, y + 110, x + 20, y + 110);
}


void drawRabbit(int x, int y, int size, int height) {
//face
  fill(255, 200, 200); 
  ellipse(x, y, size, height);
  fill(0);
  ellipse(x-20, y-5, size/8, height/8);
  ellipse(x+20, y-5, size/8, height/8);
  triangle(x, y+15, x-10, y+5, x+10, y+5);
//ear
  fill(255, 200, 200);
  ellipse(x-25, y-50, size/8*3, height/8*7);
  fill(255, 200, 200);
  ellipse(x+25, y-50, size/8*3, height/8*7);
  fill(255);
  ellipse(x-25, y-50, size/8, height/8*5);
  ellipse(x+25, y-50, size/8, height/8*5); 

//body
  fill(255, 200, 200);
  ellipse(x, y+95, size/8*9, height/8*13);
  fill(255);
  arc(x, y+100, size/8*7, height/8*9, 0, radians(180));
//arm
  fill(255, 200, 200);
  ellipse(x+40, y+60, size/8*6, height/4);
  ellipse(x-40, y+60, size/8*6, height/4);
  fill(255);
  ellipse(x-70, y+60, size/4, height/16*5);
  ellipse(x+70, y+60, size/4, height/16*5);
//feet
  fill(255);
  ellipse(x-35, y+160, size/16*9, height/16*5);
  ellipse(x+35, y+160, size/16*9, height/16*5);
//ribbon
  fill(255, 0, 0);
  triangle(x, y+40, x-20, y+30, x-20, y+50);
  triangle(x, y+40, x+20, y+30, x+20, y+50);
  fill(255, 150, 150);
  ellipse(x, y+40, size/8, height/8);
}


void drawManbo(int x, int y, int size){ 
/* x= x position
   y= y position
   size= size
   */
  strokeWeight(size*0.007);
 
  //ear
  fill(0,100,105);
  arc(x-size*0.2,y-size*0.6,size*0.3,size*0.24,radians(274.4),radians(339));
  arc(x+size*0.2,y-size*0.6,size*0.3,size*0.24,radians(201),radians(265.8));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(172.5),radians(210));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(330.5),radians(367.5));
 
  //arm
  ellipse(x,y+size*0.04,size*1.16,size*0.4);
  arc(x,y+size*0.2,size*1.22,size*1.15,radians(200),radians(340));
 
  //head
ellipse(x,y-0.48*size,size*0.55,size*0.4);

  //face
  noStroke();
  fill(255,245,220);
  ellipse(x, y-0.42*size,size*0.40,size*0.30);
  fill(0,100,105);
  arc(x,y-0.65*size,size*0.2,size*0.2,radians(20),radians(160));
 
 //eye
 strokeWeight(size*0.007);
 stroke(0);
 line(x-size*0.15,y-size*0.495,x-size*0.07,y-size*0.505);
 line(x+size*0.15,y-size*0.495,x+size*0.07,y-size*0.505);
 
 //tooth
 noFill();
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(189),radians(210));
 arc(x-size*0.102,y-0.45*size,size*0.13,size*0.1,radians(330),radians(350));
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(330),radians(351));
 arc(x+size*0.102,y-0.45*size,size*0.13,size*0.1,radians(190),radians(210));
 
 //mouse
 arc(x,y,size,size*0.92,radians(263),radians(277));
 
  //body
  stroke(0);
  fill(0,100,105);
ellipse(x,y-size*0.02, size*0.98,size*0.75);
  //Bae?
  strokeWeight(size*0.007);
  fill(255,245,220);
  arc(x,y, size,size*0.79,radians(230), radians(310));
  arc(x,y-size*0.353,size,size*0.9,radians(48),radians(133));
  arc(x-size*0.11,y-size*0.105,size*0.9,size*1.2,radians(340.8),radians(368));
  arc(x+size*0.105,y-size*0.105,size*0.9,size*1.2,radians(172),radians(199)); 
  fill(0,100,105);
  arc(x,y+0.15*size,size*0.5,size*0.25,radians(222),radians(318));
  noStroke();
  arc(x,y+0.15*size,size*0.5-size*0.007,size*0.25-size*0.007,radians(180),radians(360));
  ellipse(x,y+0.15*size,size*0.3,size*0.2);
  
 //foot 
  stroke(0);
  fill(255,245,220);
  ellipse(x-size*0.29,y+size*0.3,size*0.38,size*0.3);
  ellipse(x+size*0.29,y+size*0.3,size*0.38,size*0.3);
  fill(170,117,87);
  ellipse(x-size*0.29,y+size*0.3,size*0.18,size*0.13);
  ellipse(x+size*0.29,y+size*0.3,size*0.18,size*0.13);
  
  //lettering?
  strokeWeight(size*0.013);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.48);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.55);
  line(x-size*0.45,y-size*0.55,x-size*0.38,y-size*0.55);
  line(x-size*0.44,y-size*0.51,x-size*0.40,y-size*0.51);
  strokeWeight(size*0.01);
  line(x-size*0.4,y-size*0.44,x-size*0.35,y-size*0.46);
  line(x-size*0.35,y-size*0.46,x-size*0.37,y-size*0.4);
  line(x-size*0.37,y-size*0.4,x-size*0.33,y-size*0.42);
  line(x-size*0.38,y-size*0.43,x-size*0.34,y-size*0.44);
}

void drawCloud(int x,int y,int z,int w,int k)
{
  noStroke();
  fill(k);
  ellipse(x,y,z,z);
  ellipse(x-w,y,0.8*z,0.8*z);
  ellipse(x+w,y,0.8*z,0.8*z);
}

void drawLion(int x, int y, int a, int b){
  //background(255);
 
  //hair
  fill(220,120,0);
  triangle(x-50,y-110,x,y-160,x-60,y-180);
  triangle(x+40,y-110,x,y-160,x+50,y-180);
  triangle(x-40,y-130,x-40,y-80,x-90,y-105);
  triangle(x+40,y-130,x+40,y-80,x+85,y-105);

  //arm
  fill(250,180,70);
  ellipse(x-60,y-50,a-10,b*1/4);
  ellipse(x+60,y-50,a-10,b*1/4);

  //leg
  fill(250,180,70);
  ellipse(x-30,y+60,a-40,b-20);
  ellipse(x+30,y+60,a-40,b-20);

  //body
  fill(250,180,70);
  ellipse(x,y-10,a+30,b+50);
  fill(250,220,170);
  ellipse(x,y,a,b); //250,360

  //head
  fill(250,180,70);
  ellipse(x,y-110,a+30,b);

  //eye
  fill(0);
  ellipse(x-20,y-110,a-63,b-93);
  ellipse(x+20,y-110,a-63,b-93);

  //nose
  fill(0);
  triangle(x-5,y-100,x+5,y-100,x,y-95);

  //mouth
  fill(255,0,0);
  ellipse(x,y-85,a-60,b-90);
  fill(255);
  ellipse(x-10,y-90,a-51,b-81);
  ellipse(x+10,y-90,a-51,b-81);
}

void drawSun(int x,int y,int size, int line, int weight) {
  fill(255,0,0);
  stroke(255,100,0,80);
  strokeWeight(weight);
  for(int i=line; i<=width-line; i++) {
    stroke(255,100,0,70);
    line(x,y,i,random(line,height-line));
  }
  ellipse(x,y,size,size);
}

void setup() {
  size(1000, 1000);
  color green = color(102, 255, 102);
  color sky = color(153, 225, 255);
  
  noStroke();
  fill(sky);
  rect(0, 0, width, 2 * height / 3);
  
  drawSun(950, 50, 100, 1000,1);
  
  fill(green);
  rect(0, 2 * height / 3, width, height / 3);
  drawCloud(100, 100, 200, 100, 240);
  drawCloud(700, 200, 100, 60, 220);
  drawCloud(500, 50, 150, 100, 250);
  drawCloud(800, 400, 100, 50, 230);
  drawCloud(200, 350, 150, 100, 230);
  
  drawRyan(500, 450);

  drawFrog(700, 700, 50);
  drawFrog(50, 800, 50);
  drawFrog(40, 650, 50);
  drawFrog(600, 750, 50);
  
  noStroke();
  drawRabbit(300, 650, 80, 80);
  
  drawManbo(850,700, 200);
  
  stroke(10);
  drawLion(150, 600,70,100);
}