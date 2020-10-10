
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 
  createCanvas(400, 400);
  
  var monkey = createSprite(160, 330, 10, 10);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.2;
  
  var ground = createSprite(200, 390, 400, 10);
  ground.velocityX = -3;
}


function draw() {
  
  background("white");
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  if(ground.x < 0){
   ground.x = ground.width / 2;
  }

drawSprites();  
}






