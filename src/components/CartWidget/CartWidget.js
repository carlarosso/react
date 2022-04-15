import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useCartContext } from "../../Context/CartContext";


const ShowItemNumber = () => {
  
  const { cartList, cantidad  } = useCartContext()

  if (cartList) {
 
    return cantidad()

  }

}

const CartWidget = () => {
  return (

  <>

    <span className="cartIcon">
      <FontAwesomeIcon icon={solid('cart-shopping')} />
    </span>


   <ShowItemNumber />

  </>

  );
};

export default CartWidget;
