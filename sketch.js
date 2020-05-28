var PLAY = 1;
var END = 0;
var score = 0;
var gameState = PLAY;

var lives = 3, heart, heartIMG;
var trex;
var cloudStart, cloudStartIMG, cloud, cloudsGroup, cloudImage;
var gameOver, restart;
var bg,bgIMG;

function preload() {
heartIMG = loadImage("Assets/heart.png");
bgIMG = loadImage("Assets/123.jpg");
cloudImage = loadImage("Assets/Untitled.png");
cloudStartIMG = loadImage("Assets/Jungle.png");

}


function setup() {
  createCanvas(1500,700);
  
  bg = createSprite(750,350);
  bg.addImage("BackGround",bgIMG)
  bg.scale = 2.5;

  cloudStart = createSprite(200,125,50,25);
  cloudStart.addImage("CloudStart",cloudStartIMG);


  trex = createSprite(200,115,20,20);
  
  cloudsGroup = new Group();

  for(var i = 1;i<=3;i++){
    heart = createSprite(700+(i*50),540);
    heart.addImage("HeartU",heartIMG);
    heart.scale = 0.2
  }


}


function draw() {
  background(255);
  spawnClouds();
  
  var c = 0;
  if(cloudsGroup.isTouching(trex)){
    c = c + Math.round(getFrameRate()/60);
    if(c>=0&&c<=5){
      score+=c;
    }
        trex.velocityX = -3
  }

 


  if(keyDown("space")&&(trex.collide(cloudsGroup)||trex.collide(cloudStart))) {
    //jumpSound.play();
    trex.velocityY = -12.5;
    trex.velocityX = 7.5;
  }

  trex.velocityY = trex.velocityY + 0.8
  trex.collide(cloudStart);
  trex.collide(cloudsGroup);

  drawSprites();
  textSize(25);
  text("Score = "+score, 1300,100);

  textSize(30);
  text("Lives ",600,550)
  
  if(trex.x>1500||trex.y>700||trex.x<0){

    gameState = END;
    textSize(25);
    text("GAMEOVER", 700,350);
    
    }
    if(gameState===END){
      cloudsGroup.destroyEach();
      cloudStart.visible = false;
      trex.visible = false;
      bg.visible = false;
      background("orange");
      text("Restart ", 700,350)

    }
  
}
