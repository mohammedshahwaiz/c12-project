
function preload(){
  //pre-load images
  pathimage=loadImage("path.png")
  runnerAnimation=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathimage)
  path.velocityY=4
  path.scale=1.2

  path.y=path.height/2
  runner=createSprite(180,340,30,30)
  runner.addAnimation("running",runnerAnimation)
  runner.scale=0.08
  leftboundary=createSprite(10,200,20,400)
  rightboundary=createSprite(390,200,20,400)

  leftboundary.visible=false
  rightboundary.visible=false
}

function draw() {
  background(0);
  path.velocityY=4
if (path.y>400) {
  path.y=height/2

}

runner.x=World.mouseX

runner.bounceOff(leftboundary)
runner.bounceOff(rightboundary)
drawSprites()
}
