import Axios from "axios";
import { Dispatch } from "redux";
import * as cartTypes from "redux/cart/types";
import { AppThunk } from "redux/store";

export const addItemCart = (id: string, qty: number): AppThunk => async (
  dispatchEvent: Dispatch<cartTypes.CartActionTypes>,
  getState
) => {
  const { data } = await Axios.get(`/api/v1/products/${id}`);

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

  localStorage.setItem("cart-items", JSON.stringify(getState().cart.items));
};

export const removeItemCart = (id: string): AppThunk => async (
  dispatchEvent: Dispatch<cartTypes.CartActionTypes>,
  getState
) => {
  dispatchEvent({
    type: cartTypes.CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cart-items", JSON.stringify(getState().cart.items));
};
