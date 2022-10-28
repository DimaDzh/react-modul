import {
  configureStore,
  compose,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import goodsReducer from "./slices/useProductsSlice";
import products from "./slices/useProductsSlice";
import cart, { ICartState } from "./slices/useCartSlice";
import jwtDecode from "jwt-decode";
import userDataSlice from "./slices/userDataSlice";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface IUser {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    id: number;
    isActivated: boolean;
    role: "USER" | "ADMIN";
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedStateCart: ICartState =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart") || "")
    : null;

const persistedStateUser: IUser | null | string =
  localStorage.getItem("token") &&
  jwtDecode(
    localStorage.getItem("token")
      ? (localStorage.getItem("token") as string)
      : ""
  );

const rootReducer = combineReducers({
  user: userReducer,
  userData: userDataSlice,
  goods: goodsReducer,
  composeEnhancers,
  products,
  cart,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    cart: {
      items: persistedStateCart?.items || [],
      totalPrice: persistedStateCart?.totalPrice || 0,
      totalAmount: persistedStateCart?.totalAmount || 0,
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() =>
  localStorage.setItem("cart", JSON.stringify(store.getState().cart))
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
