'use strict';

const formPreventdefault = document.getElementById('commandForm');
function handleForm(event) {
  event.preventDefault();
}
formPreventdefault.addEventListener('submit', handleForm);

let command,
  todosHtml = '';

const displayMessage = function (message) {
    document.getElementById('message').innerHTML = message;
  },
  updateTodosHtml = function () {
    todosHtml = '<p>Mai teendők</p><ol>';

    for (let todo of todosArray) {
      todosHtml += `
  <li>${todo}</li>
  `;
    }
    todosHtml += '</ol>';
    displayMessage(todosHtml);
  },
  todosArray = [
    'eleget dolgozni',
    'sokat tanulni',
    'kicsit biciklizni',
    'valamennyit társasozni',
  ];

const commandCheck = function () {
  command = document.getElementById('commandInput').value;

  if (command === 'open' || command === 'Open') {
    updateTodosHtml();
  } else if (
    command === 'add' ||
    command === 'Add' ||
    command === 'add ' ||
    command === 'Add ' ||
    command === 'remove' ||
    command === 'Remove'
  ) {
    displayMessage(`Hiányos parancs.`);
  } else if (command.includes('add ') || command.includes('Add ')) {
    todosArray.push(command.slice(4));
    updateTodosHtml();
  } else if (command.includes('remove ') || command.includes('Remove ')) {
    let elementToRemove = parseInt(command.slice(7)) - 1;
    if (
      isNaN(elementToRemove) ||
      elementToRemove < 0 ||
      elementToRemove > todosArray.length - 1
    ) {
      displayMessage(`Ilyen sorszámú elem nincsen.`);
    } else {
      todosArray.splice(elementToRemove, 1);
      updateTodosHtml();
    }
  } else if (command === 'close' || command === 'Close') {
    displayMessage('');
  } else if (command === 'party' || command === 'Party') {
    displayMessage(`
    <video loop id="video">
      <source src="party.mp4" type="video/mp4">
      <source src="party.ogg" type="video/ogg">
      Your browser does not support the video tag. :(
    </video>`);
    setTimeout(function () {
      document.getElementById('video').play();
    }, 0);
    // document.querySelector('video').muted = 'false';
  } else {
    displayMessage('Ez egy ismeretlen parancs.');
  }
  document.getElementById('commandInput').value = '';
  document.getElementById('commandInput').focus();
};
