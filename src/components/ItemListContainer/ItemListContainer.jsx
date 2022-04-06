import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'


function ItemListContainer () {
  
  
  const [prods, setProds] = useState([]);

  const [loading, setLoading] = useState(true);

    
  const {prodCategoria} = useParams()
  
  useEffect(() => {
    

    async function getAll() {
      
      try {
        const db = getFirestore()
        const queryCollection =  collection(db, 'productos')
        
        const filterQuery = prodCategoria ? query(queryCollection, where('categoria', '==', prodCategoria)) : queryCollection

        
          const response = await getDocs(filterQuery)
          setProds(response.docs.map( prod => ({ id: prod.id, ...prod.data() }) ));
          setLoading(false);

      } catch (error) {
        
      }
            
    }

    getAll();

  }, [prodCategoria])





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