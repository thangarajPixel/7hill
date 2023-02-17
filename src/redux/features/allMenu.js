import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const allMenuSlice = createSlice({
  name: "allMenu",
  initialState: { value: initialStateValue },
  reducers: {
    allMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { allMenu } = allMenuSlice.actions;

export default allMenuSlice.reducer;
