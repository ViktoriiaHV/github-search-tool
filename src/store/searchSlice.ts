import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  query: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateQuery(state, action) {
      const query = action.payload;
      state.query = query;
      state.page = 1;
    },
    nextPage(state) {
      state.page++;
    }
  }
})

export const { updateQuery } = searchSlice.actions
export default searchSlice.reducer