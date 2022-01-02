import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async () => {
        const response = await fetch('https://drive.google.com/drive/folders/1IQZUaoIvSNN-z1-MfYnREnOlW5CWT6qO?usp=sharing');
        const formattedResponse = await response.json();
        return formattedResponse;
    }
)

export const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState: {
        photos: [],
        isLoading: false,
    },
    extraReducers: { //external action while utilizing thunk 
    [getPhotos.pending]: (state) => {
        state.isLoading = true; // detetermines what you want to do while loading the api 
      },
      [getPhotos.fulfilled]: (state, action) => {
          state.photos = action.payload;
          state.isLoading = false; // sets the payload from api call into photo state in the dictionaryslice variable 
      },
      [getPhotos.rejected]: (state) => {
          state.isLoading = false;
      }
    }
});


export default dictionarySlice.reducer;