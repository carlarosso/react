import React from "react";
import { useState } from "react";
import "./ItemCount.css";

function ItemCount() {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount(count + 1);
  };

  const handleCountLess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="countContainer">

        <button className="countButton" onClick={handleCountPlus}>+</button>

        <label className="countNumber"> {count} </label>

        <button className="countButton" onClick={handleCountLess}>-</button>
       
         <div>
        
            <button className="addCartBtn"> AGREGAR AL CARRITO </button>
        
         </div>
    
    </div>
  );
}

export default ItemCount;
