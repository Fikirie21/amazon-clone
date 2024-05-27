import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard"; // Correct path to ProductCard component
import styles from "../Product/Product.module.css";
import Loader from "../../Components/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize as true

  useEffect(() => {
    setIsLoading(true); // Ensure isLoading is set to true at the start
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set isLoading to false if there's an error
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.product_container}>
          {products.map((singleProduct) => (
            <ProductCard
              renderAdd={true}
              product={singleProduct}
              key={singleProduct.id}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
