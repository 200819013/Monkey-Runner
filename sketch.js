
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400)
  //Monkey Properties
  monkey = createSprite(60, 315, 20, 50)
  monkey.addAnimation("Monkey Runner",monkey_running)
  monkey.scale = 0.1
  //Ground Properties
  ground = createSprite(200, 350, 400, 15)
   ground.x = ground.width /2
  ground.velocityX = -3
}


function draw() {
background("white")
  if(ground.x < 0){
    ground.x = ground.width /2
  }
  
  if(keyDown("space")){
    monkey.velocityY = -8
    
  }
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground)
  
 drawSprites(); 
  
}






