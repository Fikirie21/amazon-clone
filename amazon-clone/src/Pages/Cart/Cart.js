import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard"; 



function Cart() {
  const [{basket,user},dispatch]=useContext(DataContext);

  return (
    <Layout>
      <section>
      <div>
      <h2>Hello</h2>
     <h3> Your Shopping Basket</h3>
     <hr/>
     {
      basket?.length==0?(<p>Opps ! No item in your cart</p>):(basket?.map((item,i)=>{return <ProductCard
      key={i}
      product={item}
    renderDesc={true}
    renderAdd={false}
  flex={true}/>}
))
     }

          </div>
          <div></div>
      </section>
    </Layout>
  );
}

export default Cart;
