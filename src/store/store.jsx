// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';

// import recipeReducer from '../reducers/recipeSlice'
import recipeListSlice from '../reducers/recipeListSlice';
import userSlice from '../reducers/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipeList: recipeListSlice,
    user: userSlice,
    // recipe: recipeReducer,
  },
});
