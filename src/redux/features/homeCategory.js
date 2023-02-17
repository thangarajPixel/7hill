import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const homeCategorySlice = createSlice({
  name: "homeCategory",
  initialState: { value: initialStateValue },
  reducers: {
    homeCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { homeCategory } = homeCategorySlice.actions;

export default homeCategorySlice.reducer;
