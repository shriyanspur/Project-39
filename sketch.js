var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners, runner1, runner2, runner3, runner4;

var ri1, ri2, ri3, ri4;

var h1, h2, h3, h4, h5, h6;
var h7, h8, h9, h10, h11, h12;
var hurdles;

var track, ground;

function preload() {
  ri1 = loadAnimation("b1r1.png", "b1r2.png", "b1r3.png", "b1r4.png", "b1r5.png", "b1r6.png");
  ri2 = loadAnimation("b2r1.png", "b2r2.png", "b2r3.png", "b2r4.png", "b2r5.png", "b2r6.png");
  ri3 = loadAnimation("b3r1.png", "b3r2.png", "b3r3.png", "b3r4.png", "b3r5.png", "b3r6.png");
  ri4 = loadAnimation("b4r1.png", "b4r2.png", "b4r3.png", "b4r4.png", "b4r5.png", "b4r6.png");

  hi = loadImage("hurdles.jpg");

  track = loadImage("track2.jpg");
  ground = loadImage("ground.png");
}

function setup(){
  createCanvas(displayWidth-400, displayHeight-290);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play(); 
  }
  if(gameState === 2){
    game.end();
  }
}
