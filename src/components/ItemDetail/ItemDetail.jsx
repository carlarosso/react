import './ItemDetail.css'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ( {prodDetail} ) => {

  const { name, img, imgAlt, price, description, stock } = prodDetail;

   const {addItem, cartList } = useCartContext()

   const [buttonType, setButtonType] = useState('buttonInit')


   // FUNCION ONADD

   const onAdd = (  ) => {
     
    const findProd = cartList.find((prod) => prod.id === prodDetail.id)

    if (findProd) {

     console.log( "hola" ) 

    } 


    addItem({ ...prodDetail, cartList }) 
    
   
    // CAMBIO DE ESTADO

    setButtonType('cartButton')

  }
  




  
  // NUEVA VISTA A PARTIR DEL CAMBIO DE ESTADO
  
  const GoCart = () => {
    return <>
  
    <p> You have selected x cant </p>
  
    <Link to='/cart'>
    
    <button className="addCartBtn"> GO TO CART </button> 
  
    </Link>
  
    <Link to='/'>
    
    <button className="addCartBtn"> CONTINUE SHOPPING </button> 
  
    </Link>
  
    </>
  }


  



  const ItemData = () => {
    return <>
    
    <div className='itemDetail'>

                      
                        
        <h1 className='itemTitle'> {name} </h1>
        <img src={img} alt={imgAlt} className="detailImg"/>
        <p > {price} CHF </p>
        <p > {description} </p>

        </div>

        <div className='buttonsCart'>

          { buttonType === 'buttonInit' ?

            <ItemCount  stock={stock} initial= { 1 } onAdd= {onAdd} />
            
            :
            
            <GoCart />
            
          }

       </div>

    </>
  }
  

  
  return (
    <>
      
      <ItemData />
            
    </>

  )

}

export default ItemDetail