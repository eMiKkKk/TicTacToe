const board = document.querySelector('.playtable');
const cell = document.querySelector('.playcell');
const newGameButton = document.querySelector('.button_newgame');
let currentPlayer = 'X';

board.addEventListener('click', (evt) => {

if (evt.target.dataset.blocked == 'true') {
  alert('Уже сходили сюда, кретин')
}
else {
  evt.target.innerText = currentPlayer;
}
evt.target.dataset.blocked = 'true';
console.log(evt.target.textcontent);


});

newGameButton.addEventListener('click', () => console.clear())