// import React, { useEffect, useState } from 'react'

// function Product() {

// const [first,setProducts]=useState()

// useEffect(()=>{
//     axios.get("https://fakestoreapi.com/products").then((res)=>{setProducts(res.data)}).catch((err)=>{console.log(err)})

// }),[])

//   return (
//     <div>




        
//     </div>
//   )
// }

// // export default Product
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductionCard from "./ProductCard";
// import "../Product/Product.css"
// function Product() {
//   const [products, setProducts] = useState([]); // Initialize state as an empty array
//   const[isLoading,setIsLoading]=useState(false)

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         isLoading(false)
//       })
//       .catch((err) => {
//         console.log(err);
//          isLoading(false);
//       });
//   }, []); // Correct dependency array

//   return (
//     <>
//       isLoading?(
//       <Loader />
//       ): ({" "}
//       <section className="product_container">
//         {products.map((singleProduct) => (
//           <ProductionCard product={singleProduct} key={singleProduct.id} />
//         ))}
//       </section>
//       )
//     </>
//   );
// }

// export default Product;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard"; // Ensure the correct path to the ProductCard component
// import "../Product/Product.css";
// import Loader from "../../Components/Loader/Loader"; // Ensure the correct path to the Loader component

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true); // Set isLoading to true at the start of data fetching
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         setIsLoading(false); // Set isLoading to false after data is fetched
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false); // Set isLoading to false if there's an error
//       });
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <section className="product_container">
//           {products.map((singleProduct) => (
//             <ProductCard product={singleProduct} key={singleProduct.id} />
//           ))}
//         </section>
//       )}
//     </>
//   );
// }

// export default Product;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard"; // Ensure the correct path to the ProductCard component
// import "../Product/Product.css";
// import Loader from "../Loader"

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true); // Set isLoading to true at the start of data fetching
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         setIsLoading(false); // Set isLoading to false after data is fetched
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false); // Set isLoading to false if there's an error
//       });
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <section className="product_container">
//           {products.map((singleProduct) => (
//             <ProductCard product={singleProduct} key={singleProduct.id} />
//           ))}
//         </section>
//       )}
//     </>
//   );
// }

// export default Product;


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
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
