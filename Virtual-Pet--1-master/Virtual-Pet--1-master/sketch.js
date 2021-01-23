//Create variables here
var dog, happyDog;
var dogImage, happyDogImage;
var foodS, foodStack;
var food;

var database;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.18;

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}

function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    foodDecrease(foodS)
    dog.addImage(happyDogImage);
  }
  drawSprites();
  fill("red")
  push()
  stroke("blue")
  textSize(20);
  text("Food: "+foodS, 220, 50)
  pop()
  text("Press the up arrow, to feed the dog.", 200, 75);
}

function readStock(data){
  foodS = data.val();
}

function foodDecrease(foodS){
  if(foodS<=0){
    foodS=0;
  }
  else{
    foodS = foodS - 1;
  }
   database.ref('/').update({
      Food: foodS
   })
}


