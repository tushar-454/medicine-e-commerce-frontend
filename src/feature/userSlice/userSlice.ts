import { userLogin } from '@/api/user';
import { InitialStateType } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoggedIn = false;
      });
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
