import React from 'react'
import './ItemListContainer.css'


export const ItemListContainer = ( {saludo} ) => {
  return (
    <div className='containerPropMsg'>
        <p className='prompMsg'> {saludo} </p>
    </div>
  )
}


export default ItemListContainer;

