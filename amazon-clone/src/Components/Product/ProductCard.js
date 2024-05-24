// import React from 'react'
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "./CurrencyFormat";
// function ProductCard(product) {
//   const {image,title,id,rating,price}=product;
//   return (
//     <div>
//       <a href="">
//         <img src={image} alt="" />
//       </a>
//       <div>
//         <h3> {title}</h3>
//         <div>
//           {/* rating */}
//           <Rating value={rating.rate} precision={0.1} />
//           {/* price */}
//           <small>{rating.count}</small>
//         </div>
//         <div>
//           {/* price */}
//           <currencyFormat amount={price} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard
// import { DataContext } from "../DataProvider/DataProvider";
// import React, { useContext, useReducer } from "react";
// import { Type } from "../../Utility/Action.type";
// import { Link } from "react-router-dom";
// import React from 'react';
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "./CurrencyFormat"; 
// import styles from "../Product/Product.module.css";

// function ProductCard({ product, flex }) { // Destructure the props object directly


// const { image, title, id, rating, price } = product; // Destructure the product object

// const [state, dispatch]=useContext(DataContext)

// console.log(state)
// const addToCart =()=>{
//   dispatch({
//     type: Type.ADD_TO_BASKET,
//     item: { image, title, id, rating, price },
//   });
// }




//   return (
//     <div
//       className={`${styles.card_container} ${flex ? styles.product_flex : ""}`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt="" />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         <div className={styles.rating}>
//           {/* rating */}
//           <Rating value={rating.rate} precision={0.1} />

//           {/* Added readOnly if the rating is not editable */}
//           <small>{rating.count}</small>
//         </div>
//         <div>
//           {/* price */}
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={styles.button} onClick={addToCart}>add to cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React, { useContext } from "react";
import { Type } from "../../Utility/Action.type";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "./CurrencyFormat";
import styles from "../Product/Product.module.css";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flex,renderDesc, renderAdd}) {
  // Destructure the props object directly

  const { image, title, id, rating, price } = product; // Destructure the product object

  const [state, dispatch] = useContext(DataContext);

  console.log(state);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price },
    });
  };

  return (
    <div
      className={`${styles.card_container} ${flex ? styles.product_flex : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

       {

        renderAdd && <button className={styles.button} onClick={addToCart}>add to cart</button>
       }



        <button className={styles.button} onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
