const board = document.querySelector('.playtable');
const cell = document.querySelector('.playcell');
const newGameButton = document.querySelector('.button_newgame');
let movePlayer = document.querySelector('.move');
let players = ['X', '0'];
let currentPlayerIndex;

function startGame() {
  currentPlayerIndex = Math.floor(Math.random() * players.length);
  movePlayer.textContent = `Ход игрока: ${players[currentPlayerIndex]}`;
}

startGame();

board.addEventListener('click', (evt) => {

if (evt.target.dataset.blocked == 'true') {
  alert('Уже сходили сюда, кретин')
}
else {
  evt.target.textContent = players[currentPlayerIndex];
  switchPlayer();
}
evt.target.dataset.blocked = 'true';
console.log(evt.target.textContent);


});

newGameButton.addEventListener('click', () => console.clear())

function switchPlayer() {

  if (currentPlayerIndex === 0) {
    currentPlayerIndex = 1;
  } else {
    currentPlayerIndex = 0;
  }

  movePlayer.textContent = `Ход игрока: ${players[currentPlayerIndex]}`;
}