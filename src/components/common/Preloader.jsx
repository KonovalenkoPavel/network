import React from "react";
// import loader from "../../assets/images/loader.gif";
import PreloaderCSS from "./PreloaderCSS.module.css";

const Preloader = () => {
  return <div className={PreloaderCSS.preloader}></div>;
};

export default Preloader;

// const Preloader = () => {
//   return (
//     <div>
//       <img src={loader} alt="loader" />
//     </div>
//   );
// };

// export default Preloader;
