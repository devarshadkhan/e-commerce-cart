import { createSlice } from "@reduxjs/toolkit";

// const items = localStorage.getItem("cartItems",items)
const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;
const quanity =
  localStorage.getItem("quanity") !== null
    ? JSON.parse(localStorage.getItem("quanity"))
    : 0;
const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount:totalAmount,
  quanity:quanity
};
const setItemLocalStorage = (item, totalQuantity,totalAmount) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add Cart Item
    add(state, action) {
      const newItem = action.payload;
      const newExitItem = state.cartItems.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!newExitItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          thumbnail: newItem.thumbnail,
          category: newItem.category,
          price: newItem.price,
          description: newItem.description,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        newExitItem.quantity++;
        newExitItem.totalPrice =
          Number(newExitItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total , item) => total + Number(item.price) * Number(item.quantity),0)

      setItemLocalStorage(
        state.cartItems.map((item) => item),
        state.totalQuantity,
        state.totalAmount,
        state.quanity
      );
    },

    // Remove Item ====//====

    remove(state, action) {
      const id = action.payload;
      const exitsItem = state.cartItems.find((item) => item.id === id)
      state.totalQuantity--;
      if(exitsItem.quantity === 1){
          state.cartItems = state.cartItems.filter((item) => item.id !== id)
      }
      else{
        exitsItem.quantity--;
        exitsItem.totalPrice =
          Number(exitsItem.totalPrice) - Number(exitsItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total , item) => total + Number(item.price) * Number(item.quantity),0)

        setItemLocalStorage(
          state.cartItems.map((item) => item),
          state.totalQuantity,
          state.totalAmount,
          state.quanity
        );
    },

    // Delete Item

    delItem(state,action){
      const id = action.payload;
      const exitsItem = state.cartItems.find((item) => item.id === id)

      if(exitsItem){
        state.cartItems = state.cartItems.filter((item) => item.id !== id)
        state.totalQuantity = state.totalQuantity - exitsItem.quantity
      }
      state.totalAmount = state.cartItems.reduce(
        (total , item) => total + Number(item.price) * Number(item.quantity),0)

        setItemLocalStorage(
          state.cartItems.map((item) => item),
          state.totalQuantity,
          state.totalAmount,
          state.quanity
        );
    }
  },
});

export const cartAction = CartSlice.actions; // cart action ki jagah ham woh likhte jo hame bhejna hai props
export default CartSlice;