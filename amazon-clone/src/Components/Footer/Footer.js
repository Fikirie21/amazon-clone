// import React from "react";
// import "./Footer.css"; // Import CSS file for styling

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer-section">
//         <h3>Get to Know Us</h3>
//         <ul>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Careers">Careers</a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Amazon">Amazon</a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Newsletter">Newsletter</a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/About_Amazon">
//               About Amazon
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Accessibility">
//               Accessibility
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Sustainability">
//               Sustainability
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Press_Center">
//               Press Center
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Investor_relations">
//               Investor Relations
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Amazon_Devices">
//               Amazon Devices
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="footer-section">
//         <h3>Make Money with Us</h3>
//         <ul>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Amazon_Marketplace">
//               Sell on Amazon
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Amazon_Appstore">
//               Sell apps on Amazon
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Supply_chain_management">
//               Supply to Amazon
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Brand_management">
//               Protect & Build Your Brand
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Affiliate_marketing">
//               Become an Affiliate
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Amazon_Flex">
//               Become a Delivery Driver
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Package_delivery">
//               Start a Package Delivery Business
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Product_placement">
//               Advertise Your Products
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Self-publishing">
//               Self-Publish with Us
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="footer-section">
//         <h3>Amazon Payment Products</h3>
//         <ul>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Amazon_Visa">Amazon Visa</a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Amazon.com_Store_Card">
//               Amazon Store Card
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Secured_credit_card">
//               Amazon Secured Card
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Business_card">
//               Amazon Business Card
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Customer_rewards_program">
//               Shop with Points
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Credit_card_marketplace">
//               Credit Card Marketplace
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Balance_transfer">
//               Reload Your Balance
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="footer-section">
//         <h3>Let us Help You</h3>
//         <ul>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Amazon_Account">
//               Your Account
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Order_management_system">
//               Your Orders
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Shipping_management_software">
//               Shipping Rates & Policies
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Amazon_Prime">
//               Amazon Prime
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Product_return">
//               Returns & Replacements
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Content_management_system">
//               Manage Your Content and Devices
//             </a>
//           </li>
//           <li>
//             <a href="https://en.wikipedia.org/wiki/Product_recalls_and_alerts">
//               Recalls and Product Safety Alerts
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";

const AmazonFooter = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page smoothly
  };

  return (
    <div>
      {/* Back to Top bar */}
      <div className="back-to-top-bar" onClick={handleBackToTop}>
        <p>Back to Top</p>
      </div>
      
      <footer className="amazon-footer">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Amazon</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Press Center</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <a href="#">Sell on Amazon</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Supply to Amazon</a>
            </li>
            <li>
              <a href="#">Protect & Build Your Brand</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Become a Delivery Driver</a>
            </li>
            <li>
              <a href="#">Start a Package Delivery Business</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>
              <a href="#">Amazon Visa</a>
            </li>
            <li>
              <a href="#">Amazon Store Card</a>
            </li>
            <li>
              <a href="#">Amazon Secured Card</a>
            </li>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Credit Card Marketplace</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Gift Cards</h3>
          {/* No specific list provided for Gift Cards */}
        </div>

        <div className="footer-column">
          <h3>Let us Help You</h3>
          <ul>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Amazon Prime</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="#">Recalls and Product Safety Alerts</a>
            </li>
          </ul>
        </div>


      </footer>

    
    </div>










  );
};

export default AmazonFooter;



