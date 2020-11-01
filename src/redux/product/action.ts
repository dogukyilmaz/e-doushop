import Axios from "axios";
import { Dispatch } from "redux";
import * as productTypes from "redux/product/types";
import { AppThunk } from "redux/store";

export const listProducts = (): AppThunk => async (dispatchEvent: Dispatch<productTypes.ProductActionTypes>) => {
  try {
    dispatchEvent({ type: productTypes.PRODUCTS_LIST_REQUEST });
    const { data } = await Axios.get(`/api/v1/products`);
    console.log(data, "action");
    if (data.success) {
      dispatchEvent({ type: productTypes.PRODUCTS_LIST_SUCCESS, payload: data.data });
    } else {
      dispatchEvent({ type: productTypes.PRODUCTS_LIST_FAIL, payload: data });
    }
  } catch (error) {
    dispatchEvent({ type: productTypes.PRODUCTS_LIST_FAIL, payload: error.response.data });
  }
};
