import './ItemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({prodDetail}) => {

  const { name, img, imgAlt, price, description, stock } = prodDetail;


   const {addItem, deleteDuplicates} = useCartContext()


   const [buttonType, setButtonType] = useState('buttonInit')



   const onAdd = (cant) => {
     
    addItem({ ...prodDetail, cantidad: cant, deleteDuplicates }) 

    setButtonType('cartButton')
    

  }
  
  
  const GoCart = () => {
    return <Link to='/cart'>

     <button className="addCartBtn"> GO TO CART </button> 

    </Link>
  }


 


  return (
    <>

    
    <div className="itemDetail">
      <h1 > {name} </h1>
      <img src={img} alt={imgAlt} />
      <p > {price} </p>
      <p > {description} </p>

        { buttonType === 'buttonInit' ?

          <ItemCount  stock={stock} initial= { 1 } onAdd= {onAdd} />

          :
        
          <GoCart />
      
        }

    </div>
      </>




  )
}

export default ItemDetail