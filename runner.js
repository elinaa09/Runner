let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let sound = localStorage.getItem('sound') || 'on';

let run1 = new Image();
let run2 = new Image();
let run3 = new Image();
let jumpImage = new Image();

run1.src = "assets/run1.png";
run2.src = "assets/run2.png";
run3.src = "assets/run3.png";
jumpImage.src = "assets/jump.png";


let runImage = [run1, run2, run3];

let groundY = canvas.height - 100;

let playerX = 50;
let playerY = groundY;
let playerWidth=60;
let playerHeight=70;
let playerSpeedY=0;
let isjumping= false;


let obstacleList = [];
let spawnTimer = 80;


let jumpHeight = 15;
let currentRunFrame = 0;
let runFrameTimer = 0;
let runFrameInterval = 5;

let gravity = 0.4;
let velocityX = -8;
let velocityY = 0;

let globeArray = [];

let globe1Width = 34;
let globe2Width = 69;
let globe3Width = 102;

let globeHeight = 70;
let globeX = 700;
let globeY = groundY + playerHeight - globeHeight;


globe1Img = new Image();
    globe1Img.src = "assets/globe1.png";

    globe2Img = new Image();
    globe2Img.src = "assets/globe2.png";

    globe3Img = new Image();
    globe3Img.src = "assets/globe3.png";


    let gameOver = false;
    let score = 0;

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
   event.preventDefault();

   if (gameOver) {
      location.reload();
      return;
    }

    if (!isjumping) {
    playerSpeedY = -jumpHeight;
    isjumping = true;
    if (sound === 'on') {
      document.getElementById("jumpSound").play();
    }
  }
}
});

function spawnObstacle() {
  if (gameOver) {
    return;
  }


  let globe = {
        img : null,
        x : globeX,
        y : globeY,
        width : null,
        height: globeHeight
    }

    let placeglobeChance = Math.random(); 

    if (placeglobeChance > .90) { 
        globe.img = globe3Img;
        globe.width = globe3Width;
        globeArray.push(globe);
    }
    else if (placeglobeChance > .70) { 
        globe.img = globe2Img;
        globe.width = globe2Width;
        globeArray.push(globe);
    }
    else if (placeglobeChance > .50) {
        globe.img = globe1Img;
        globe.width = globe1Width;
        globeArray.push(globe);
    }

    if (globeArray.length > 5) {
        globeArray.shift(); //removes the first element from the array so that the array doesn't constantly grow
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner cant reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner cant reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
      }

    context.clearRect(0, 0, board.width, board.height);

  playerSpeedY = playerSpeedY + gravity;
  playerY = playerY + playerSpeedY;

    if (playerY > groundY) {
      playerY = groundY;
      isjumping = false;
    }

let playerImg;
if (isjumping) {
  playerImg = jumpImage;
} else {
  runFrameTimer+ 1;
  if (runFrameTimer >= runFrameInterval) {
    runFrameTimer = 0;
    currentRunFrame = (currentRunFrame + 1) % 3;
  }     
  playerImg = runImage[currentRunFrame];
}
context.drawImage(playerImg, playerX, playerY, playerWidth, playerHeight);

let player = { x: playerX, y: playerY, width: playerWidth, height: playerHeight };

for (let i =0; i < globeArray.length; i++) {
  let globe = globeArray[i];
      globe.x += velocityX;
      context.drawImage(globe.img, globe.x, globe.y, globe.width, globe.height)
        
if (detectCollision(player, globe)) {
  gameOver = true;
  context.fillStyle = "black";
  context.font = "40px sans-serif";
  context.fillText("Game Over - press space", 250, 150);
}
}

score = score + 1;

        let best = localStorage.getItem('highScore') || 0;
      if (score > best) {
        localStorage.setItem('highScore', score);
      }

      context.fillStyle = "black";
      context.font = "20px sans-serif";
       context.fillText("Score: " + score, 10, 30);
      context.fillText("High Score: " + best, 10, 60);
    }
  
requestAnimationFrame(update);
setInterval(spawnObstacle, 1000)
