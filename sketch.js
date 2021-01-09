var hr,mn,sc;

function setup() {
  createCanvas(800,400);
  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  hrAngle = map(hr,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
  

  noFill();
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI);

}

function draw() {
  background("black");  

 

  


  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();





  drawSprites();
}