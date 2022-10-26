import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

import { data } from "../../components/Main/data/data";
import { IProducts } from "./useCartSlice";

export enum ProductsStatus {
  PENDING,
  FULFILLED,
  REJECTED,
}

export interface IProductsState {
  products: IProducts[];
  productsStatus: ProductsStatus;
}

// export const fetchProducts = createAsyncThunk<IProducts[], IFetchParams>(
//   "products/fetchProducts",
//   async ({ ...params }) => {
//     const { categoryNumber, sortType, sortOrder } = await params;
//     const { data } = await $host.get(
//       `api/product?categoryId=${categoryNumber}&sortBy=${sortType}&sortOrder=${sortOrder}`
//     );
//     return data;
//   }
// );

const initialState: IProductsState = {
  products: [],
  productsStatus: ProductsStatus.PENDING,
};

export const useProductsSlice = createSlice({
  name: "goods",
  initialState: {
    products: data,
  },
  reducers: {},
});

export const {} = useProductsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default useProductsSlice.reducer;
