import * as orderTypes from "redux/order/types";

const initialOrderState: orderTypes.OrderState = {
  order: null,
  isLoading: false,
  error: null,
};

export const orderReducer = (state = initialOrderState, action: orderTypes.OrderActionTypes): orderTypes.OrderState => {
  const { type, payload } = action;

  switch (type) {
    case orderTypes.ORDER_CREATE_REQUEST:
      return {
        ...initialOrderState,
        isLoading: true,
      };
    case orderTypes.ORDER_CREATE_SUCCESS:
      return {
        ...initialOrderState,
        success: true,
        order: payload,
      };
    case orderTypes.ORDER_CREATE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return { ...state };
  }
};
