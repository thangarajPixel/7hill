import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const filterProductsSlice = createSlice({
  name: "filterProducts",
  initialState: { value: initialStateValue },
  reducers: {
    filterProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { filterProducts } = filterProductsSlice.actions;

export default filterProductsSlice.reducer;
