// categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    availableCategories: ['Electronics', 'Clothing', 'Home'],
    selectedCategories: [],
  },
  reducers: {
    selectCategory(state, action) {
      state.selectedCategories.push(action.payload);
    },
    deselectCategory(state, action) {
      state.selectedCategories = state.selectedCategories.filter(
        (category) => category !== action.payload
      );
    },
  },
});

export const { selectCategory, deselectCategory } = categoriesSlice.actions;

// export default categoriesSlice.reducer;
export default categoriesSlice;
