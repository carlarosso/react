import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'


function ItemListContainer ({}) {
  
  
  const [prods, setProds] = useState([]);

  const [loading, setLoading] = useState(true);
   
  const { id } = useParams()
  
   useEffect(() => {

      const bd = getFirestore()
      
      const queryCollection = collection (bd, 'productos') 
      getDocs(queryCollection)
      .then(resp => setProds(resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ) )) )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    }, [])


    useEffect(() => {

      const bd = getFirestore()
      
      const queryCollection = collection (bd, 'productos') 
      const queryFilter = query(queryCollection, where('categoria', '==', 'sweet') )
      getDocs(queryFilter)
      .then(resp => setProds(resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ) )) )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    }, [])



  return (
    <>


  {loading ? (

      <h2 className="loading"> Loading... </h2>

    ) : (

      <ItemList data={prods} />

    )
  }


</>
  )
}


export default ItemListContainer;