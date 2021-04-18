'use strict';

function ticTacToeWinChecker(board) {
	const boardCells = [...board[0], ...board[1], ...board[2]];
	const isEmptySpots = board.some(row => row.some(cell => cell === 0));
	const winnerRows = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ];

	const isXWinner = winnerRows.some((item, i) => {
		return item.every((cell) => boardCells[cell - 1] === 1);
	});

	const isOWinner = winnerRows.some((item, i) => {
		return item.every((cell) => boardCells[cell - 1] === 2);
	});

	if (isXWinner) {
		return 1;
	}

	if (isOWinner) {
		return 2;
	}

	if (isEmptySpots) {
		return -1;
	}

	return 0;
}
