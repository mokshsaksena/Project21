var bullet, wall;

var speed, weight, damage, thickness;

function setup() {

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83)
  
  bullet = createSprite(50, 200, 50, 25);
  wall = createSprite(1200, 200, thickness, height/2);
  

  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall.shapeColor = 80, 80, 80;

  createCanvas(1600,400);
 
}

function draw() {
  background(0, 0, 0);  

  drawSprites();

  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    bullet.x = wall.x - thickness + 5;
  

    damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness)
 
    if(damage > 10){
      wall.shapeColor = "red"
    }
    else if (damage <= 10){
      wall.shapeColor = "green"
    }
 
  }

 
}


function  hasCollided (lbullet, lwall){

var bulletRightEdge = lbullet.x + lbullet.width;
var wallLeftEdge = lwall.x

if (bulletRightEdge >= wallLeftEdge)
{
  return true;
}
else 
{
  return false;
}


}