let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  updateScore(result);
  displayResult(userChoice, computerChoice, result);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) return 'draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 'user';
  }
  return 'computer';
}

function updateScore(winner) {
  if (winner === 'user') userScore++;
  if (winner === 'computer') computerScore++;

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function displayResult(userChoice, computerChoice, result) {
  document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

  if (result === 'draw') {
    document.getElementById('result-message').textContent = "It's a Draw!";
  } else if (result === 'user') {
    document.getElementById('result-message').textContent = "You Win!";
  } else {
    document.getElementById('result-message').textContent = "Computer Wins!";
  }
}
