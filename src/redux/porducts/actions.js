import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "./actionTypes";

export function getProducts() {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    return axios("https://fakestoreapi.com/products")
      .then((data) => {
        console.log(data);
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message });
        console.log(error.message);
      });
  };
}
