import React from "react";
// import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


const CartWidget = () => {
  return (
    <span className="cartIcon">
      <FontAwesomeIcon icon={solid('cart-shopping')} />
    </span>
  );
};

export default CartWidget;
