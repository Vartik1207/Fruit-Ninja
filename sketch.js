
var sword;
var swordimage;
var fruit;
var fruit1 ;
var fruit2 ;
var fruit3 ;
var fruit4 ;
var alien ;
var alien1 ;
var alien2 ;
var gameover ;
var gameoverimage ; 
var gameoversound;
var swordsound ;
var gamestate='play'
var score=0;
var fruitgroup;
var aliengroup ;

function preload(){
swordimage=loadImage("sword.png");
fruit1=loadImage("fruit1.png");  
fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png"); 
  fruit4=loadImage("fruit4.png");
 alien1=loadImage("alien1.png"); 
  alien2=loadImage("alien2.png"); 
  gameoverimage=loadImage("gameover.png");
gameoversound=loadSound("gameover.mp3");  
swordsound=loadSound("knifeSwooshSound.mp3");  
  
  
}

function setup(){
createCanvas(400,400);
  
  sword=createSprite(250,100,20,20);
  sword.addImage(swordimage);
  sword.scale=0.5;
  
  
  gameover=createSprite(200,200,10,10);
  gameover.addImage(gameoverimage);
  

  
  fruitgroup=new Group ();
  aliengroup=new Group ();
  
}



function draw(){
background("lightblue");
  drawSprites();
  edges=createEdgeSprites();
  
  textSize(20)  ;
text("score="+score,300,20);
  
  sword.y=mouseY;
  sword.x=mouseX;
  
   if(gamestate==="play"){
     fruit12 ();
    alien12();
     
     gameover.visible=false;
     
if(sword.isTouching(fruitgroup)){
     
score = score+1;
     fruitgroup .destroyEach();
 swordsound.play();
     

 }
   }
     if(sword.isTouching(aliengroup)){
     
       gamestate="end";
    if (gamestate===("end")) {       
 gameoversound.play();
     fruitgroup .destroyEach();
       fruitgroup.setVelocityEach(0);
    aliengroup.setVelocityXEach(0);
  sword.changeImage(gameoverimage);
       sword.x=200;
       sword.y=200;
     aliengroup .destroyEach();
      gameover.visible=true
}
  
     
       
   }
}

function fruit12 (){
  if(frameCount%80===0){
    var fruit=createSprite(400,20);
    fruitgroup.add(fruit);
    fruit.lifetime=200
  
  fruit.velocityX=-2+(score/10); 
  fruit.scale=0.2
  fruit.y=Math.round(random(0,400))
  var rant = Math.round (random (1,4))
   switch (rant){
       
       
       case 1: fruit.addImage(fruit1) ;
       break ;
       case 2: fruit.addImage(fruit2) ;
       break
       case 3 : fruit.addImage(fruit3) ;
       break;
       case 4 : fruit.addImage(fruit4) ;
       break
       default:break;  
       
       
       
       
   }
       
       
       
       
       
   }
  
}
function alien12(){
  if (frameCount%80===0){
  alien=createSprite(350,0);
  aliengroup.add(alien);
  alien.velocityX=(-2+(score/10));  
  alien.addImage(alien1);
   alien.y=Math.round(random(0,400))
  
  
  
} 
}










