import { CartItem, ShippingAddress } from "redux/cart/types";
import { LS_TOKEN_VAR } from "./api";

export const LS_CART_ITEMS_VAR = "cart-items";
export const LS_CART_SHIPPING_ADDRESS_VAR = "cart-shipping-address";

export const setCartItems = (cart: CartItem[]) => {
  localStorage.setItem(LS_CART_ITEMS_VAR, JSON.stringify(cart));
};

export const removeCartItems = () => {};

export const setShippingAddress = (address: ShippingAddress) => {
  localStorage.setItem(LS_CART_SHIPPING_ADDRESS_VAR, JSON.stringify(address));
};

export const cartItems = localStorage.getItem(LS_CART_ITEMS_VAR)
  ? JSON.parse(localStorage.getItem(LS_CART_ITEMS_VAR)!)
  : [];
export const token = localStorage.getItem(LS_TOKEN_VAR) ? localStorage.getItem(LS_TOKEN_VAR)! : "";
export const address = localStorage.getItem(LS_CART_SHIPPING_ADDRESS_VAR)
  ? JSON.parse(localStorage.getItem(LS_CART_SHIPPING_ADDRESS_VAR)!)
  : null;
