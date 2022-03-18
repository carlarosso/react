import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFetch } from "../Items/Items";
import { useState, useEffect } from "react";


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});

  useEffect(() => {
    getFetch
      .then(resp => setProducto(resp.find(prod => prod.id === 2)))
      .catch((err) => console.log(err))
      .finally(() => console.log("finalización"))
  }, []);

 

  return (

        <div className="prodDetail">
            <img src={prod.img} alt={prod.imgAlt} className="imgProd"/>
            <p> {prod.name} </p>
            <p> {prod.price} </p>
            <p> {prod.description} </p> 
        </div>
  ) 
 }

 
export default ItemDetailContainer


/* function ItemDetailContainer() {

  const [producto, setProducto] = useState({});

  useEffect(() => {
    getFetch
      .then(resp => setProducto(resp.find(prod => prod.id === 2)))
      .catch((err) => console.log(err))
      .finally(() => console.log("finalización"))
  }, []);

 

  return (

        <div className="prodDetail">
            <img src={prod.img} alt={prod.imgAlt} className="imgProd"/>
            <p> {prod.name} </p>
            <p> {prod.price} </p>
            <p> {prod.description} </p> 
        </div>
  )


}
 */