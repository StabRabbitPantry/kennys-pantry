// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // recipe: recipeReducer,
    // ingredient: ingredientReducer,
  },
});