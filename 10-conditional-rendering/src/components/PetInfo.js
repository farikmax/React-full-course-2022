//--------------------------------------------------v.1
// function PetInfo(props) {
// 	const { animal, age, hasPet } = props;
// 	const text = hasPet ? `My ${animal} is ${age} years old` : "I Don't have an animal";

// 	return <h1>{text}</h1>;
// }

// export default PetInfo;

//--------------------------------------------------v.2
// function PetInfo(props) {
// 	const { animal, age, hasPet } = props;

// 	return hasPet ? <h1>{`My ${animal} is ${age} years old`}</h1> : <h1>I Don't have an animal</h1>;
// }

// export default PetInfo;

//--------------------------------------------------v.3
function PetInfo(props) {
	const { animal, age, hasPet } = props;

	return hasPet ? (
		<h1>
			(My {animal} is {age} years old)
		</h1>
	) : (
		<h2>I Don't have an animal</h2>
	);
}

export default PetInfo;
