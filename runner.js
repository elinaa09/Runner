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


let gameSpeed = 5;
let groundY = canvas.height - 100;
let jumpHeight = 15;
let currentRunFrame = 0;
let runFrameTimer = 0;
let runFrameInterval = 5;

let gravity = 0.4;
let velocityX = -8;
let velocityY = 0;


let gameOver = false;
let score = 0;


globeImg = new Image();
globeImg.src = "assets/snowglobe.png";

requestAnimationFrame(upadate);
setInterval(spawnObstacle, 1000);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !isjumping) {
    playerSpeedY = -jumpHeight;
    isjumping = true;
    if (sound === 'on') {
      document.getElementById("jumpSound").play();
    }}

    


document.addEventListener("keyup", (event) => {
  if (event.code === "Space" && !isjumping) {
    playerSpeedY = -jumpHeight;
    isjumping = true;
    if (sound === 'on') {
      document.getElementById("jumpSound").play();
    }
    if (playerY < groundY) {
      playerY = groundY;
      isjumping = false;
    }





























let best = localStorage.getItem('highScore') || 0
if (score > best) {
  localStorage.setItem('highScore', score)
}





let gameOver = false;
