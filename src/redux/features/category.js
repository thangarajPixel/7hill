import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const categorySlice = createSlice({
  name: "category",
  initialState: { value: initialStateValue },
  reducers: {
    allMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { allMenu } = categorySlice.actions;

export default categorySlice.reducer;
