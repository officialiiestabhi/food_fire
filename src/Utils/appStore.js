import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";


const appStore = configureStore(
    {
        //big reducer cit constist of all smal reducer
        reducer:{
            cart:cartSlice
        },
    },
);

export default appStore
