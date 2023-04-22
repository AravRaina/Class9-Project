var Sprite
function setup() {
  createCanvas(400,400);
 Sprite = createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW)){
Sprite.position.x = Sprite.position.x+10
}
if (keyIsDown(LEFT_ARROW)){
  Sprite.position.x = Sprite.position.x-10
  }
if (keyIsDown(UP_ARROW)){
    Sprite.position.y = Sprite.position.y-10
}
    if (keyIsDown(DOWN_ARROW)){
      Sprite.position.y = Sprite.position.y+10
      }
            

drawSprites();
}
