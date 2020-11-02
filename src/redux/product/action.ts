import Axios from "axios";
import { Dispatch } from "redux";
import * as productTypes from "redux/product/types";
import { AppThunk } from "redux/store";

// TODO: Check for structure try/catch or if/else
export const listProducts = (): AppThunk => async (dispatchEvent: Dispatch<productTypes.ProductListActionTypes>) => {
  try {
    dispatchEvent({ type: productTypes.PRODUCT_LIST_REQUEST });
    const { data } = await Axios.get(`/api/v1/products`);
    console.log(data, "action");
    if (data.success) {
      dispatchEvent({ type: productTypes.PRODUCT_LIST_SUCCESS, payload: data.data });
    } else {
      dispatchEvent({ type: productTypes.PRODUCT_LIST_FAIL, payload: data });
    }
  } catch (error) {
    dispatchEvent({ type: productTypes.PRODUCT_LIST_FAIL, payload: error.response.data });
  }
};

// TODO: Check for structure try/catch or if/else
export const listProductDetails = (id: string): AppThunk => async (
  dispatchEvent: Dispatch<productTypes.ProductDetailsActionTypes>
) => {
  try {
    dispatchEvent({ type: productTypes.PRODUCT_DETAILS_REQUEST });
    const { data } = await Axios.get(`/api/v1/products/${id}`);
    console.log(data, "action");
    if (data.success) {
      dispatchEvent({ type: productTypes.PRODUCT_DETAILS_SUCCESS, payload: data.data });
    } else {
      dispatchEvent({ type: productTypes.PRODUCT_DETAILS_FAIL, payload: data });
    }
  } catch (error) {
    dispatchEvent({ type: productTypes.PRODUCT_DETAILS_FAIL, payload: error.response.data });
  }
};
