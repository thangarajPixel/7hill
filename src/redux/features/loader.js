import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const loaderSlice = createSlice({
  name: "loader",
  initialState: { value: initialStateValue },
  reducers: {
    setLoader: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
