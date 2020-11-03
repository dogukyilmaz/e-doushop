import * as cartTypes from "redux/cart/types";

const initialCartState: cartTypes.CartState = {
  items: [],
};

export const cartReducer = (state = initialCartState, action: cartTypes.CartActionTypes): cartTypes.CartState => {
  const { type, payload } = action;

  switch (type) {
    case cartTypes.CART_ADD_ITEM:
      const isExist = state.items.find((p: cartTypes.CartItem) => p.product === payload.product);
      return {
        ...state,
        items: isExist
          ? state.items.map((item: cartTypes.CartItem) => (item.product === payload.product ? payload : item))
          : [...state.items, payload],
      };
    case cartTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item: cartTypes.CartItem) => item.product !== payload),
      };
    default:
      return { ...state };
  }
};
