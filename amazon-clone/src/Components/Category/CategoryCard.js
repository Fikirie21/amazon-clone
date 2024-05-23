// import React from 'react'

// function CategoryCard({data}) {
//   return (
//     <div>
//       <a>
//         <span>
//           <h2>{data.title}</h2>
//         </span>
//         <img  src='{data.imgLink}'  alt=''/>

//         <p>Shop Now</p>
//       </a>




//     </div>
//   );
// }

// export default CategoryCard




// import React from "react";
// import "./Category.css"
// function CategoryCard({ data }) {
//   return (
//     <div className="category">
//       <a href="#">
//         <span>
//           <h2>{data.title}</h2>
//         </span>
//         <img src={data.imgLink} alt="" />
//         <p>Shop Now</p>
//       </a>
//     </div>
//   );
// }

// export default CategoryCard;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Category.css";

// function CategoryCard({ data }) {
//   return (
//     <div className="category">
//       <Link to={'/catagory/${date.name}'}>
//         <span>
//           <h2>{data?.title}</h2>
//         </span>
//         <img src={data?.imgLink} alt="" />
//         <p>Shop Now</p>
//       </Link>
//     </div>
//   );
// }

// export default CategoryCard;


import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

function CategoryCard({ data }) {
  return (
    <div className="category">
      <Link to={`/category/${data.name}`}>
        {" "}
        {/* Fixed template string and path typo */}
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
