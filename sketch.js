var database;
var form , game , player;
var gameState = 0;
var playerCount;
var canvas;

function setup(){
  
  console.log(database);
  canvas = createCanvas(400,400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  

}

function draw(){
  background("white");
  
   
    drawSprites();
  
}


