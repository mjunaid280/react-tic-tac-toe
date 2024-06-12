export default function Log({ gameRecords }) {
	return (
		<ol id='log'>
			{gameRecords.map((record) => {
				return (
					<li key={`${record.row}${record.col}`}>
						Player {record.player} selected at row {record.row} & col{' '}
						{record.col}
					</li>
				);
			})}
		</ol>
	);
}
