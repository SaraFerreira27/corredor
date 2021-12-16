var rua, runner, bd, be
var imgrua, imgrunner
function preload(){
  //imagens pré-carregadas
  imgrua=loadImage ("path.png")
  imgrunner=loadAnimation ("Runner-1.png", "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  rua=createSprite(200, 200)
  rua.addImage (imgrua)
  rua.velocityY=3
  runner=createSprite (200, 200)
  runner.addAnimation ("imgrunner", imgrunner)
  runner.scale=0.05
  bd=createSprite (370, 200, 60, 500)
  bd.visible=false
  be=createSprite (30, 200, 60, 500)
  be.visible=false
}

function draw() {
  background(0);
runner.x=World.mouseX

if (rua.y>400){
  rua.y=height/2
}
runner.collide (bd)
runner.collide (be)
drawSprites()
}
