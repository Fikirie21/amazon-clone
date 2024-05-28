// import React, { useContext } from "react";
// import Layout from "../../Components/Layout/Layout";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import ProductCard from "../../Components/Product/ProductCard";
// import { Link } from "react-router-dom";
// import CurrencyFormat from "react-currency-format";
// import styles from "../Cart/Cart.module.css";
// import { Type } from "../../Utility/Action.type";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";

// function Cart() {
//   const [{ basket, user }, dispatch] = useContext(DataContext);
//   const total = basket.reduce((amount, item) => {
//     return item.price * item.amount + amount;
//   }, 0);

//   const increment = (item) => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: item,
//     });
//   };

//   const decrement = (id) => {
//     dispatch({
//       type: Type.REMOVE_FROM_BASKET,
//       id: id,
//     });
//   };

//   return (
//     <Layout>
//       <section className={styles.container}>
//         <div className={styles.cart_container}>
//           <h2>Hello</h2>
//           <h3>Your Shopping Basket</h3>
//           <hr />
//           {basket?.length === 0 ? (
//             <p>Opps !No Item in your cart</p>
//           ) : (
//             basket?.map((item, i) => {
//               return (
//                 <section className={styles.cart_product}>
//                   <ProductCard
//                     key={i}
//                     product={item}
//                     renderDesc={true}
//                     renderAdd={false}
//                     flex={true}
//                   />
//                   <div className={styles.btn_container}>
//                     <button
//                       className={styles.btn}
//                       onClick={() => increment(item)}
//                     >
//                       <IoIosArrowUp size={30} />
//                     </button>
//                     <span>{item.amount}</span>
//                     <button
//                       className={styles.btn}
//                       onClick={() => decrement(item.id)}
//                     >
//                       <IoIosArrowDown size={30} />
//                     </button>
//                   </div>
//                 </section>
//               );
//             })
//           )}
//         </div>
//         {basket?.length !== 0 && (
//           <div className={styles.subtotal}>
//             <div>
//               <p>Subtotal ({basket?.length} items)</p>
//               <CurrencyFormat amount={total} />
//             </div>
//             <span>
//               <input type="checkout" />
//               <small>This order contains a gift</small>
//             </span>
//             <Link to="/payments">Continue to checkout</Link>
//           </div>
//         )}
//       </section>
//     </Layout>
//   );
// }
// export default Cart;




import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import styles from "../Cart/Cart.module.css";
import { Type } from "../../Utility/Action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  // Calculate the total price
  const total = basket.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.amount;
  }, 0);

  // Increment the item amount in the basket
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: item,
    });
  };

  // Decrement the item amount in the basket
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={styles.cart_product} key={i}>
                  <ProductCard
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={styles.btn_container}>
                    <button
                      className={styles.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={30} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={styles.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
            <span>
              <input type="checkout" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
