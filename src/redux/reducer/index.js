import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";

const allReducer = combineReducers({ category: categoryReducer })

export default allReducer;
