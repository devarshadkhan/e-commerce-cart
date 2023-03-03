import React, { useState } from "react";
import ProductCart from "../ProductCart/ProductCart";
import Products from "../FakeData/FakeData";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { filterByPrice } from "../../Store/ShoppinCart/FilterProduct";
import {
  selectCategory,
  deselectCategory,
} from "../../Store/ShoppinCart/CategoryFilter";
import ReactPaginate from 'react-paginate';

export const Home = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.products.sortBy);
  console.log("sortBy", sortBy);
  const handleSortByPrice = (e) => {
    const priceOrder = e.target.value;
    dispatch(filterByPrice({ priceOrder }));
    console.log("priceOrder", priceOrder);
  };

  // category

  const availableCategories = useSelector(
    (state) => state.categories.availableCategories
  );
  const selectedCategories = useSelector(
    (state) => state.categories.selectedCategories
  );

  const handleCheckboxChange = (event) => {
    const category = event.target.value;
    if (event.target.checked) {
      dispatch(selectCategory(category));
    } else {
      dispatch(deselectCategory(category));
    }
  };

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const ProductsBar = Products.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(Products.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />

      <div className="filter-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <label htmlFor="sort-by-price">Sort by price:</label>
                <select
                  id="sort-by-price"
                  value={sortBy}
                  onChange={handleSortByPrice}
                >
                  <option value="default">Default</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>

              {availableCategories?.map((category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCheckboxChange}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {ProductsBar.map((item) => {
            return (
              <>
                <div className="col-md-3" key={item}>
                  <ProductCart item={item} />
                </div>
              </>
            );
          })}

          <div className="col-md-12">
         <div>
         {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        // pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      /> */}
      <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
         </div>
          </div>
        </div>
      </div>
    </>
  );
};
