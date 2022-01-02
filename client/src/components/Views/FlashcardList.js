import React,{useEffect} from 'react'

const FlashcardList = () => {
    useEffect(() => {
			const url = `http://localhost:4000/alphabets`;

			const fetchData = async () => {
				try {
					const response = await fetch(url);
					const json = await response.json();
					console.log(json);
				} catch (error) {
					console.log('error', error);
				}
			};

			fetchData();
		}, []);
    
    
    return (
        <div>
            
        </div>
    )
}

export default FlashcardList
