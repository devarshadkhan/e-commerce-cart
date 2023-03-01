import React from "react";
import Header from "../Header/Header";
import { cartAction } from "../../Store/ShoppinCart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Products from "../FakeData/FakeData";
const CartItem = ({item}) => {
  const { id,title,image,price,totalPrice,quantity} = item
  console.log("item", item)
//   console.log("Products", Products);

// const totalAmount = useSelector((state) => state.cart.totalAmount)
// const cartProducts = useSelector((state) => state.cart.cartItems);
// const totalQuantity = useSelector((state) => state.Cart.totalQuantity)
// console.log("cartProducts",cartProducts)
  const dispatch = useDispatch();
  const incrementItem = () => {
      dispatch(
        cartAction.add({
            id,title,image,price
        })
      );
    };
  
    const decrementItem = () => {
      dispatch(
        cartAction.remove(id)
      )
    }
    const delItem = () => {
      dispatch(
        cartAction.delItem(id)
      )
    }
  return (
    <>
      {/* <Header /> */}
      {/* {cartProducts.length === 0 ? <><h1><img src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" /></h1></>
        : */}
      
       
              {/* {cartProducts.map((e) => {
                return (
                  <> */}
                    <div className="card rounded-3 mb-4" key={id}>
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={image}
                              className="img-fluid rounded-3"
                              alt="item"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{title}</p>
                            <p>
                              <span className="text-muted">Price: </span>{price}
                            </p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center gap-3">
                            <button className="btn btn-link px-2" onClick={decrementItem}>
                              <i className="fas fa-minus"  />
                            </button>
                            <p className="m-0">{quantity}</p>
                           
                            <button
                                className="btn btn-link px-2" onClick={incrementItem}
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            {/* <h5 className="mb-0">Total Amount: ${totalAmount}</h5> */}
                            {/* <p className="m-0">Total Price: {totalPrice}</p> */}
                            <p className="m-0">Total Price: {totalPrice.toString().substr(0,6)}</p>
                            {/* <p className="m-0">Total Price:  {`${totalPrice.substring()}...`}</p> */}
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-danger" onClick={delItem}>
                              <i className="fas fa-trash fa-lg" />
                            </a>
                          </div>
                        
                        </div>
                      </div>
                    </div>
                    
                  {/* </>
                );
              })} */}
            
      {/* </section> */}
      {/* } */}
    </>
  );
};

export default CartItem;