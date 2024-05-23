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

import { Link } from "react-router-dom";
import React from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from "./CurrencyFormat"; 
import styles from "../Product/Product.module.css";
function ProductCard({ product }) { // Destructure the props object directly

const { image, title, id, rating, price } = product; // Destructure the product object
  return (
    <div className={`${styles.card_container}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />

          {/* Added readOnly if the rating is not editable */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
      </div>
      <button className={styles.button}>add to cart</button>
    </div>
  );
}

export default ProductCard;

