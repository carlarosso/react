import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import './cart.css'

const Cart = () => {

  const { cartList, emptyCart  } = useCartContext()


  return (
    <div className='cart'>


    <h1> Productos seleccionados </h1>

{/*     <div> { cartList.map(prod => <div key={prod.id} > name: {prod.name} cantidad: {prod.count} </div> )} </div>  */}   


    <button onClick={ emptyCart } className="addCartBtn" > EMPTY CART </button>


    </div>
  )
}

export default Cart