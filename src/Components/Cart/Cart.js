import React from "react";
import Header from "../Header/Header";
import { cartAction } from "../../Store/ShoppinCart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
// import Products from "../FakeData/FakeData";
import CartItem from "./CartItem";
const Cart = () => {
  //   console.log("Products", Products);

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const cartProducts = useSelector((state) => state.cart.cartItems);
  // const totalQuantity = useSelector((state) => state.Cart.totalQuantity)

  const cartProducts = useSelector((state) => state.cart.cartItems);
  // console.log("cartProducts",cartProducts)
  // const dispatch = useDispatch();

  return (
    <>
      <Header />
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-lg-12 col-xl-12 offset-lg-1 text-center mb-5">
              <h5 className="mb-0">Total Amount: ${totalAmount}</h5>
            </div>
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a className="text-body">
                      price <i className="fas fa-angle-down mt-1" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {cartProducts.length === 0 ? (
              <>
                <h1 style={{ textAlign: "center" }}>
                  No item added to the cart
                </h1>
              </>
            ) : (
              cartProducts.map((item) => {
                return (
                  <>
                    <CartItem item={item} />
                  </>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;