const startButton = document.getElementById('startButton')
const menuButton = document.getElementById('menuButton')
const clickSound = document.getElementById('clickSound')

const highScoreElement = document.getElementById('highScore')
const highScore = localStorage.getItem('highScore') || 0
highScoreElement.textContent = `High Score: ${highScore}`


document.getElementById('hamburger').addEventListener('click', () => {
  let menu = document.getElementById('sideMenu')
  if (menu.style.display === 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
})

startButton.addEventListener('click', () => {
    const clickSound = document.getElementById('clickSound')
    clickSound.play()
    window.location.href = 'runner.html'
}
)

menuButton.addEventListener('click', () => {
    const clickSound = document.getElementById('clickSound')
    clickSound.play()
    window.location.href = 'menu.html'
}
)

