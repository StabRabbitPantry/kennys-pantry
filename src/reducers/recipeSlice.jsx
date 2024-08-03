import { createSlice } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState:{
        label:"",
        ingredients:"",
        imageURL:"",
        recipeURL:"",
    },
    reducers:{
        createCard:(state, payload) =>{
            const [label,ingredients,imageURL,recipeURL] = payload
            return {
                ...state,
                label,
                ingredients,
                imageURLingredients,
                recipeURLingredients,
            }
        }
    }
})

export const {createCard} = recipeSlice.actions

export default recipeSlice.reducer;