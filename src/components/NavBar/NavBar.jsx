import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (

    <div className="NavContainer">
        
        
      <div className="imgLogo">

        <img src={process.env.PUBLIC_URL + "/LOGO2-min.png"} alt="Brand Logo" className="logoMenu"/>

      </div>


      <div className="containerUlMenu">

        <ul className="nav">

          <li className="navList">

            <a href="#" className="menuA">Home</a>
            <a href="#" className="menuA">About</a>
            <a href="#" className="menuA">Our products</a>
            <a href="#" className="menuA"> <CartWidget/> </a>
            
          </li>

        </ul>

      </div>


    </div>
  );
};

export default NavBar;
