import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const institutionalCategorySlice = createSlice({
  name: "institutionalCategory",
  initialState: { value: initialStateValue },
  reducers: {
    institutionalCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { institutionalCategory } = institutionalCategorySlice.actions;

export default institutionalCategorySlice.reducer;
