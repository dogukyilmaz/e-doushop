import { CartItem } from "redux/cart/types";

export const LS_CART_ITEMS_VAR = "cart-items";

export const setCartItems = (cart: CartItem[]) => {
  localStorage.setItem(LS_CART_ITEMS_VAR, JSON.stringify(cart));
};

export const removeCartItems = () => {};
