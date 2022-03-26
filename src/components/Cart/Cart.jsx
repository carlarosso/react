import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const Cart = () => {

  const { cartList, emptyCart  } = useCartContext()

  return (
    <div>
    
     { cartList.map(prod => <div key={prod.id} > name: {prod.name} cantidad: {prod.cant} </div> )}

        <button onClick={ emptyCart }> Empty Cart </button>


    </div>
  )
}

export default Cart