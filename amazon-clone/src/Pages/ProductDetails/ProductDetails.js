// import React from 'react'
// import { useParams } from "react-router-dom";
// import Layout from "../../Components/Layout/Layout";
// import "./ProductDetails.css"
// function ProductDetails() {


//   const {productId}=useParams()
//     console.log(productId)
//   }
//   return (
//     <Layout>
//       <div>ProductDetails</div>
//     </Layout>
//   );
// }

// export default ProductDetails;import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Layout from "../../Components/Layout/Layout";
// import "./ProductDetails.css";
// import axios from "axios";
// import { productUrl } from "../../API/Endpoints";
// import ProductCard from "../../Components/Product/ProductCard";

// function ProductDetails() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});
//   const [isLoading, setIsLoading]=useState(false)

//   useEffect(() => {
//     axios.get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//         setIsLoading(false)
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false);
//       });
//   }, []); // Added productId to dependency array

//   return (
//     <Layout>
//       {isLoading?(<Loader/>):(
//       <ProductCard product={product} />)}
//     </Layout>
//   );
// }

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import "./ProductDetails.css";
import axios from "axios";
import { productUrl } from "../../API/Endpoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader"; // Correct path to Loader component

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Initialize as true

  useEffect(() => {
    setIsLoading(true); // Ensure isLoading is set to true at the start
    axios.get(`${productUrl}/products/${productId}`)
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
        <ProductCard product={product} 
        flex={true}
        renderDesc={true}
        renderAdd={true}/>
      )}
    </Layout>
  );
}

export default ProductDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Layout from "../../Components/Layout/Layout";
// import "./ProductDetails.css";
// import axios from "axios";
// import { productUrl } from "../../API/Endpoints";
// import ProductCard from "../../Components/Product/ProductCard";
// import Loader from "../../Components/"; // Correct path to Loader component

// function ProductDetails() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});
//   const [isLoading, setIsLoading] = useState(true); // Initialize as true

//   useEffect(() => {
//     setIsLoading(true); // Ensure isLoading is set to true at the start
//     axios
//       .get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//         setIsLoading(false); // Set isLoading to false after data is fetched
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false); // Set isLoading to false if there's an error
//       });
//   }, [productId]); // Add productId to dependency array

//   return (
//     <Layout>
//       {isLoading ? <Loader /> : <ProductCard product={product} />}
//     </Layout>
//   );
// }

// export default ProductDetails;
