import { createSlice } from '@reduxjs/toolkit';

export const recipeListSlice = createSlice({
  
  name: 'recipeList',
  initialState: {
    recipeList: [],
  },
  reducers: {
    create_list: (state, payload) => {
      
      const recipeList = payload
      return {
        ...state,
        recipeList
      }
    },
  },
});

export const { create_list } = recipeListSlice.actions;

export default recipeListSlice.reducer;
