// this is more clean-code one
'use strict';

let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;

const number = document.querySelector('.number');
const message = document.querySelector('.message');

const again = document.querySelector('.again');
const check = document.querySelector('.check');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number');
  }
  // Winning case
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // wrong guess case
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😕 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
