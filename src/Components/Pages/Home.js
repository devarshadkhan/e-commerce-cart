import React from 'react'
import ProductCart from '../ProductCart/ProductCart'
import Products from "../FakeData/FakeData"
import Header from '../Header/Header'
export const Home = () => {
  return (
    <>
    <Header/>
        <div className="container">
            <div className="row">
                {
                    Products.map((item) => {
                        return (
                            <>
                                <div className="col-md-3" key={item}>
                                    <ProductCart item={item}/>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
