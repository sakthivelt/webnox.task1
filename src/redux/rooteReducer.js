import { combineReducers } from "redux";
import { productReducer } from "./porducts/reducer";

const rooteReducer = combineReducers({ productReducer });

export default rooteReducer;
