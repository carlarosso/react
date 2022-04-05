import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './cart.css'


const Cart = () => {

  const { cartList, emptyCart, deleteItem  } = useCartContext()

  const FullCart = () => {
    return <>
              
      <div className='cart'>

                
          <h1 className='itemTitle cartTitle'> Productos seleccionados </h1>

          <div> { cartList.map(prod => 
            
                <div className='itemCart' key={prod.id} >

                  <div className='itemCartDesc'>
                  
                    <img src={prod.img} alt={prod.imgAlt} className="imgProdCart"/>
                    <h2> {prod.name} </h2>
                    <p className='cartP'> cantidad: {prod.count} </p>

                  </div>

                  <button onClick={ () => deleteItem(prod.id) } className="addCartBtn" > DELETE ITEM </button>


                  </div> )}
                  
          </div>  


          <button onClick={ emptyCart } className="addCartBtn" > EMPTY CART </button>

          <Link to='/'>
            
            <button className="addCartBtn"> CONTINUE SHOPPING </button> 

          </Link >



      </div>
              
    </>

  }

  return <>
   
   { cartList <= 0 ? (
   
        <> 
          
        <h1 className='itemTitle cartTitle'> Your cart is empty </h1>

        <div className="cartIconEmpty">

            <FontAwesomeIcon icon={solid('frown')} />

        </div>

        <Link to='/'>
                
                <button className="addCartBtn"> SHOP NOW </button> 

          </Link >
          
          </>
        
     )

     :

     (

      <FullCart />      

      )

    }

  </>

  
}

export default Cart