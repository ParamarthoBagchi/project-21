var bullet,wall,thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
  bullet= createSprite(130,200,50,10);
  bullet.shapeColor= color(255,255,255);
  thickness= random(22,83);
  wall= createSprite(1200,200,thickness,height);
  wall.shapeColor= color(80,80,80);
  speed= random(223,321);
  weight= random(30,52);
  bullet.velocityX= speed;
}

function draw() {
  background(0,0,0);  
  bullet.velocityX= speed;
  if (touching(bullet,wall)){
    var dmg= (speed*weight*speed*0.5)/(thickness*thickness*thickness)
    if (dmg<=10){
      wall.shapeColor= color(0,255,0)
      text("wall is suitable",800,200);
    }
    else if(dmg>10){
      wall.shapeColor= color(255,0,0)
      text("wall is not suitable",800,200);
    }
  }
  drawSprites();
}