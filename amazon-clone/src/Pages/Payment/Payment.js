
// import React,{useContext,useState} from 'react'
// import styles from './Payment.module.css'
// import Layout from '../../Components/Layout/Layout'
// import { DataContext } from '../../Components/DataProvider/DataProvider';
// import ProductCard from "../../Components/Product/ProductCard"
// import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js"
// import CurrencyFormat from 'react-currency-format';


// function Payment() {

// const [{user, basket}]=useContext(DataContext);
// console.log(user);

//  const totalItem = basket?.reduce((amount, item) => {
//    return item.amount + amount;
//  }, 0);

//  const total = basket.reduce((totalPrice, item) => {
//    return totalPrice + item.price * item.amount;
//  }, 0);


// const [cardError, setCardError]=useState(null)
// const stripe=useStripe();
// const elements=useElements();
// const handleChange=(e)=>{
//   console.log(e);
//   e?.error?.message? setCardError(e?.error?.message):setCardError("")
// };

//   return (
//     <Layout>
//       {/* header */}
//       <div className={styles.payment_header}>Check out ({totalItem}) items</div>
//       {/* payment method */}
//       <section className={styles.payment}>
//         {/* address */}
//         <div className={styles.flex}>
//           <h3>Delivery Address</h3>
//           <div>
//             <div>{user?.email}</div>
//             <div>340 Broad way</div>
//             <div> Malden, MA</div>
//           </div>
//         </div>
//         <hr />
//         {/* product */}

//         <div className={styles.flex}>
//           <h3>Review Items and delivery</h3>
//           <div>
//             {basket?.map((item) => (
//               <ProductCard product={item} flex={true} />
//             ))}
//           </div>
//         </div>
//         <hr />
//         {/* card form */}
//         <div className={styles.flex}>
//           <h3> Payment methods</h3>
//           <div className={styles.payment_card_container}>
//             <div className={styles.payment_details}>
//               <form action="">
//                 {/* error */}
//                 {cardError && (
//                   <small style={{ color: "red" }}>{cardError}</small>
//                 )}
//                 <CardElement onChange={handleChange} />
//                 {/* price */}
//                 <div className={styles.payment_price}>
//                   <div>
//                     <span style={{display:"flex", gap: "10px"}}>
//                       <p> Total Order</p> <CurrencyFormat amount={total} />
//                     </span>
//                   </div>
//                   <button>Pay Now</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

//  export default Payment






import React, { useContext, useState } from "react";
import styles from "./Payment.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {axiosInstance } from "../../API/axios";
import {auth, db, firestore} from "../../Utility/Firebase"
import { collection, collectionGroup } from "firebase/firestore";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";



function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const [cardError, setCardError] = useState(null);
const [processing, setProcessing]=useState(false)


  const stripe = useStripe();
  const elements = useElements();
  const navigate= useNavigate();


  // Calculate the total number of items in the basket
  const totalItem = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  // Calculate the total order amount
  const total = basket.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.amount;
  }, 0);




  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async(e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      //1. backend|| function .....> contact to the client secrete
      const response = await axiosInstance({
        method: "Post",
        url: `/payment/create?total=${total * 100}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      //2. client side(react side confirmation)
      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      // console.log(paymentIntent);
      //3. after the confirmation...> order firestore database save, clear basket

      await firestore
      .collection("users")
      .doc(user.uid)
      .collection("orders")
      .doc(paymentIntent.id)
      .set({
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created,
      });
        
        setProcessing(false);
        navigate("/orders",{state:{msg:"you have placed  new orders"}});
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };



  return (
    <Layout>
      {/* header */}
      <div className={styles.payment_header}>Check out ({totalItem}) items</div>
      {/* payment method */}
      <section className={styles.payment}>
        {/* address */}
        <div className={styles.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>340 Broad way</div>
            <div>Malden, MA</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={styles.flex}>
          <h3>Review Items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={styles.flex}>
          <h3> Payment methods</h3>
          <div className={styles.payment_card_container}>
            <div className={styles.payment_details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={styles.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order</p>{" "}
                      <CurrencyFormat
                        value={total}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={styles.loading}>
                        <ClipLoader key="clipLoader" color="gray" size={12} />

                        <p>Please wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;







