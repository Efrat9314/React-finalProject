import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts, addProduct, deleteProduct, updateProduct, getProductById } from "./productApi";

const initialState = {
  arrProducts: []
}
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (thunkAPI) => {
    const res = await fetchAllProducts();
    return res;
  }
)
export const addNewProduct = createAsyncThunk(
  'products/addNewProduct',
  async (newProduct, thunkAPI) => {
    console.log('slice: add', newProduct)
    const res = await addProduct(newProduct);
    return res;
  }
)
export const deleteProductItem = createAsyncThunk(
  'products/deleteProductItem',
  async (id, thunkAPI,) => {
    console.log("delete slice", id)
    const res = await deleteProduct(id);
    return res;
  }
)
export const updateProductItem = createAsyncThunk(
  'product/updateProductItem',
  async ({ data, id }, thunkAPI) => {
    const res = await updateProduct(data, id)
    return res
  }
)

export const getProductItem = createAsyncThunk(
  'product/getProductItem',
  async (id, thunkAPI) => {
    const res = await getProductById(id)
    return res
  }
)
export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "fullfilled";
        state.arrProducts = action.payload;
      })
      .addCase(deleteProductItem.fulfilled, (state, action) => {
        state.status = "fullfilled";
        let index = state.arrProducts.findIndex(x => x.id == action.payload)
        state.arrProducts.splice(index, 1)
        console.log("finish the job", index)

      })
      .addCase(updateProductItem.fulfilled, (state, action) => {
        state.status = "fullfilled";
        console.log('update2', action.payload)
        let index = state.arrProducts.findIndex(x => x.id == action.payload.id)
        state.arrProducts.splice(index, 1, action.payload)
        console.log("finish the job")

      })
  },

});
export default productSlice.reducer;