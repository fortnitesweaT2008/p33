var bg,bgimg;

var snow,snowimg
function preload(){
  bgimg= loadImage("snow2.jpg")
  snowimg=loadImage("snow4.webp")
}

function setup() {


  createCanvas(1500,600);

  
 bg= createSprite(400, 200, 50, 50);
 bg.addImage(bgimg)

 
}

function draw() {
  background(255,255,255);  
  snowfalls()
  
  drawSprites();

}
function snowfalls() {
  if(frameCount%60===0){
    snow=createSprite(random(100,900),50,20,20)
 snow.addImage(snowimg)
 snow.scale=0.3
 snow.velocityY=3
  }
  
}