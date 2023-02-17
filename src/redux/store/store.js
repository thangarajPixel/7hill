import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/allMenu";
import homeCategoryReducer from "../features/homeCategory";
import institutionalCategoryReducer from "../features/institutionalCategory";
import loaderReducer from "../features/loader";

export const store = configureStore({
  reducer: {
    allMenu: categoryReducer,
    homeCategory: homeCategoryReducer,
    institutionalCategory: institutionalCategoryReducer,
    loader: loaderReducer,
  },
});
