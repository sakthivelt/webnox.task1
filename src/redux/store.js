import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rooteReducer from "./rooteReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rooteReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
