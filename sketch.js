var screenball,database;
var Position;

var dog,happyDog;
var database;
var foodS,foodStock;
var dogImage,dogHappyImage;

function preload()
{
	  dogImage=loadImage("Dog.png");
    dogHappyImage=loadImage("happydog.png");
}

function setup() {

  createCanvas(500, 500);
  
  database=firebase.database;

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale=0.15;
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 

}


function draw() {  

  background(46,139,87);

  if (keyWentDown(UP_ARROW)){

  writeStock(foodS);
  dog.addImage(dogImage);

  }

  drawSprites();
 
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Press UP_ARROW Key To Feed the Dog",130,10,300,20);

}

function readPosition(){

  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 

  database.ref('/').update({

   Food:x

  })
}



