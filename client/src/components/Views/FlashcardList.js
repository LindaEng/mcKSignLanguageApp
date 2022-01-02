import React, { useEffect,useState } from 'react';

const FlashcardList = () => {
	const [alphabets,setAlphabets] =useState([])
	
	useEffect(() => {
		const url = `http://localhost:4000/alphabets`;
		

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				setAlphabets(json)
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<h1>{alphabets.map(alphabet=><p>{alphabet.description}</p>)}</h1>
		</>
	);
};

export default FlashcardList;
