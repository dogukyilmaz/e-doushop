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

export const getOrderDetails = (id: string): AppThunk => async (
  dispatchEvent: Dispatch<orderTypes.OrderActionTypes>
) => {
  try {
    dispatchEvent({
      type: orderTypes.ORDER_DETAILS_REQUEST,
    });

    const { data } = await API.get(`/orders/${id}`);

    dispatchEvent({
      type: orderTypes.ORDER_DETAILS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatchEvent({ type: orderTypes.ORDER_DETAILS_FAIL, payload: error.response?.data });
  }
};

export const getAllOrders = (): AppThunk => async (dispatchEvent: Dispatch<orderTypes.OrderActionTypes>) => {
  try {
    dispatchEvent({
      type: orderTypes.GET_ALL_ORDERS_REQUEST,
    });

    const { data } = await API.get(`/orders`);

    dispatchEvent({
      type: orderTypes.GET_ALL_ORDERS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatchEvent({ type: orderTypes.GET_ALL_ORDERS_FAIL, payload: error.response?.data });
  }
};
