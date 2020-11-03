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

  // try {
  //   dispatchEvent({ type: cartTypes.PRODUCT_LIST_REQUEST });
  //   const { data } = await Axios.get(`/api/v1/products`);
  //   console.log(data, "action");
  //   if (data.success) {
  //     dispatchEvent({ type: cartTypes.PRODUCT_LIST_SUCCESS, payload: data.data });
  //   } else {
  //     dispatchEvent({ type: cartTypes.PRODUCT_LIST_FAIL, payload: data });
  //   }
  // } catch (error) {
  //   dispatchEvent({ type: cartTypes.PRODUCT_LIST_FAIL, payload: error.response.data });
  // }
};
