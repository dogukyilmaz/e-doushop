import * as cartTypes from "redux/cart/types";

const initialCartState: cartTypes.CartState = {
  items: [],
  isLoading: false,
  error: null,
};

export const cartReducer = (state = initialCartState, action: cartTypes.CartActionTypes): cartTypes.CartState => {
  const { type, payload } = action;

  switch (type) {
    case cartTypes.CART_ADD_ITEM:
      const isExist = state.items.find((p: cartTypes.CartItem) => p.product === payload.product);
      return {
        ...state,
        items: isExist
          ? state.items.map((p: cartTypes.CartItem) => (p.product === payload.product ? payload : p))
          : [...state.items, payload],
      };
    default:
      return { ...state };
    // case cartTypes.CART_REMOVE_ITEM:
    // case cartTypes.CART_FAIL:
  }
};
