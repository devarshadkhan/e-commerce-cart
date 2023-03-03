// // import { createSlice } from '@reduxjs/toolkit';

// // const productsSlice = createSlice({
// //   name: 'products',
// //   initialState: {
// //     items: [], // array of product objects
// //     filteredItems: [], // array of filtered product objects
// //     sort: '', // string indicating sort order ('lowest', 'highest', or '')
// //   },
// //   reducers: {
// //     setProducts: (state, action) => {
// //       state.items = action.payload;
// //       state.filteredItems = action.payload;
// //     },
// //     filterProducts: (state, action) => {
// //       const { size, price } = action.payload;
// //       state.filteredItems = state.items.filter((product) => {
// //         return (
// //           (size === '' || product.availableSizes.indexOf(size) !== -1) &&
// //           (price === '' || product.price <= parseInt(price))
// //         );
// //       });
// //     },
// //     sortProducts: (state, action) => {
// //       const sort = action.payload;
// //       state.sort = sort;
// //       state.filteredItems.sort((a, b) => {
// //         if (sort === 'lowest') {
// //           return a.price - b.price;
// //         } else if (sort === 'highest') {
// //           return b.price - a.price;
// //         } else {
// //           return a.id - b.id;
// //         }
// //       });
// //     },
// //   },
// // });

// // export const { setProducts, filterProducts, sortProducts } = productsSlice.actions;

// // export default productsSlice.reducer;


// // const initialState = {
// //     products: [],
// //     sort: ''
// //   }
  
// //   const productsSlice = createSlice({
// //     name: 'products',
// //     initialState,
// //     reducers: {
// //       setProducts: (state, action) => {
// //         state.products = action.payload;
// //       },
// //       setSort: (state, action) => {
// //         state.sort = action.payload;
// //       }
// //     }
// //   });
  
// //   export const { setProducts, setSort } = productsSlice.actions;
  
// //   export default productsSlice.reducer;
  

// import { createSlice } from '@reduxjs/toolkit';

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: {
//     items: [],
//     sortBy: 'PRICE_LOW_TO_HIGH',
//   },
//   reducers: {
//     setItems(state, action) {
//       state.items = action.payload;
//     },
//     setSortBy(state, action) {
//       state.sortBy = action.payload;
//     },
//   },
// });

// export const { setItems, setSortBy } = productsSlice.actions;

// export default productsSlice.reducer;

/////////////// new 

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filteredProducts: [],
  sortBy: 'default',
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setProducts(state, action) {
        state.products = action.payload;
        state.filteredProducts = action.payload;
      },
      filterByPrice(state, action) {
        const { priceOrder } = action.payload;
        if (priceOrder === 'lowToHigh') {
          state.filteredProducts = state.products.sort((a, b) => a.price - b.price);
        } else if (priceOrder === 'highToLow') {
          state.filteredProducts = state.products.sort((a, b) => b.price - a.price);
        } else {
          state.filteredProducts = state.products;
        }
        state.sortBy = priceOrder;
      },
    },
  });
  
  export const { setProducts, filterByPrice } = productSlice.actions;
//   export const filterAction = productSlice.actions;
  
//   export default productSlice.reducer;
  export default productSlice;
  