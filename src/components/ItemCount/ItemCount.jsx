import React from "react";
import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ( { stock, initial, onAdd } ) => {

  const initialFloat = parseFloat(initial)
  const stockFloat = parseFloat(stock)

  const [count, setCount] = useState(initialFloat);



  const handleCountPlus = () => {
    if (count < stockFloat) {
      setCount(count + 1);
    }
  };

  const handleCountLess = () => {
    if (count > initialFloat) {
      setCount(count - 1);
    }
  };

  const onAddClick = () => {
    console.log(` ${onAdd} ${count} `)
  }

  

  return (
    <div className="countContainer">

        <button className="countButton" onClick={handleCountPlus}>+</button>

        <label className="countNumber"> {count} </label>

        <button className="countButton" onClick={handleCountLess}>-</button>
       
         <div>
        
            <button onClick={onAddClick} className="addCartBtn"> AGREGAR AL CARRITO </button>
        
         </div>
    
    </div>
  );
}

export default ItemCount;
