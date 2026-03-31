const board = document.querySelector('.playtable');
const cell = document.querySelectorAll('.playcell');
const newGameButton = document.querySelector('.button_newgame');
let movePlayer = document.querySelector('.move');
let players = ['X', '0'];
let currentPlayerIndex;

function startGame() {
  currentPlayerIndex = Math.floor(Math.random() * players.length);
  movePlayer.textContent = `Ход игрока: ${players[currentPlayerIndex]}`;
}

startGame();


const winCombos = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];

let gameProcess = {
  firstPlayer: [],
  secondPlayer: []
}


function pushTurn(e) {

  if (currentPlayerIndex === 0) {
    gameProcess.firstPlayer.push(+e.target.dataset.index);
  }
  else {
  gameProcess.secondPlayer.push(+e.target.dataset.index);
  }
  console.log(gameProcess.firstPlayer, gameProcess.secondPlayer);
}


function checkWin(obj) {

  for (let key in winCombos) {

  const intersectionX = winCombos[key].filter(item => obj.firstPlayer.includes(item));
  const intersectionO = winCombos[key].filter(item => obj.secondPlayer.includes(item));

    if (intersectionX.length === 3 || intersectionO.length === 3) {
      endGame(gameProcess)
    }
  }
};

  function endGame(obj) {
    console.log('ПОБЕДА НАХУЙ!');
    alert(`Игрок ${players[currentPlayerIndex]} Победил!`);
    board.dataset.finished = 'true';
    obj.firstPlayer = []
    obj.secondPlayer = []
  }


board.addEventListener('click', (evt) => {

  if (board.dataset.finished == 'true') {
    alert('Игра окончена, дружок-пирожок.')
  }

  else if (evt.target.dataset.blocked == 'true') {
    alert('Уже сходили сюда, кретин')
  }
  else {
    evt.target.textContent = players[currentPlayerIndex];
    pushTurn(evt);
    checkWin(gameProcess);
    switchPlayer();
  }
  evt.target.dataset.blocked = 'true';
  console.log(evt.target.textContent);
  console.log(evt.target.dataset.index);


});

newGameButton.addEventListener('click', () => {
  startGame();
  clearBoard();
})

function switchPlayer() {

  if (currentPlayerIndex === 0) {
    currentPlayerIndex = 1;
  } else {
    currentPlayerIndex = 0;
  }

  movePlayer.textContent = `Ход игрока: ${players[currentPlayerIndex]}`;
}

function clearBoard() {
  gameProcess.firstPlayer.length = 0;
  gameProcess.secondPlayer.length = 0;

  cell.forEach(element => {
    element.textContent = '';
    element.dataset.blocked = 'false';
  });

  board.dataset.finished = 'false';
}
