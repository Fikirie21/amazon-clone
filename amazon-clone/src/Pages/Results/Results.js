import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../Components/Layout/Layout";
import styles from "./Results.module.css";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../API/Endpoints";
import Loader from "../../Components/Loader"; // Correct path to Loader component

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize as true
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // Ensure isLoading is set to true at the start
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set isLoading to false if there's an error
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category /{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.Products_container_results}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
