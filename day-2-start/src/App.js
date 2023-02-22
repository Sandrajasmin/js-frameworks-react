import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
	return (
		<div className="App">
			<Heading name="Jack" age="31" color="purple" fontSize="40"/>
      <Paragraph text="smart guy" color="white" fontSize="20" />
      
      <Heading name="Sara" age="15" color="blue" fontSize="63"/>
      <Paragraph text="nerd" color="yellow" fontSize="18" />
      
		</div>
	);
}

export default App;
