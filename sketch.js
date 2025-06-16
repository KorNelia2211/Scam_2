let rh = 60;
let rw = 350;
let s = 25;
let t = 0;
let gameover = false;

function preload() {
  img1 = loadImage('IMG_1300.png');
  img2 = loadImage('IMG_1301.png');
  img3 = loadImage('IMG_1302.png');
  img4 = loadImage('IMG_1303.png');
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  textSize(20);
  imageMode(CENTER);
}

function draw() {
  background('#E9E8E7');
  
  let centerX = windowWidth/2;
  let centerY = windowHeight/2;
  
  fill('#FFFFFF');
  stroke('#8D8D8D');
  strokeWeight(2);
  rect(centerX,centerY,rw,rh);
  
  
  noStroke();
   fill(0);
  text('Nie jestem robotem',centerX - 75,centerY);
  
 if(mouseX > centerX + 150 - s/2 && mouseX < centerX + 150 + s/2 &&
mouseY > centerY - s/2 && mouseY < centerY + s/2 && mouseIsPressed){
   gameover = true;
    
   
   fill('#8D8D8D');
  stroke('#8D8D8D');
  strokeWeight(2);
  square(centerX + 150,centerY,s);
  }else{
    fill('#FFFFFF');
  stroke('#8D8D8D');
  strokeWeight(2);
  square(centerX + 150,centerY,s);
    }
  if(gameover){
    t++;
   if(t==20){
     window.location.href ='https://emi22-emi.github.io/Scam_3/';
      print('go');
   }
  }
    
  let currentFrame = Math.floor((frameCount % 60) / 15);

if (currentFrame === 0) {
  image(img1, centerX, centerY - 150,150,234);
} else if (currentFrame === 1) {
  image(img2, centerX, centerY - 140,150,234);
} else if (currentFrame === 2) {
  image(img3, centerX, centerY - 150,150,234);
} else {
  image(img4, centerX, centerY - 140,150,234);
}
}
