var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 80, 50);
 movingRect = createSprite(600, 300, 50, 80);
 fixedRect.debug = true;
 movingRect.debug = true;
}

function draw() {
  background(0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  movingRect.velocityX = 3;
  movingRect.velocityY = 3;

  if (movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2) {

       movingRect.shapeColor = "red";
       fixedRect.shapeColor = "red";

       movingRect.velocityY = movingRect.velocityY * -1;
       movingRect.velocityX = movingRect.velocityX * -1;

  }
  
  else {
    
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }
  drawSprites();
}