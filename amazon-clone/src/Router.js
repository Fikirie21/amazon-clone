import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Landing from "./Pages/Landing"
import SignIn from "./Pages/Auth/Signup"
import Payments from "./Pages/Payment/Payment"
import Orders from "./Pages/Orders/Order"
import Cart from "./Pages/Cart/Cart"
import Results from "./Pages/Results/Results";
import ProductDetails from "../src/Pages/ProductDetails/ProductDetails"
function Routing() {
  return (
<Router>
 <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/auth" element={<SignIn/>}/>
    <Route path="/payments" element={<Payments/>}/>
    <Route path="/orders" element={<Orders/>}/>
    <Route path="/category/:categoryName" element={<Results/>}/>
    <Route path="/products/:productId" element={<ProductDetails/>}/>
    <Route path="/cart" element={<Cart/>}/>
    
</Routes>


    </Router>
  )
}

export default Routing
