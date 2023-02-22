import logo from "./logo.svg";
import "./App.css";
import Headings from  "./components/heading"
import Paragraph from "./components/paragraph";
import Listeditems from "./components/listeditems";

function App() {
	return (
		<div className="App container">
			<Headings/>
      <Paragraph/>
      <Listeditems/>
      
			
		</div>
	);
}

export default App;
