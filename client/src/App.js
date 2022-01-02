import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlashcardList from './components/Views/FlashcardList';
import Flashcards from './components/Views/Flashcards';
import Homepage from './components/Views/Homepage';
import './App.css';

function App() {
	return (
		<Router>
			<nav className="nav">
				<Link to='/' className="links">Home</Link>
				<Link to='/FlashcardList' className="links">FlashFlashcards List</Link>
			</nav>
			<Routes>
				<Route path='/FlashcardList' element={<FlashcardList />} />

				<Route path='/' element={<Homepage />} />
			</Routes>
		</Router>
	);
}

export default App;
