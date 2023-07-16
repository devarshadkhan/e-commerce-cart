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
import ReactPaginate from "react-paginate";

export const Home = () => {
  const dispatch = useDispatch();
  // const sortBy = useSelector((state) => state.products.sortBy);
  // console.log("sortBy", sortBy);
  // const handleSortByPrice = (e) => {
  //   const priceOrder = e.target.value;
  //   dispatch(filterByPrice({ priceOrder }));
  //   console.log("priceOrder", priceOrder);
  // };

  // category

  // const availableCategories = useSelector(
  //   (state) => state.categories.availableCategories
  // );
  // const selectedCategories = useSelector(
  //   (state) => state.categories.selectedCategories
  // );

  // const handleCheckboxChange = (event) => {
  //   const category = event.target.value;
  //   if (event.target.checked) {
  //     dispatch(selectCategory(category));
  //   } else {
  //     dispatch(deselectCategory(category));
  //   }
  // };

  // Pagination Logic

  // const [pageNumber, setPageNumber] = useState(0);

  // const productPerPage = 8;
  // const visitedPage = pageNumber * productPerPage;
  // const ProductsBar = Products.slice(visitedPage, visitedPage + productPerPage);

  // const pageCount = Math.ceil(Products.length / productPerPage);
  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  // price filter

  const [priceRange, setPriceRange] = useState("");
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const filteredProducts = Products.filter((product) => {
    if (priceRange) {
      const [min, max] = priceRange.split("-");
      if (
        (min && product.price < parseFloat(min)) ||
        (max && product.price > parseFloat(max))
      ) {
        return false;
      }
    }
    return true;
  });

  // filter by category

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    console.log("sadasdsadasd", category);
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((e) => e !== category));
    } else {
      setSelectedCategories([...selectedCategories,category]);
    }
  };

  const allFilteredProducts = selectedCategories.length
    ? filteredProducts.filter((Pro) =>
        selectedCategories.includes(Pro.category)
      )
    : filteredProducts;

  return (
    <>
      <Header />

      <div className="filter-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div>
                <label htmlFor="sort-by-price">Sort by price:</label>
                <select onChange={handlePriceChange}>
                  <option value="">Select Price Range</option>
                  <option value="0-100">0-100</option>
                  <option value="100-500">100-500</option>
                  <option value="500-1000">500-1000</option>
                  <option value="500-1000">1000-10000</option>
                </select>
              </div>

            </div>
            <div className="col-md-9 ">
              {Products.map((item) => {
                if (item.filterbycheck) {
                  return (
                    <>
                      <label class="form-check-label" for={item.filterbycheck}>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value={selectedCategories}
                            // id="flexCheckDefault"
                            id={item.filterbycheck}
                            checked={selectedCategories.includes(item.filterbycheck)}
                            onChange={() => handleCategoryChange(item.filterbycheck)}
                          />
                          {item.filterbycheck}
                        </div>
                      </label>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {allFilteredProducts.map((item) => {
            return (
              <>
                <div className="col-lg-3 col-md-6 col-sm-12 " key={item}>
                  <ProductCart item={item} />
                </div>
              </>
            );
          })}

          <div className="col-md-12">
            <div>
              {/* <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
