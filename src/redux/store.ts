import { applyMiddleware, createStore, combineReducers, Action, Middleware, Store, PreloadedState } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "redux/product/reducer";
import { cartReducer } from "redux/cart/reducer";
import { authReducer } from "redux/user/reducer";
import { cartItems, address, token } from "utils/localStorage";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

const initialState: PreloadedState<RootState> = {
  cart: { items: cartItems, shippingAddress: address },
  auth: { user: { email: "", password: "", token } },
};
const middlewares: Middleware[] = [thunk];

const store: Store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
