import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  lastLogin: null,
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.lastLogin = action.payload.lastLogin;
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.lastLogin = null;
      state.userInfo = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
