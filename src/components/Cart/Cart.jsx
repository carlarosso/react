import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import './cart.css'

const Cart = () => {

  const { cartList, emptyCart, deleteItem  } = useCartContext()


  return (
    <div className='cart'>


    <h1> Productos seleccionados </h1>

    <div> { cartList.map(prod => 
      
           <div key={prod.id} >
             
              <img src={prod.img} alt={prod.imgAlt} className="imgProdCart"/>
              {prod.name} 
              cantidad: {prod.count}

              <button onClick={ () => deleteItem(prod.id) } className="addCartBtn" > DELETE ITEM </button>


            </div> )}
            
    </div>  


    <button onClick={ emptyCart } className="addCartBtn" > EMPTY CART </button>


    </div>
  )
}

export default Cart