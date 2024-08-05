// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';

// import recipeReducer from '../reducers/recipeSlice'
import recipeListSlice from '../reducers/recipeListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipeList: recipeListSlice,
    // recipe: recipeReducer,
  },
});
