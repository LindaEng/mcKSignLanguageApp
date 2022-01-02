const Data = () => {
	const loadData = async () => {
		try {
			const url = `http://localhost:3000/alphabets`;
			const getData = await fetch(url);
			const data = await getData.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};
	loadData();
	
};

export default Data;
