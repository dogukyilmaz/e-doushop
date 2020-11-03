import { applyMiddleware, createStore, combineReducers, Action, Middleware, Store } from "redux";
import thunk, { ThunkAction, ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "redux/product/reducer";
import { cartReducer } from "redux/cart/reducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

const cartItemsLS = localStorage.getItem("cart-items");
const items = cartItemsLS ? JSON.parse(cartItemsLS) : [];

const initialState = {
  cart: { items },
};
const middlewares: Middleware[] = [thunk];

const store: Store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
