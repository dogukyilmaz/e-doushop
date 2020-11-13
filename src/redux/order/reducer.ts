import * as orderTypes from "redux/order/types";

const initialOrderState: orderTypes.OrderState = {
  order: null,
  isLoading: false,
  error: null,
  userOrders: null,
};

export const orderReducer = (state = initialOrderState, action: orderTypes.OrderActionTypes): orderTypes.OrderState => {
  const { type, payload } = action;

  switch (type) {
    case orderTypes.ORDER_CREATE_REQUEST:
    case orderTypes.ORDER_DETAILS_REQUEST:
    case orderTypes.GET_ALL_ORDERS_REQUEST:
      return {
        ...initialOrderState,
        isLoading: true,
      };
    case orderTypes.ORDER_CREATE_SUCCESS:
    case orderTypes.ORDER_DETAILS_SUCCESS:
      return {
        ...initialOrderState,
        success: true,
        order: payload,
      };
    case orderTypes.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        userOrders: payload,
      };
    case orderTypes.ORDER_CREATE_FAIL:
    case orderTypes.ORDER_DETAILS_FAIL:
    case orderTypes.GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return { ...state };
  }
};
