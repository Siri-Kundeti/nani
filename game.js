<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe Game</title>
    <style>
        /* Add your CSS styles here */
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-gap: 5px;
        }

        .cell {
            width: 100px;
            height: 100px;
            font-size: 24px;
            text-align: center;
            vertical-align: middle;
            background-color: #f0f0f0;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Tic-Tac-Toe Game</h1>
    <div class="board" id="board">
        <!-- The game board will be generated dynamically using JavaScript -->
    </div>
    <p id="result"></p>

    <script>
        // Add your JavaScript code here
        const board = document.getElementById('board');
        const result = document.getElementById('result');
        let currentPlayer = 'X';
        let gameOver = false;

        function checkWinner() {
            const cells = document.querySelectorAll('.cell');
            const winningCombos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            for (const combo of winningCombos) {
                const [a, b, c] = combo;
                if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                    result.textContent = `${currentPlayer} wins!`;
                    gameOver = true;
                    return;
                }
            }

            if ([...cells].every(cell => cell.textContent)) {
                result.textContent = "It's a draw!";
                gameOver = true;
            }
        }

        function handleClick(e) {
            if (!gameOver && !e.target.textContent) {
                e.target.textContent = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                checkWinner();
            }
        }

        function createBoard() {
            for (let i = 0; i < 9; i++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.addEventListener('click', handleClick);
                board.appendChild(cell);
            }
        }

        createBoard();
    </script>
</body>
</html>
