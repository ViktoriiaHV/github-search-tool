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
    },
    nextPage(state, action) {
      const query = action.payload;
      if(query.trim().length < 3) {
        return;
      }
      state.query = query;
    }
  }
})

export const { updateQuery } = searchSlice.actions
export default searchSlice.reducer