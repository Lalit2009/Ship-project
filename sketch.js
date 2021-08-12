var sea;
var ship;

function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png")
sea1=loadImage("sea.png")
}

function setup(){
  createCanvas(1000,400);
  sea = createSprite(400,200)
  sea.addImage(sea1)
  sea.scale=0.5;
  sea.velocityX=-5
  
  ship = createSprite(130,200,30,30)
  ship.addAnimation("movingShip",ship1)
  ship.scale = 0.4




}

function draw() {
  
  sea.velocityX = -3

  if(sea.x < 0){
    sea.x = sea.width/8

  }
  
  
  
  
  background("blue");
 drawSprites()
}