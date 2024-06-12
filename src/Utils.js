import { WINNING_COMBINATIONS } from './components/winning-combination';

export const initalBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export const deriveActivePlayer = (gameRecords) => {
	let currentPlayer = 'X';

	if (gameRecords.length > 0 && gameRecords[0].player === 'X') {
		currentPlayer = 'O';
	}

	return currentPlayer;
};

export const getWinner = (gameBoard) => {
	let winner = null;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquare = gameBoard[combination[0].row][combination[0].column];
		const secondSquare = gameBoard[combination[1].row][combination[1].column];
		const thirdSquare = gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquare &&
			firstSquare === secondSquare &&
			firstSquare === thirdSquare
		) {
			winner = firstSquare;
		}
	}

	return winner;
};
