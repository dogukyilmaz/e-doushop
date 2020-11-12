import { Dispatch } from "redux";
import API from "utils/api";
import * as cartTypes from "redux/cart/types";
import { AppThunk } from "redux/store";
import { setCartItems, setShippingAddress } from "utils/localStorage";

export const addItemCart = (id: string, qty: number): AppThunk => async (
  dispatchEvent: Dispatch<cartTypes.CartActionTypes>,
  getState
) => {
  const { data } = await API.get(`/products/${id}`);

  dispatchEvent({
    type: cartTypes.CART_ADD_ITEM,
    payload: {
      product: data.data._id,
      name: data.data.name,
      image: data.data.image,
      price: data.data.price,
      stockCount: data.data.stockCount,
      quantity: qty,
    },
  });

  setCartItems(getState().cart.items);
};

export const removeItemCart = (id: string): AppThunk => async (
  dispatchEvent: Dispatch<cartTypes.CartActionTypes>,
  getState
) => {
  dispatchEvent({
    type: cartTypes.CART_REMOVE_ITEM,
    payload: id,
  });

  setCartItems(getState().cart.items);
};

export const saveShippingAddress = (address: cartTypes.ShippingAddress): AppThunk => async (
  dispatchEvent: Dispatch<cartTypes.CartActionTypes>
) => {
  dispatchEvent({
    type: cartTypes.CART_ADD_SHIPPING_ADDRESS,
    payload: address,
  });

  setShippingAddress(address);
};
