import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { cartAction } from "../../Store/ShoppinCart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
// import Products from "../FakeData/FakeData";
import CartItem from "./CartItem";
const Cart = () => {
  //   console.log("Products", Products);
  const [user, setUser] = useState({
    name: "",
    contact: "",
    email: "",
  });

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const cartProducts = useSelector((state) => state.cart.cartItems);
  // const totalQuantity = useSelector((state) => state.Cart.totalQuantity)

  const cartProducts = useSelector((state) => state.cart.cartItems);
  // console.log("cartProducts",cartProducts)
  // const dispatch = useDispatch();

  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: totalAmount * 100, //  = INR 1
    name: "Ecommerce Application",
    description: "some description",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function(response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: user.name,
      contact: user.contact,
      email: user.email,
    },
    notes: {
      address: "some address"
    },
    theme: {
      color: "#F37254",
      hide_topbar: true
    }
  };

  const openPayModal = options => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <>
      <Header />
      {/* <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleUserInputChange}
        />
      </div>
      <div>
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={user.contact}
          onChange={handleUserInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleUserInputChange}
        />
      </div> */}
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-lg-12 col-xl-12 offset-lg-1 text-center mb-5">
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
            <div className="d-flex justify-content-around align-items-center">
            <h5 className="mb-0">Total Amount:  &#8377;{totalAmount}</h5>
              <button className="btn btn-primary" onClick={() => openPayModal(options)}>Checkout Now</button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Cart;