import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, nameChange }) => {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	const onEditClick = () => {
		setIsEditing((prevEditing) => !prevEditing);
	};

	const handleChange = (event) => {
		setPlayerName(event?.target?.value);
		nameChange(symbol, event?.target?.value);
	};

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{isEditing && (
					<input
						type='text'
						required
						defaultValue={initialName}
						onInput={handleChange}
					/>
				)}
				{!isEditing && <span className='player-name'>{playerName}</span>}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={onEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
};

export default Player;
