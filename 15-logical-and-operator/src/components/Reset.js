const buttonStyle = { backgroundColor: 'lightgreen' };

function Reset({ onClick }) {
	return (
		<div>
			<button onClick={onClick} style={buttonStyle}>
				Reset
			</button>
		</div>
	);
}

export default Reset;
