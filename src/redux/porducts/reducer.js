import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

let initial = { data: [], error: "", status: "" };

export function productReducer(state = initial, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, status: "loading", error: "" };
    case GET_PRODUCTS_FAILURE:
      return { ...state, data: [], status: "error", error: action.payload };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, status: "success", error: "", data: action.payload };

    default:
      return state;
  }
}
