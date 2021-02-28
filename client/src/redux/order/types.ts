import { CartItem, PaymentMethod, ShippingAddress } from "redux/cart/types";

export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";

export const GET_ALL_ORDERS_REQUEST = "GET_ALL_ORDERS_REQUEST";
export const GET_ALL_ORDERS_SUCCESS = "GET_ALL_ORDERS_SUCCESS";
export const GET_ALL_ORDERS_FAIL = "GET_ALL_ORDERS_FAIL";

export interface OrderState {
  order: Order | null;
  lastOrderId?: string | null;
  isLoading?: boolean;
  error?: any;
  success?: boolean;
  userOrders?: Order[] | null;
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

interface OrderDetailsRequest {
  type: typeof ORDER_DETAILS_REQUEST;
  payload?: null;
}

interface OrderDetailsSuccess {
  type: typeof ORDER_DETAILS_SUCCESS;
  payload: Order;
}

interface OrderDetailsFail {
  type: typeof ORDER_DETAILS_FAIL;
  payload: any;
}

interface GetAllOrdersRequest {
  type: typeof GET_ALL_ORDERS_REQUEST;
  payload?: null;
}

interface GetAllOrdersSuccess {
  type: typeof GET_ALL_ORDERS_SUCCESS;
  payload: Order[] | [];
}

interface GetAllOrdersFail {
  type: typeof GET_ALL_ORDERS_FAIL;
  payload: any;
}

export type OrderActionTypes =
  | OrderCreateRequest
  | OrderCreateSuccess
  | OrderCreateFail
  | OrderDetailsRequest
  | OrderDetailsSuccess
  | OrderDetailsFail
  | GetAllOrdersRequest
  | GetAllOrdersSuccess
  | GetAllOrdersFail;
