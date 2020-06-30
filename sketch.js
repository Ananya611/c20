var rect1
var rect2





function setup() {
  createCanvas(800,400);

  rect1 = createSprite(400, 200, 50, 50);
rect1.shapeColor = "red"

  rect2 = createSprite(350,200,50,50);
rect2.shapeColor = "red"

}

function draw() {
  background("black");

  rect2.x = mouseX
  rect2.y = mouseY

  if(rect2.x-rect1.x<rect2.width/2+rect2.width/2
    && rect1.x-rect2.x<rect2.width/2+rect1.width/2
    &&rect2.y-rect1.y<rect2.height/2+rect1.height/2
    &&rect1.y-rect2.y<rect2.height/2+rect1.height/2){
    rect2.shapeColor = "cyan"
rect1.shapeColor = "cyan"

  }
  else{
    rect2.shapeColor = "red"
    rect1.shapeColor = "red"
  }






  drawSprites();
}