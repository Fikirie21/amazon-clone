import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Landing from "./Pages/Landing"
import Auth from "./Pages/Auth/Auth"
import Payments from "./Pages/Payment/Payment"
import Orders from "./Pages/Orders/Order"
import Cart from "./Pages/Cart/Cart"
import Results from "./Pages/Results/Results";
import ProductDetails from "../src/Pages/ProductDetails/ProductDetails"
// import { elements } from "@stripe/react-stripe-js"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute';




const stripePromise = loadStripe(
  "pk_test_51PLREpE2ZsAawLZeJFG7KB9Lg4XxpRBdU5N0x3gnhS1bGSlRrsgYb04eS7x6TL63yLV5TNf7KAMoqo1BQYWwon58001csLydq1"
);



function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payments />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute 
            msg={"you must log in to access your orders"}
            redirect={"/orders"}>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing

