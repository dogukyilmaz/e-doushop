export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";

export const CART_ADD_SHIPPING_ADDRESS = "CART_ADD_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";

export interface CartState {
  items: CartItem[];
  shippingAddress?: ShippingAddress;
  paymentMethod?: PaymentMethod;
  isLoading?: boolean;
  error?: any;
}

export interface CartItem {
  product: string;
  name: string;
  image: string;
  price: number;
  stockCount: number;
  quantity: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  zipcode: string;
  country: string;
}

export enum PaymentMethod {
  PAYPAL = "PayPal",
  STRIPE = "Stripe",
  OTHER = "Other",
}

// Cart Actions
interface CartItemAdd {
  type: typeof CART_ADD_ITEM;
  payload: CartItem;
}

interface CartItemRemove {
  type: typeof CART_REMOVE_ITEM;
  payload: string | any;
}

interface CartAddShippingAddress {
  type: typeof CART_ADD_SHIPPING_ADDRESS;
  payload: ShippingAddress;
}

interface CartSetPaymentMethod {
  type: typeof CART_SAVE_PAYMENT_METHOD;
  payload: PaymentMethod;
}

export type CartActionTypes = CartItemAdd | CartItemRemove | CartAddShippingAddress | CartSetPaymentMethod;
