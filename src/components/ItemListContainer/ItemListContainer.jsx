import React from 'react'
import { useState, useEffect } from "react";
import { getFetch } from '../ItemList/ItemList';
import Item from '../Items/Items';
import './ItemListContainer.css'


function ItemListContainer ({}) {

  const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(true);

  
    useEffect(() => {
      getFetch
        .then((resp) => setProds(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);


  return (
    <>

       <h1>Welcome</h1>

  {loading ? (

    <h2 className="loading"> Loading... </h2>
  ) : (

    prods.map((prod) => (
      <div className="cardGroup" key={prod.id}>

        <Item prod= {prod} />
       
      </div>
    ))
  )}


</>
  )
}


export default ItemListContainer;

