var car,wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(1600,400);

  car = createSprite(50,100,70,40);
  car.velocityX = speed;

  wall = createSprite(1500,100,60,60);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background(255,255,255);  

  if (wall.x - car.x < (car.width/2 + wall.width/2)) 
  {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if (deformation > 180)
    {
      car.shapeColor = color(255,0,0);
    }
    
    if (deformation < 180 && deformation > 100)
    {
      car.shapeColor = (230,230,0);
    }
    
    if (deformation<100)
    {
      car.shapeColor = (0,255,0);
    }
  }
  
  drawSprites();
}