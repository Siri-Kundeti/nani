const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentPlayer = 'X';
const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

function printBoard() {
  console.log(`
   ${board[0]} | ${board[1]} | ${board[2]}
  -----------
   ${board[3]} | ${board[4]} | ${board[5]}
  -----------
   ${board[6]} | ${board[7]} | ${board[8]}
  `);
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] !== ' ' && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }

  return false;
}

function isBoardFull() {
  return !board.includes(' ');
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function playTurn() {
  rl.question(`Player ${currentPlayer}, enter your move (0-8): `, (input) => {
    const move = parseInt(input);

    if (isNaN(move) || move < 0 || move > 8 || board[move] !== ' ') {
      console.log('Invalid move. Try again.');
      playTurn();
    } else {
      board[move] = currentPlayer;
      printBoard();

      if (checkWinner()) {
        console.log(`Player ${currentPlayer} wins!`);
        rl.close();
      } else if (isBoardFull()) {
        console.log("It's a draw!");
        rl.close();
      } else {
        switchPlayer();
        playTurn();
      }
    }
  });
}

console.log('Tic Tac Toe Game');
printBoard();
playTurn();
