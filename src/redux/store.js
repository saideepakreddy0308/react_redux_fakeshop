import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// store second parameter is the initial state of the store. we gave it an empty object.and we can give it any value we want.
//  usually we give it an empty object as the initial state of the store.because, we want to store the data in the store dynamically.
// middlewares can be used like redux-thunk, redux-logger, redux-saga, etc.
// we use them in the store.js file like this:
// import { createStore, applyMiddleware } from "redux";
// import reducers from "./reducers/index";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// const store = createStore(
//   reducers,
//   {},
//   applyMiddleware(thunk, logger)
// );
// here thunk and logger is the middleware.and each of it is a function. and we are passing it to the applyMiddleware function.
// and thunk means we can use async actions in redux. indetail it mean, we can use functions instead of objects in redux.
// and logger is used to log the redux actions in the console.
// and we can use multiple middlewares in the applyMiddleware function.
// Middlewares are functions that take the action as an argument and do something with it and then pass it to the reducer.
// They role here is to intercept the action before it reaches the reducer.Indetail it means that they can do something with the action and then pass it to the reducer.
// They are used when we want to do something asynchronous in redux.Like when we want to fetch data from an API.or Like when we want to log the redux actions in the console.
// In case of fetch data from an API, we can use redux-thunk middleware.
// Example Code of using redux-thunk middleware in case of fetching data from an API:
// import { createStore, applyMiddleware } from "redux";
// import reducers from "./reducers/index";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// const store = createStore(
//   reducers,
//   {},
//   applyMiddleware(thunk, logger)
// );
// export default store;
// and in the action file we can use it like this:
// import axios from "axios";
// import { ActionTypes } from "../constants/action-types";
//
// export const fetchProducts = () => async (dispatch) => {
//   const response = await axios
//     .get("https://fakestoreapi.com/products")
//     .catch((err) => {
//       console.log("Err: ", err);

//     });
//   dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
// };
// and in the component file we can use it like this:
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ProductComponent from "./ProductComponent";
// import axios from "axios";
// import { setProducts } from "../redux/actions/productsActions";
//
// const ProductListing = () => {
//   const products = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const fetchProducts = async () => {
//     const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(setProducts(response.data));
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   console.log("Products :", products);
//   return (
//     <div className="ui grid container">
//       <ProductComponent />
//     </div>
//   );
// };
//
// export default ProductListing;
// and in the reducer file we can use it like this: 
//  Use Copilot help for further steps, if needed

