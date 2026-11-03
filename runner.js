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
obstacleImage.src = "assets/globe1.png";

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

let globeArray = [];

let globe1Width = 34;
let globe2Width = 69;
let globe3Width = 102;

let globeHeight = 70;
let globeX = 700;
let globeY = boardHeight - globeHeight;

let globe1Img;
let globe2Img;
let globe3Img;


let gameOver = false;
let score = 0;


globe1Img = new Image();
    globe1Img.src = "./img/globe1.png";

    globe2Img = new Image();
    globe2Img.src = "./img/globe2.png";

    globe3Img = new Image();
    globe3Img.src = "./img/globe3.png";


requestAnimationFrame(upadate);
setInterval(spawnObstacle, 1000);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !isjumping) {
    playerSpeedY = -jumpHeight;
    isjumping = true;
    if (sound === 'on') {
      document.getElementById("jumpSound").play();
    }}

    function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);



    if (playerY < groundY) {
      playerY = groundY;
      isjumping = false;
    }








let best = localStorage.getItem('highScore') || 0
if (score > best) {
  localStorage.setItem('highScore', score)
}

let globe = {
        img : null,
        x : globeX,
        y : globeY,
        width : null,
        height: globeHeight
    }

    let placeglobeChance = Math.random(); //0 - 0.9999...

    if (placeglobeChance > .90) { //10% you get globe3
        globe.img = globe3Img;
        globe.width = globe3Width;
        globeArray.push(globe);
    }
    else if (placeglobeChance > .70) { //30% you get globe2
        globe.img = globe2Img;
        globe.width = globe2Width;
        globeArray.push(globe);
    }
    else if (placeglobeChance > .50) { //50% you get globe1
        globe.img = globe1Img;
        globe.width = globe1Width;
        globeArray.push(globe);
    }

    if (globeArray.length > 5) {
        globeArray.shift(); //remove the first element from the array so that the array doesn't constantly grow
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner cant reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner cant reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}})
