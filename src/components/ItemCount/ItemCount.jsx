import React from "react";
import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ( { stock, initial, onAdd } ) => {

  const [count, setCount] = useState(initial);

  const handleCountPlus = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleCountLess = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };



    return (
    <div className="countContainer">

        <button className="countButton" onClick={handleCountPlus}>+</button>

        <label className="countNumber"> {count} </label>

        <button className="countButton" onClick={handleCountLess}>-</button>
       
         <div>
         
         <button onClick={onAdd} className="addCartBtn"> ADD TO CART </button> 

         </div>
    
    </div>
  );
}

export default ItemCount;


