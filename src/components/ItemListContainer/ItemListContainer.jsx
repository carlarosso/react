import React from 'react'
import './ItemListContainer.css'


export const ItemListContainer = ( {saludo, titulo} ) => {
  return (
    <div className='containerPropMsg'>
        <p className='title'> {titulo} </p>
        <p className='propMsg'> {saludo} </p>
    </div>
  )
}


export default ItemListContainer;

