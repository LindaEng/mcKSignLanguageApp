import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { dictionaryReducer } from './dictonaryState';


const store = configureStore({   //created a store variable & gave it a property in an empty object
    reducer: {
       dictionary: dictionaryReducer //identifies reducer is save inside our store
    } 
});

ReactDOM.render(
   <Provider store={store}>
     <App /> 
    </Provider>,
    document.getElementById('root')
);
