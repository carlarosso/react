import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { getFirestore, collection, addDoc } from "firebase/firestore";

import './cart.css'


const Cart = () => {

  const [dataForm, setDataForm] = useState({name: '', email: '', reemail: '', city: '' })
  
  const { cartList, emptyCart, deleteItem, total  } = useCartContext()

  const  [ orderId, setOrderId ] = useState();
  
  
  const [buttonType, setButtonType] = useState('buttonInit')
  
  
  // CUANDO EL CARRITO ESTÁ VACIO
  
  const NoItemCart = () => {
  
    return <>
    
          <h1 className='itemTitle cartTitle'> Your cart is empty </h1>
  
          <div className="cartIconEmpty">
  
              <FontAwesomeIcon icon={solid('frown')} />
  
          </div>
  
          <Link to='/'>
                  
                <button className="addCartBtn"> SHOP NOW </button> 
  
          </Link >
    
    </>
  
  }

 
  // RETURN CUANDO HAY ITEMS EN CARRITO

  const FullCart = () => {
    return <>
              
      <div className='cart'>

                
          <h1 className='itemTitle cartTitle'> SELECTED PRODUCTS </h1>

          <div className='cartList'> { cartList.map(prod => 
            
                <div className='itemCart' key={prod.id} >

                  <div className='oneItemCart'>
                  
                    <img src={prod.img} alt={prod.imgAlt} className="imgProdCart"/>

                    <div className='itemCartDesc'>
                    
                      <h2 className='prodName'> {prod.name} </h2>

                      <div className='qandp'>
                        <p className='cartP'> Quantity: {prod.cantidad} </p>
                        <p className='cartP'> Price: CHF {prod.price} </p>
                      </div>

                    </div>

                  </div>

                  <button onClick={ () => deleteItem(prod.id) } className="addCartBtn" > DELETE ITEM </button>


                </div> )}
                  
          </div>  

          <div>
            <p className='cartTotal'> Total: CHF {total()} </p>
          </div>
          

          <div className='btnsCart'>


          <button onClick={ emptyCart } className="addCartBtn" > EMPTY CART </button>

          <Link to='/'>
            
            <button className="addCartBtn"> CONTINUE SHOPPING </button> 

          </Link >

          <button className="addCartBtn" onClick={() => setButtonType('getForm')}  > FINISH YOUR ORDER </button> 

          </div>


      </div>

              
    </>

  }
  


  
  
  // FORMULARIO
  
  const CreateOrder = () => {

    
    let orden = {}
    
      orden.buyer = dataForm
      orden.totalPrice = total()
      
      orden.items = cartList.map(itemsCart => {

        const id = itemsCart.id
        const name = itemsCart.name
        const price = itemsCart.price * itemsCart.cantidad
      
        return {id, name, price}

      } 
    )
    
    
    const db = getFirestore()
    const queryCollectionItems = collection(db, 'orderReady')
    addDoc(queryCollectionItems, orden)
    .then(({id}) => setOrderId( id ))
    .catch((err) => console.log(err))
    .finally(() => (emptyCart()))
    
    
    // HANDLE CHANGE IN FORM
    
    const handleChange = (e) => {
    
      setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    
      })
    
    }
      
    return <>

          <h1 className="cardTitle"> Your ID is {orderId} </h1>
    
          <form onSubmit={CreateOrder} >

            <input type="text" 
                  name= 'name'
                  placeholder='Enter your name'
                  value={dataForm.name}    
                  onChange={handleChange}
            />

            <input 
                  type="text" 
                  name= 'email'
                  placeholder='Enter your email'
                  value={dataForm.email}  
                  onChange={handleChange}
      
            />

            <input 
                  type="text" 
                  name= 'reemail'
                  placeholder='Re-enter your email'
                  value={dataForm.reemail}  
                  onChange={handleChange}
      
            />
            
            <input 
                  type="text" 
                  name= 'city'
                  placeholder='Enter your city'
                  value={dataForm.city}    
                  onChange={handleChange}
   
            />    

            <br></br>

            <button className='addCartBtn' onClick={ CreateOrder }> Finish your order </button>

          </form>
            

        
     
    </>
  }



  // CHANGE BETWEEN FULL CART || FORM SUB

  const ChangeType = () => {

    return <>

      { buttonType === 'buttonInit' ? (
        
        
        <FullCart />      

      )

      :
        
      
        <CreateOrder />
        

      
      } 

    </>

  }



  // CART RETURN

  return <>
   
   { cartList <= 0 && buttonType === 'buttonInit' ? (

      
      <NoItemCart />      

     )

     :

     ( 

      <ChangeType />

      )
    }

  </>

  
}

export default Cart