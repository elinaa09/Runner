const soundButton = document.getElementById('soundButton')
const normalDifficultyButton = document.getElementById('normalDifficultyButton')
const hardDifficultyButton = document.getElementById('hardDifficultyButton')

let sound = localStorage.getItem('sound') || 'on'
let difficulty = localStorage.getItem('difficulty') || 'normal'

soundButton.textContent = `Sound: ${sound === 'on' ? 'On' : 'Off'}`

normalDifficultyButton.textContent = `Difficulty: ${difficulty === 'normal' ? 'Normal' : 'Hard'}`
hardDifficultyButton.textContent = `Difficulty: ${difficulty === 'hard' ? 'Hard' : 'Normal'}`

showDifficultyButtons()

soundButton.addEventListener('click', () => {
   if (sound === 'on'){
        sound = 'off'
    }
    else {
        sound = 'on'
   } 
    localStorage.setItem('sound', sound)
    soundButton.textContent = 'Sound: ' + sound
})

normalDifficultyButton.addEventListener('click', () => {
    difficulty = 'normal'
    localStorage.setItem('difficulty', difficulty)
    showDifficultyButtons()
})

hardDifficultyButton.addEventListener('click', () => {
    difficulty = 'hard'
localStorage.setItem('difficulty', difficulty)
    showDifficultyButtons()
})

function showDifficultyButtons() {
    if (difficulty === 'normal') {
        normalDifficultyButton.style.display = 'none'
        hardDifficultyButton.style.display = 'inline-block'
    }
    else {
        normalDifficultyButton.style.display = 'inline-block'
        hardDifficultyButton.style.display = 'none'
    }
}