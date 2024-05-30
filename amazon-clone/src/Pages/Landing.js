import React from 'react'
import Carousel from "../Components/Carousel/Carousel";
import Category from "../Components/Category/Category";
import Product from "../Components/Product/Product";
import Layout from "../Components/Layout/Layout";
import Footer from "../Components/Footer/Footer"
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
      <Footer/>
    </Layout>
  );
}

export default Landing

