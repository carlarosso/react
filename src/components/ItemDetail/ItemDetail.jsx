import './ItemDetail.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({prodDetail}) => {

  const { name, img, imgAlt, price, description, stock } = prodDetail;

   const {addItem, cartList } = useCartContext()

   const [buttonType, setButtonType] = useState('buttonInit')



   const onAdd = ( {count } ) => {
 
    console.log({count})
    
    const findProd = cartList.find((prod) => prod.id === prodDetail.id)

    if (findProd) {

     console.log( "hola" ) 

    } 


    addItem({ ...prodDetail, cartList }) 
    
   
    // CAMBIO DE ESTADO

    setButtonType('cartButton')

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

  
  // PROMISE

  const [loading, setLoading] = useState(true);

  const getItemDetail = new Promise ((resolve, reject) => {
    let condition = true
    if (condition) {
      setTimeout (() => {
        resolve(prodDetail)
      }, 1000);
    } else {
      reject(console.log("error 404"))
    }
  })

  useEffect(() => {
    if (prodDetail) {
      getItemDetail
        .then((resp) => console.log('done'))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } 
  }, [])
 


  return (
    <>

    {loading ? (

              <h2 className="loading"> Loading product... </h2>
              
            ) : ( 

              <ItemData />
            )
    }


</>

  )
}

export default ItemDetail