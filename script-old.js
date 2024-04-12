'use strict';

/*
const message = document.querySelector('.message')
//  querySelector method in document object that enables you to select an HTML element 

console.log(message)
//  <p class="message">Start guessing...</p>

console.log(message.textContent)
//Start guessing...

const message = document.querySelector('.message')
const number = document.querySelector('.number')
const score = document.querySelector('.score')

message.textContent = "🎉 Correct Number!"
number.textContent = 13

//this will cause to change whatever content of this element

const guess = document.querySelector('.guess')
guess.value = 22
//this is how to change value of on input
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const number = document.querySelector('.number');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
let score = document.querySelector('.score').textContent;
let highscore = 0;

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔ No Number';
  }
  // Winning case
  else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    // style method lets you change any css property notice that it
    // follows camelCase notation.
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // High guess case
  else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😕 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // low guess case
  else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😕 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Start guessing';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});

//addEventListener is a method tha t allows you to do something when a
//certain event happens it takes two arguments event name and the function
//that will executes(handler) JavaScript engine will call this function when
//event is triggered
