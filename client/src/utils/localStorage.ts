import { CartItem, PaymentMethod, ShippingAddress } from "redux/cart/types";
import { LS_TOKEN_VAR } from "./api";

export const LS_CART_ITEMS_VAR = "cart-items";
export const LS_CART_SHIPPING_ADDRESS_VAR = "cart-shipping-address";
export const LS_CART_PAYMENT_METHOD_VAR = "cart-payment-method";

export const setCartItems = (cart: CartItem[]) => {
  localStorage.setItem(LS_CART_ITEMS_VAR, JSON.stringify(cart));
};

export const removeCartItems = () => {};

export const setShippingAddress = (address: ShippingAddress) => {
  localStorage.setItem(LS_CART_SHIPPING_ADDRESS_VAR, JSON.stringify(address));
};

export const setPaymentMethod = (method: PaymentMethod) => {
  localStorage.setItem(LS_CART_PAYMENT_METHOD_VAR, method);
};

export const cartItems = JSON.parse(localStorage.getItem(LS_CART_ITEMS_VAR)!) || [];
export const token = localStorage.getItem(LS_TOKEN_VAR) || "";
export const paymentMethod: any = localStorage.getItem(LS_CART_PAYMENT_METHOD_VAR) || "";
export const address = JSON.parse(localStorage.getItem(LS_CART_SHIPPING_ADDRESS_VAR)!) || null;
