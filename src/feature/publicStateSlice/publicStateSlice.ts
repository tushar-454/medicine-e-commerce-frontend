import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  isModalOpen: false,
  isOrderModalOpen: false,
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
    toggleOrder: (state) => {
      state.isOrderModalOpen = !state.isOrderModalOpen;
    },
  },
});

export const { toggleSidebar, toggleModal, toggleOrder } =
  publicStateSlice.actions;
export default publicStateSlice.reducer;
