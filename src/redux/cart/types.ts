export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";

export const CART_ADD_SHIPPING_ADDRESS = "CART_ADD_SHIPPING_ADDRESS";
export const CART_REMOVE_SHIPPING_ADDRESS = "CART_REMOVE_SHIPPING_ADDRESS";

export interface CartState {
  items: CartItem[];
  shippingAddress?: ShippingAddress;
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

interface CartRemoveShippingAddress {
  type: typeof CART_REMOVE_SHIPPING_ADDRESS;
  payload?: string | any;
}

export type CartActionTypes = CartItemAdd | CartItemRemove | CartAddShippingAddress | CartRemoveShippingAddress;
