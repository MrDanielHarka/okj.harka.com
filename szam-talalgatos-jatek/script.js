'use strict';

const formPreventdefault = document.getElementById('highestNumberForm');
function handleForm(event) {
  event.preventDefault();
}
formPreventdefault.addEventListener('submit', handleForm);

const formPreventdefault2 = document.getElementById('guessedNumberForm');
function handleForm(event) {
  event.preventDefault();
}
formPreventdefault2.addEventListener('submit', handleForm);

let highestNumber,
  guessedNumber,
  randomNumber,
  guesses = 0;

const displayQuestion = function (question) {
    document.getElementById('question').textContent = question;
  },
  displayMessage = function (message) {
    document.getElementById('message').innerHTML = message;
  },
  highestNumberForm = document.getElementById('highestNumberForm'),
  guessedNumberForm = document.getElementById('guessedNumberForm'),
  newGameButton = document.getElementById('newGameButton');

const highestNumberCheck = function () {
  highestNumber = parseInt(document.getElementById('highestNumberInput').value);

  if (highestNumber > 0) {
    highestNumberForm.style.display = 'none';
    guessedNumberForm.style.display = 'block';
    displayQuestion('Melyik számra gondoltam?');
    displayMessage('');
    randomNumber = Math.floor(Math.random() * highestNumber) + 1;
    document.getElementById('guessedNumberInput').focus();
  }

  if (highestNumber < 1 || !Number.isInteger(highestNumber)) {
    displayMessage('Egynél nagyobb <b>számot</b> kérek.');
    document.getElementById('message').innerHTML =
      'Egynél nagyobb <b>számot</b> kérek.';
    document.getElementById('highestNumberInput').value = '';
    document.getElementById('highestNumberInput').focus();
  }
};

const guessedNumberCheck = function () {
  guessedNumber = parseInt(document.getElementById('guessedNumberInput').value);

  if (guessedNumber === randomNumber) {
    guesses++;
    displayMessage(`Gratulálok! A szám, amire gondoltam ${randomNumber} volt!
    <br> Találgatásaid száma: ${guesses}`);
    newGameButton.style.display = 'inline-block';
    document.getElementById('guessedNumberInput').disabled = true;
    document.getElementById('guessButton').disabled = true;
  } else if (guessedNumber > randomNumber && guessedNumber <= highestNumber) {
    guesses++;
    displayMessage(`A szám nem ${guessedNumber}. Kisebb számra gondoltam.
    <br> Találgatásaid száma: ${guesses}`);
  } else if (guessedNumber < randomNumber && guessedNumber > 0) {
    guesses++;
    displayMessage(`A szám nem ${guessedNumber}. Nagyobb számra gondoltam.
    <br> Találgatásaid száma: ${guesses}`);
  } else {
    guesses++;
    displayMessage(`A kitalálandó szám 1 és ${highestNumber} között van.
    <br> Találgatásaid száma: ${guesses}`);
  }
  document.getElementById('guessedNumberInput').value = '';
  document.getElementById('guessedNumberInput').focus();
};
