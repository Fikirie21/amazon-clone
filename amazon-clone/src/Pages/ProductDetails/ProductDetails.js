import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import "./ProductDetails.css";
import axios from "axios";
import { productUrl } from "../../API/Endpoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader";
function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Initialize as true

  useEffect(() => {
    setIsLoading(true); // Ensure isLoading is set to true at the start
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set isLoading to false if there's an error
      });
  }, [productId]); // Add productId to dependency array

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetails;
