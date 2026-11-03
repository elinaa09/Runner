let sound = localStorage.getItem('sound')



let run1 = new Image();
let run2 = new Image();
let run3 = new Image();
let jumpImage = new Image();
let obstacleImage = new Image();

run1.src = "./run1.png";
run2.src = "./run2.png";
run3.src = "./run3.png";
jumpImage.src = "./jump.png";
obstacleImage.src = "./snowglobe.png";

let runImage = [run1, run2, run3];




















let best = localStorage.getItem('highScore') || 0
if (score > best) {
  localStorage.setItem('highScore', score)
}
