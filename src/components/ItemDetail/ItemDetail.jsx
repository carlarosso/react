import './ItemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({prodDetail}) => {

  const { name, img, imgAlt, price, description, stock } = prodDetail;


   const {addItem, deleteDuplicates} = useCartContext()



   const onAdd = (cant) => {
    /* //DEFINIR ESTADO QUE CAPUTRE EL EVENTO Y CAMBIE EL BOTON
    */

/*     const [ cantidad, setCantidad ] = useState([])
 */
    
    addItem({ ...prodDetail, cantidad: cant, deleteDuplicates }) 

  }
  


 
  const changeBtn = () => {
    return <Link to='/cart'> 
        </Link>
  } 


  return (
    <>

    {
    
    <div className="itemDetail">
      <h1 > {name} </h1>
      <img src={img} alt={imgAlt} />
      <p > {price} </p>
      <p > {description} </p>


      <ItemCount  stock={stock} initial= { 1 } onAdd= {onAdd} />

      :
    
      <button onClick={ changeBtn } className="addCartBtn"> GO TO CART </button> 


    </div>

    }
      </>




  )
}

export default ItemDetail