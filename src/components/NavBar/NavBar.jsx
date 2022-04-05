import React from "react";
import { NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import "./NavBar.css";


const NavBar = () => {
  return (

    <div className="NavContainer">
        
        
      <div className="imgLogo">

        <NavLink to='/'>
           <img src={process.env.PUBLIC_URL + "/LOGO2-min.png"} alt="Brand Logo" className="logoMenu"/>
        </NavLink>
      
      </div>


      <div className="containerUlMenu">

        <ul className="nav">

          <li className="navList">

          <NavLink to='/' className="menuA"> 
            
            <span className="menuA"> Home </span>
          
          </NavLink>

          
          <NavLink to='categoria/savory' className="menuA"> Savory </NavLink>
          <NavLink to='categoria/sweet' className="menuA"> Sweet </NavLink>
          
             <NavLink to='/detail' element={ <ItemDetailContainer /> }  >  
                      
          </NavLink>

          <NavLink to='/cart' className="menuA"> 
            
              <CartWidget/>
            
          </NavLink>
            
          </li>

        </ul>

      </div>


    </div>
  );
};

export default NavBar;
