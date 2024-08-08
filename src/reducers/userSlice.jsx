import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id: '',
    username: '',
    favourites: [],
  },
  reducers: {
    createUser: (state, action) => {
      const { _id, username, favourites } = action.payload;
      state._id = _id;
      state.username = username;
      state.favourites = favourites;
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;