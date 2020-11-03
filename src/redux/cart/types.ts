export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_FAIL = "CART_FAIL";

export interface CartState {
  items: CartItem[];
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

// Cart Actions
interface CartItemAdd {
  type: typeof CART_ADD_ITEM;
  payload: CartItem; //
}
interface CartItemRemove {
  type: typeof CART_REMOVE_ITEM;
  payload: any; //
}

export type CartActionTypes = CartItemAdd | CartItemRemove;
