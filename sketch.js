var bg,bg2,form,system,code,security;
var score=0;
var congratulations;
function preload() {
 
  
  bg= loadImage("bg3.jpg")
  //load image for the treasure background
  bg= loadImage("bg3.jpg");
  bg2 = loadImage("you win.jpg");
  
  congratulations =loadSound("yayy.m4a")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("purple");
  text("Score: " + score, 450, 50);

  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    congratulations.play();
  }
   congratulations.stop(0.5);
  drawSprites()
}