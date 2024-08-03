import { createSlice } from '@reduxjs/toolkit';

export const recipeListSlice = createSlice({
    name: 'recipeList',
    initialState:{
        recipeList:[],
    },
    reducers:{
        createList:(state, payload) =>{
            const [recipeList]= payload
            return {
                ...state,
                recipeList
            }
        }
    }

})

export const {createList} = recipeListSlice.actions

export default recipeListSlice.reducer;