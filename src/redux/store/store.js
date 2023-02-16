import { configureStore } from "@reduxjs/toolkit";
import  categoryReducer from "../features/category";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
