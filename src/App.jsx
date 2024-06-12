import Player from './components/Player';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import Log from './components/Log';
import { useState } from 'react';

import { initalBoard, deriveActivePlayer, getWinner } from './Utils';

const PLAYERS = {
	X: 'Player 1',
	O: 'Player 2',
};

function App() {
	const [allPlayers, setAllPlayers] = useState(PLAYERS);
	const [gameRecords, setGameRecords] = useState([]);

	const gameBoard = [...initalBoard.map((array) => [...array])];

	for (const record of gameRecords) {
		const { row, col, player } = record;
		gameBoard[row][col] = player;
	}

	const activePlayer = deriveActivePlayer(gameRecords);

	let winner = getWinner(gameBoard);

	const hasDraw = gameRecords.length === 9 && !winner;

	const handlePlayerChange = (rowIndex, colIndex) => {
		setGameRecords((prevGameRecords) => {
			const currentPlayer = deriveActivePlayer(prevGameRecords);

			const updatedGameRecords = [
				{ row: rowIndex, col: colIndex, player: currentPlayer },
				...prevGameRecords,
			];

			return updatedGameRecords;
		});
	};

	const handleRematch = () => {
		setGameRecords([]);
	};

	const handlePlayerDetails = (symbol, name) => {
		setAllPlayers((prev) => {
			return {
				...prev,
				[symbol]: name,
			};
		});
	};

	return (
		<main>
			<div id='game-container'>
				<ol
					id='players'
					className='highlight-player'
				>
					<Player
						initialName={PLAYERS.X}
						symbol='X'
						isActive={activePlayer === 'X'}
						nameChange={handlePlayerDetails}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol='O'
						isActive={activePlayer === 'O'}
						nameChange={handlePlayerDetails}
					/>
				</ol>
				<GameBoard
					onSelectSquare={handlePlayerChange}
					gameBoard={gameBoard}
				/>
			</div>
			{(winner || hasDraw) && (
				<GameOver
					winner={allPlayers?.[winner]}
					onRematchClick={handleRematch}
				/>
			)}
			<Log gameRecords={gameRecords} />
		</main>
	);
}

export default App;
