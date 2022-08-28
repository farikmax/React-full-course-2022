import './App.css';
import PetInfo from './components/PetInfo';

function App() {
	return (
		<div className="App">
			{/* <PetInfo animal="cat" age="10" hasPet={true} /> // значение true можно опускать */}
			<PetInfo animal="cat" age="10" hasPet />
			<PetInfo animal="dog" age="7" hasPet={false} />
		</div>
	);
}

export default App;
