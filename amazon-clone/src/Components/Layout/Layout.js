// import React, { Children } from 'react'
// import Header from "../../Components/Header/Header"
// function Layout(Children) {
//   return (
//     <div>
// <Header/>
// {Children}

//     </div>
//   )
// }

// export default Layout


import React from "react";
import Header from "../../Components/Header/Header";
function Layout({ children }) {
  // Destructure children from props
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
