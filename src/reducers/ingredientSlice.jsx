import { createSlice } from '@reduxjs/toolkit';

export const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState:{
        ingredient:"",
    },
    reducers:{
        setIngredient:(state, payload) =>{
            const [ingredient]= payload
            return {
                ...state,
                ingredient,
            }
        }
    }

})


export const {setIngredient} = ingredientSlice.actions

export default ingredientSlice.reducer;