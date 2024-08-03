import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "./slice"

const store = configureStore({ 
    reducer: {
        ingredients: ingredientReducer
    }
})