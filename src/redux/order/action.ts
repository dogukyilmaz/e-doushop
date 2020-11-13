import { Dispatch } from "redux";
import API from "utils/api";
import * as orderTypes from "redux/order/types";
import { AppThunk } from "redux/store";

export const createOrder = (order: orderTypes.Order): AppThunk => async (
  dispatchEvent: Dispatch<orderTypes.OrderActionTypes>
) => {
  try {
    dispatchEvent({
      type: orderTypes.ORDER_CREATE_REQUEST,
    });

    const { data } = await API.post("/orders", order);

    console.log(data, "d");

    dispatchEvent({
      type: orderTypes.ORDER_CREATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatchEvent({ type: orderTypes.ORDER_CREATE_FAIL, payload: error.response?.data });
  }
};
