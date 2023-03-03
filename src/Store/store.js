import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./ShoppinCart/CartSlice"
import FilterProduct from "./ShoppinCart/FilterProduct";
import CategoryFilter from "./ShoppinCart/FilterProduct";


const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        products:FilterProduct.reducer,
        categories:CategoryFilter.reducer,
    }
})

export default store;