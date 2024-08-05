import { createSlice } from '@reduxjs/toolkit';

export const recipeListSlice = createSlice({
  
  name: 'recipeList',
  initialState: {
    recipeList: [],
  },
  reducers: {
    createlist: (state, action) => {
      // console.log("PAYLOAD: ", action.payload)
      const recipeList = action.payload
      return {
        ...state,
        recipeList
      }
    },
  },
});

export const { createlist } = recipeListSlice.actions;

export default recipeListSlice.reducer;
