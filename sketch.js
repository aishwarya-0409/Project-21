var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

bullet =  createSprite(50, 200, 60, 10);
bullet.shapeColor = color("white");
bullet.velocityX = speed


}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(deformation>10){
      wall.shapeColor = color(255, 0, 0)
      }
    
      if(deformation<10){
      wall.shapeColor = color(0, 255, 0)
     }

  }
  
  drawSprites();
}