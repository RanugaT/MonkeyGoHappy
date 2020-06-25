//Global Variables
var Banana, Monkey, Obstacle, ObstacleGroup, Background, Score;
var Banana1, Monkey1, Obstacle1, Background1;
var Ground;

Score = 0;


        
function preload(){
  Background1 = loadImage("jungle.jpg");
  Banana1 = loadImage("Banana.png");
  Monkey1 =                              loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  Obstacle1 = loadImage("stone.png");
  
 
  
}

function setup() {
  createCanvas(600,300);

  Background = createSprite(500,150,1200,10);
  Banana = createSprite(605,200,10,10); 
  Monkey = createSprite(100,290,10,10);
  Obstacle = createSprite(605,280,10,10);
  Ground = createSprite(200,300,1200,10);
  
  
  Background.addImage("Background",Background1);
  Banana.addImage("Banana",Banana1);
  Monkey.addAnimation("Monkey",Monkey1);
  Obstacle.addImage("Stone",Obstacle1); 
  
  }


function draw(){
 background("lightblue"); 
  
  Monkey.scale = 0.10;
  Banana.scale = 0.05;
  Obstacle.scale = 0.15;
  
    if(keyDown("Space")&& Monkey.y >= 150){
    Monkey.velocityY = -10;
    }
  
  Monkey.velocityY = Monkey.velocityY+0.8;
  Monkey.collide(Ground);
  
  Obstacle.velocityX = -5;
  
  Ground.visible = false;
  
  Background.velocityX = -5;
  
    if (Background.x < 0){
    Background.x = Background.width/2;
    }
  
    if(Obstacle.x < 0){
    Obstacle.x = 605;
    }
  
  Obstacle.lifetime = 120;
  
  
  Banana.velocityX = -5;
    
    if(Banana.x < 0){
    Banana.x = 605;
    }
  
  Banana.lifetime = 120;
  
    if(Obstacle.isTouching(Monkey)){
     Monkey.scale = 0.05; 
      Score = Score-2;
      Obstacle.x = 605;
      }
  
  if(Banana.isTouching(Monkey)){
  Score = Score+2;
    Banana.x = 605;
    
  }
  
  if(Score >= 10) {
     Monkey.scale = 0.15;
  }
  
  
  if(Score >= 20) {
     Monkey.scale = 0.20;
  }
  
  
  if(Score >= 30) {
     Monkey.scale = 0.25 ;
  }
  
  if(Score <= -10){
    Monkey.scale = 0.025;
  
     }

  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ Score,300,50);
}

