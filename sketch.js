var butterflies ;
var butterfliesImg1, butterfliesImg2;
var girl;
var girlImg
var score;
var backgroundImage;

function preload() {
 backgroundImage = loadImage("background.jpeg");
 girlImg = loadImage("girlJumping.webp");
 butterfliesImg1 = loadImage("butterflyImg1.jpeg");
 butterfliesImg2 = loadImage("butterflyImg2.jpeg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  createSprite(400, 200, 50, 50);
  girl = new Girl();

  butterflies = createSprite(50,100,10,10)
  butterflies.addAnimation('flying',fly);
  butterflies.scale = 0.2
  
  girl = createSprite(50,100,10,10);
  girl.addAnimation("girl", girlAnimation);
  girl.scale = 0.2
}

function draw() {
  background(backgroundImage);
  drawSprites();

  butterflies.show();
  Engine.update(engine);
  girl.show();

  drawSprites();
}