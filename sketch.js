var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,50,50);
}

function draw() 
{
  background(30);

if(keyIsDown(RIGHT_ARROW)){
  ball.position.x +=5
}

if(keyIsDown(LEFT_ARROW)){
  ball.position.x -=5
}

if(keyIsDown(UP_ARROW)){
  ball.position.y -=5
}

if(keyIsDown(DOWN_ARROW)){
  ball.position.y +=5
}

  drawSprites();
}




