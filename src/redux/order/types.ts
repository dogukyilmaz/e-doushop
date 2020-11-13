import { CartItem, PaymentMethod, ShippingAddress } from "redux/cart/types";

export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";

export interface OrderState {
  order: Order | null;
  isLoading?: boolean;
  error?: any;
  success?: boolean;
}

export interface Order {
  _id?: string;
  orderItems: CartItem[];
  shippingAddress?: ShippingAddress;
  paymentMethod?: PaymentMethod;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  cartFee: number;
}

// Order Actions
interface OrderCreateRequest {
  type: typeof ORDER_CREATE_REQUEST;
  payload?: null;
}

interface OrderCreateSuccess {
  type: typeof ORDER_CREATE_SUCCESS;
  payload: Order;
}

interface OrderCreateFail {
  type: typeof ORDER_CREATE_FAIL;
  payload: any;
}

export type OrderActionTypes = OrderCreateRequest | OrderCreateSuccess | OrderCreateFail;
