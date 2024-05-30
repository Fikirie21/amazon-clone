import React, { useContext } from "react";
import "./Header.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "../lowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/Firebase";
// import Footer from "../Footer/Footer"

function Header() {
  const [{user, basket }, dispatch] = useContext(DataContext);
  // console.log(basket.length);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className="fixed">
      <section className="wrapper_header">
        <div className="header_container">
          {/* Logo */}
          <div className="logo_container">
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            <div className="delivery">
              <span className="location_icon">
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Boston 02108</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="search">
            <select name="categories" id="categories">
              <option value="all">All</option>
              {/* Add more categories as needed */}
            </select>
            <input type="text" placeholder="Search product" />
            <button className="search_icon">
              <BsSearch />
            </button>
          </div>

          {/* Right side links */}
          <div className="right_links">
            <div className="flag_container">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2417108823/display_1500/stock-vector-united-states-of-america-official-flag-vector-with-standard-size-and-proportion-national-flag-2417108823.jpg"
                alt="US Flag"
              />
            </div>

            <div className="language_selector">
              <select name="language" id="language">
                <option value="en">EN</option>
                {/* Add more languages as needed */}
              </select>
            </div>

            <Link to={!user && "/auth"} className="account_link">
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={()=>auth()}>Sign Out</span>
                  </>
                ) : (
                  <>
                 <p>Hello Sign In</p>
                 <span> Account & Lists</span>
                  </>
                )}
               
              </div>
            </Link>

            <Link to="/orders" className="orders_link">
              <div className="return">
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </Link>

            <Link to="/cart" className="cart_link">
              <BiCart />
              <span className="cart_count">{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
      {/* <Footer/> */}
    </section>
  );
}

export default Header;
