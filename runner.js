let canvas = document.getElementById("gameCanvas");
let sound = localStorage.getItem('sound')



let run1 = new Image();
let run2 = new Image();
let run3 = new Image();
let jumpImage = new Image();
let obstacleImage = new Image();

run1.src = "assets/run1.png";
run2.src = "assets/run2.png";
run3.src = "assets/run3.png";
jumpImage.src = "assets/jump.png";
obstacleImage.src = "assets/snowglobe.png";

let runImage = [run1, run2, run3];

let playerX = 50;
let playerY = groundY;
let playerWidth=60;
let playerHeight=70;
let playerSpeedY=0;
let isjumping= false;

let obstacleList = [];
let spawnTimer = 80;






















let best = localStorage.getItem('highScore') || 0
if (score > best) {
  localStorage.setItem('highScore', score)
}





let gameOver = false;
