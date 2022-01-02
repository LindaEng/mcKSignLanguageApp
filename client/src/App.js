import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlashcardList from './components/Views/FlashcardList';
import './App.css';

function App() {
	return (
		<Router>
    <Routes>
<Route path="/FlashcardList" element={<FlashcardList/>}/>
    </Routes>
    </Router>
	);
}

export default App;
