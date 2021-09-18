
var iss, spacecraft, restart;
var bg, issimg, scimg, restartImg;
var hasDocked = false;
var gamestate = 1;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
  restartImg= loadImage("restart.png");
}

function setup() {
  createCanvas(windowWidth-30, windowHeight-30);
  spacecraft = createSprite(windowWidth/2,windowHeight/2+75);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(windowWidth/2,windowWidth/2-450);
  iss.addImage(issimg);
  iss.scale = 0.25;

  restart = createSprite(windowWidth/2, windowHeight/2+ 250);
  restart.addImage(restartImg);
  restart.scale = 0.5;
}



function draw() {
  background(bg);
  
   
  if(gamestate === 1){

    restart.visible = false;
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -3;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 2;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 2;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
      spacecraft.y = spacecraft.x + 1;
  }
}

   if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     gamestate = 0;
     textSize(30);
     fill("white")
     text("Docking Successful!", windowWidth/2-125, windowHeight/2+175);
     
     restart.visible = true;
     if (mousePressedOver(restart)) {
    reset();
  }
   }

  drawSprites();
  }

  function reset(){
     gamestate = 1;
  }
