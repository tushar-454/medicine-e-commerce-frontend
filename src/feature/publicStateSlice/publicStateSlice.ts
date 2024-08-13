import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  isModalOpen: false,
};

const publicStateSlice = createSlice({
  name: 'publicState',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleSidebar, toggleModal } = publicStateSlice.actions;
export default publicStateSlice.reducer;
