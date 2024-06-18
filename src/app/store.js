import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/Order/orderSlice";
import  productSlice  from "../features/Product/productSlice";
import  userSlice  from "../features/User/userSlice";

export const store =configureStore({
    reducer:{
        user:userSlice,
        product:productSlice,
        order:orderSlice
    },
});
//rnfe -build component
//rxslice - build slice
//clo -consol.log object
// import counterSlice from '../features/counter/counterSlice'
// import productSlice from '../features/post/postSlice'
