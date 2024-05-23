// import React from 'react';
// import './Header.css';
// import { SlLocationPin } from 'react-icons/sl';
// import { BsSearch } from 'react-icons/bs';
// import { BiCart } from 'react-icons/bi';
// import  LowerHeader from '../lowerHeader'
// import {Link} from "react-router-dom"
// function Header() {
//   return (
//     <>
//       <section className='wrapper_header'>
//         <div className="header_container">
//           {/* Logo */}
//           <div className="logo_container">
//             <a href="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </a>

//             <div className="delivery">
//               <span className="location_icon">
//                 <SlLocationPin />
//               </span>
//               <div>
//                 <p>Deliver to</p>
//                 <span>Boston 02108</span>
//               </div>
//             </div>
//           </div>

//           {/* Search */}
//           <div className="search">
//             <select name="categories" id="categories">
//               <option value="all">All</option>
//               {/* Add more categories as needed */}
//             </select>
//             <input type="text" placeholder="Search product" />
//             <button className="search_icon">
//               <BsSearch />
//             </button>
//           </div>

//           {/* Right side links */}
//           <div className="right_links">
//             <div className="flag_container">
//               <img
//                 src="https://www.shutterstock.com/shutterstock/photos/2417108823/display_1500/stock-vector-united-states-of-america-official-flag-vector-with-standard-size-and-proportion-national-flag-2417108823.jpg"
//                 alt="US Flag"
//               />
//             </div>

//             <div className="language_selector">
//               <select name="language" id="language">
//                 <option value="en">EN</option>
//                 {/* Add more languages as needed */}
//               </select>
//             </div>

//             <a href="#" className="account_link">
//               <div className="accountt">
//                 <p>Sign In</p>
//                 <span>Account & Lists</span>
//               </div>
//             </a>

//             <a href="/orders" className="orders_link">
//               <div className="return">
//                 <p>Returns</p>
//                 <span>& Orders</span>
//               </div>
//             </a>

//             <a href="/cart" className="cart_link">
//               <BiCart />
//               <span className="cart_count">7</span>
//             </a>
//           </div>
//         </div>
//       </section>
//      < LowerHeader/>
//     </>
//   );
// }

// export default Header;


import React from "react";
import "./Header.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "../lowerHeader";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
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

            <Link to="/auth" className="account_link">
              <div className="accountt">
                <p>Sign In</p>
                <span>Account & Lists</span>
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
              <span className="cart_count">7</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
