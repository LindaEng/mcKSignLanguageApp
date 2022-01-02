import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './dictonaryState';
import Navbar from './Components/Navbar/Navbar'
import './App.css';


function App() {
  const dispatch = useDispatch(); //redux hook that calls action
  const photos = useSelector(state => state.dictionary.photos);


  useEffect(() => {
    dispatch(getPhotos()); // called api to pass in dispatch 
  }, [dispatch]);
console.log(photos);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
