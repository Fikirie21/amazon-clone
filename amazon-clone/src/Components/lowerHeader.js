import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import styles from "./LowerHeader.module.css"
function lowerHeader() {
  return (
    <div className={styles.lower_header}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>sell</li>
      </ul>
    </div>
  );
}

export default lowerHeader