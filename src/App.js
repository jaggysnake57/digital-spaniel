// react
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home/Home';

//components
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
