var cat_Image1,cat_Image2,cat_Image3,cat;
var mouse_Image1,mouse_Image2,mouse_Image3,mouse;
var garden_Image,garden;

function preload() {
 //load the images here
 cat_Image1 = loadImage("tomOne.png");
 cat_Image2 = loadAnimation("tomTwo.png","tomThree.png");
 cat_Image3 = loadImage("tomFour.png");

 garden_Image = loadImage("garden.png");

 mouse_Image1 = loadImage("jerryOne.png");
 mouse_Image2 = loadAnimation("jerryTwo.png","jerryThree.png");
 mouse_Image3 = loadImage("jerryFour.png");
}

function setup(){
 createCanvas(1000,800);

 //create tom and jerry sprites here
 garden = createSprite(300,300);
 garden.addImage("garden",garden_Image);
 garden.scale = 1.5;
 
 cat = createSprite(690,670,10,10);
 cat.addImage("cat1",cat_Image1);
 cat.scale = 0.15;

 mouse = createSprite(190,670,10,10);
 mouse.addImage("mouse1",mouse_Image1);
 mouse.scale = 0.125;
}

function draw() {
 background("black");

 //Write condition here to evalute if tom and jerry collide
 if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
  mouse.addImage("mouse3",mouse_Image3);
  mouse.changeImage("mouse3");

  cat.addImage("cat3",cat_Image3);
  cat.changeImage("cat3");
  cat.velocityX = 0;
  cat.x = 270;
 }

 drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
 if(keyDown("Left_Arrow")){
   cat.velocityX = -5;
   cat.addAnimation("cat2",cat_Image2);
   cat.changeAnimation("cat2");
   mouse.addAnimation("mouse2",mouse_Image2);
   mouse.changeAnimation("mouse2");
 }
}
