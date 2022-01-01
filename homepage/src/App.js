
import React, {useState} from 'react';
import FlashcardList from './components/FlashcardList'
import './App.css';

function App() {
	const [cards, setCards] = useState(SAMPLE_CARDS);

	return <FlashcardList flashcards={cards} />;
}

const SAMPLE_CARDS = [
	{
		id: 1,
		question: 'Capital of France',
		answer: 'Paris',
		options: ['London', 'Paris', 'Barcelona'],
	},
	{
		id: 2,
		question: 'Capital of England',
		answer: 'London',
		options: ['London', 'Paris', 'Barcelona'],
	},
	{
		id: 3,
		question: 'whats my name?',
		answer: 'Ayden',
		options: ['Michael', 'Simon', 'Ayden'],
	},
];

export default App;
