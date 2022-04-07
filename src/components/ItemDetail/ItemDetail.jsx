import './ItemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ( {prodDetail} ) => {

  const { name, img, imgAlt, price, description, stock } = prodDetail;

   const { addItem } = useCartContext()

   const [contador, setContador ] = useState()

   const [buttonType, setButtonType] = useState('buttonInit')


   // FUNCION ONADD, LLAMA A FUNCION EN CARTCONTEXT PARA AGREGAR AL CARRITO

   function onAdd(cant) {

    setContador(cant)
    
    addItem( { ...prodDetail, cantidad: cant } ) 


    console.log(cant)

    
        
     // CAMBIO DE ESTADO

    setButtonType('cartButton')

  }
  





  
  // NUEVA VISTA A PARTIR DEL CAMBIO DE ESTADO - CAMBIO DE BOTONES
  
  const GoCart = () => {
    return <>
  
    <div>
      
       <p className='pCart'> You have selected {contador} combos </p>
    
    </div>

    <div className='btnGoCart'>
  
      <Link to='/cart'>
      
      <button className="addCartBtn"> GO TO CART </button> 
    
      </Link>
    
      <Link to='/'>
      
      <button className="addCartBtn"> CONTINUE SHOPPING </button> 
    
      </Link>

    </div>
  
    </>
  }


  



  const ItemData = () => {
    return <>
    
    <div className='itemDetail'>

        <div>              
          <img src={img} alt={imgAlt} className="detailImg"/>
        </div>

        <div className='textItemDetail'>    

          <h1 className='itemTitle'> {name} </h1>
          <p className='cartPrice'> {price} CHF </p>
          <p className='cartDescription' > {description} </p>  


          <div className='buttonsCart'>

            { buttonType === 'buttonInit' ?

              <ItemCount  stock={stock} initial= { 1 } onAdd= {onAdd} />
              
              :
              
              <GoCart />
              
            }

          </div>

        </div>

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