const computerChoice = document.getElementById('computer-choice')
const yourChoice = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerMove
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  yourChoice.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) // We can also use possibleChoices.length
  if (randomNumber === 1) {
    computerMove = 'rock'
  }
  if (randomNumber === 2) {
    computerMove = 'scissors'
  }
  if (randomNumber === 3) {
    computerMove = 'paper'
  }
  computerChoice.innerHTML = computerMove
}

function getResult() {
  if (computerMove === userChoice) {
    result = "It's a draw!"
  }
  if (computerMove === 'rock' && userChoice === 'paper') {
    result = " You Win!"
  }
  if (computerMove === 'rock' && userChoice === 'scissors') {
    result = " You Lost!"
  }
  if (computerMove === 'paper' && userChoice === 'scissors') {
    result = " You Win!"
  }
  if (computerMove === 'paper' && userChoice === 'rock') {
    result = " You Lost!"
  }
  if (computerMove === 'scissors' && userChoice === 'rock') {
    result = " You Win!"
  }
  if (computerMove === 'scissors' && userChoice === 'paper') {
    result = " You Lose!"
  }

  resultDisplay.innerHTML = result
}