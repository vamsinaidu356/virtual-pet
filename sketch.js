//Create variables here
var dog;
var dog1;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
	dog1 = loadImage("images/dogimg.png")
  happyDog1 = loadImage("images/dogimg1.png")
} 
function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,300,150,150)
  dog.addImage(dog1)
  dog.scale = 0.15;
  foodStock = database.ref("foodS")
  foodStock.on("value",readStock)

  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog1)
  }
  drawSprites();
  //add styles here



}
function readStock(data){
  foodS = data.val()

}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x= x-1
  }
  database.ref("/").update({food:x})
  
}



