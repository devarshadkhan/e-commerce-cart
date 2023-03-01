import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import { cartAction } from '../../Store/ShoppinCart/CartSlice'
const Header = () => {

    const dispatch = useDispatch()

    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  return (
   <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <Link class="navbar-brand" to="/">Redux With Add To Cart</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li class="nav-item">
          <Link to="/cart" class="nav-link" >Cart: {totalQuantity}</Link>
        </li> */}
     
        <li class="nav-item">
          {/* <Link to="/cart" class="nav-link " > <i className='fa fa-cart-plus ' style={{color:"red"}}></i> Cart: {totalQuantity}</Link> */}
          <Link to="/cart" class="position-relative btn btn-primary" style={{background:"transparent",color:"#000",border:"none",padding:"0"}}>
  <i className='fa fa-cart-plus'></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {totalQuantity}
    <span class="visually-hidden">unread messages</span>
  </span>
</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
{/* 
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <section className="h-100" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0">
              <span className="text-muted">Sort by:</span>{" "}
              <a  className="text-body">
                price <i className="fas fa-angle-down mt-1" />
              </a>
            </p>
          </div>
        </div>
        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  className="img-fluid rounded-3"
                  alt="Cotton T-shirt"
                />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                <p>
                  <span className="text-muted">Size: </span>M{" "}
                  <span className="text-muted">Color: </span>Grey
                </p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button
                  className="btn btn-link px-2"
                  
                >
                  <i className="fas fa-minus" />
           
                </button>
                <input
                  id="form1"
                  min={0}
                  name="quantity"
                  defaultValue={2}
                  type="number"
                  className="form-control form-control-sm"
                />
                <button
                  className="btn btn-link px-2"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">$499.00</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger">
                  <i className="fas fa-trash fa-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
       
       
        
      </div>
    </div>
  </div>
</section>
  </div>
</div> */}
   </>
  )
}

export default Header