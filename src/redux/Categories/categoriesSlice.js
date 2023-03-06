import createSlice from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    status: 'Under construction',
  },
  reducers: {
    setStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});
export const { setStatus } = categoriesSlice.actions;
