
var gameState,playerCount;
var database;
var canvas;
var form,player,game;

function setup(){
    canvas=createCanvas(500,500);
    
    // creating database using the firebase object
    database = firebase.database();
    gameState=0;
    playerCount=0;

    game = new Game();
    game.getState();
    game.start();
    
   
    
}

function draw(){
    background("white");
   
    drawSprites();
}

