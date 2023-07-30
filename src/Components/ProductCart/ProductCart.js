import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Products from "../FakeData/FakeData"
import { useDispatch, useSelector } from "react-redux"; // dispathc lene padega redux kisi checz ko dispatch karne ke liye
import { cartAction } from "../../Store/ShoppinCart/CartSlice";
import { toast, ToastContainer } from "react-toastify";

const ProductCart = (props) => {
  const dispatch = useDispatch();
  // const [showBtn, setShowBtn] = useState(cartAction);
  const { id, title, thumbnail, price, category, description } = props.item;
  const quantity = useSelector((state) => state.cart.quantity);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const ADD_TO_CART = () => {
    dispatch(
      cartAction.add({
        id,
        title,
        thumbnail,
        price,
        category,
        description,
      })
    );
    // toast.success(`${totalQuantity}  Added to cart`, {
    toast.success(` Added to cart`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // setShowBtn(true)
    // localStorage.setItem("cartItems")
    // setShowBtn(!showBtn)
  };

  return (
    <>
      <ToastContainer />
     
          <div className="wrapper-1 mt-5">
            {/* <div className="container">
          <div className="row"> */}
            {/* {
                Products.map((e) => {
                    return (
                        <> */}
            {/* <div className="col-md-3" key={id}> */}

            <div class="card p-2 mb-3 ">
              <img src={thumbnail} class="card-img-top" alt="Product__Image" />
              <div class="card-body text-center">
                <h5 class="card-title">{`${title.substring(0, 12)}...`}</h5>
                <p class="card-text">{category}</p>
                <span class="card-text">
                  {`${description.substring(0, 20)}...`}
                </span>
                {/* <p class="card-text"> &#8377;{price}</p> */}
                <p class="card-text"> ${price}</p>
                {/* {showBtn ? <button class="btn btn-primary" onClick={ADD_TO_CART}>
                  Add to cart
                </button> 
                :
                <div className="mt-5 d-flex gap-2">
                  <button class="btn btn-primary " onClick={incrementItem}>
                  <i className="fas fa-plus" />
                  </button>
                  <p>{quantity}</p>
                  <button class="btn btn-primary " onClick={decrementItem}>
                  <i className="fas fa-minus" />
                  </button>
                </div>
                 } */}
                <button class="btn btn-primary" onClick={ADD_TO_CART}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
      
      {/* </>
                    )
                })
            } */}
      {/* </div> */}
      {/* </div>
      </div> */}
    </>
  );
};

export default ProductCart;
