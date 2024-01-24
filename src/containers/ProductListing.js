import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {

  // Here useSelector is a hook which is used to select the state from the redux store.
  const products = useSelector((state) => state.allProducts.products);
  // Here it takes the state as an argument and returns the state.products.
  // Here state means the state of the redux store.
  // Here allProducts means the reducer name.
  // Here products means the state name.
  // Here state.allProducts.products means the state of the redux store.
  // Here allProducts have the products state and type SET_PRODUCTS, so it will return the products state.
  // IF this allProducts reducer have multiple states then we can use it like this:then we can use it like this:


  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
    // Here, setProducts is an action creator, which is used to create an action. and dispatch is used to dispatch the action to the reducer.
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
