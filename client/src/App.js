import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlashcardList from './components/Views/FlashcardList';
import Flashcards from './components/Views/Flashcards';
import Homepage from './components/Views/Homepage';
import Dictionary from './components/Views/Dictionary';
import TrainingRoom from './components/Views/Trainingroom';
import './App.css';

function App() {
	return (
		<Router>
			<nav className="nav">
				<Link to='/' className="links">Home</Link>
				<Link to='/FlashcardList' className="links">Flashcards List</Link>
				<Link to='/Dictionary' className="links">Dictionary</Link>
				<Link to='/TrainingRoom' className="links">Training Room</Link>
			</nav>
			<Routes>
				<Route path='/FlashcardList' element={<FlashcardList />} />
				<Route path='/Dictionary' element={<Dictionary/>}/>
				<Route path='/TrainingRoom' element={<TrainingRoom/>}/>

				<Route path='/' element={<Homepage />} />
			</Routes>
		</Router>
	);
}

export default App;
