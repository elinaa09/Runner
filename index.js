const startButton = document.getElementById('startButton')
const menuButton = document.getElementById('menuButton')
const clickSound = document.getElementById('clickSound')

const highScoreElement = document.getElementById('highScore')
const highScore = localStorage.getItem('highScore') || 0
highScoreElement.textContent = `High Score: ${highScore}`



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

