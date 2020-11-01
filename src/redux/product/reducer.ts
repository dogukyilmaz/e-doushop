import * as productTypes from "redux/product/types";

const initialProductState: productTypes.ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productReducer = (
  state = initialProductState,
  action: productTypes.ProductActionTypes
): productTypes.ProductState => {
  const { type, payload } = action;

  switch (type) {
    case productTypes.PRODUCTS_LIST_REQUEST:
      return {
        ...initialProductState,
        isLoading: true,
      };
    case productTypes.PRODUCTS_LIST_SUCCESS:
      return {
        ...initialProductState,
        products: payload,
      };
    case productTypes.PRODUCTS_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return { ...state };
  }
};
