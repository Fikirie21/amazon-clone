import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "./CurrencyFormat";
import styles from "../Product/Product.module.css";
import { Type } from "../../Utility/Action.type";
import { maxWidth } from "@mui/system";
import { DataContext } from "../DataProvider/DataProvider";
function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product; // Destructure the product object

  const [state, dispatch] = useContext(DataContext);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${styles.card_container} ${
        flex ? styles.product_flex_card : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
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
        {renderAdd && (
          <button className={styles.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
