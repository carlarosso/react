import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'


// ARRAY DE OBJETOS 

const productos = [
  { id: '1',
  name: "El Argento",
  img: "el-argento.jpg",
  imgAlt : "Argentinian breakfast",
  categoria: "sweet",
  stock: 12,
  price: 15,
  description: "Classic argentinian breakfast"
  },

  { id: '2',
  name: "Marie Antoinette",
  img: "/marie-antoinette.jpg",
  imgAlt : "Argentinian breakfast",
  categoria: "sweet",
  stock: 10,
  price: 18,
  description: "Let them eat cake"
  },

  { id: '3',
  name: "Willy Wonka",
  img: "/willy-wonka.jpg",
  imgAlt : "Argentinian breakfast",
  categoria: "savory",
  stock: 5,
  price: 13,
  description: "Full of chocolate"
  },
  
]

//PROMESA 

export const getFetch = new Promise ((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout (() => {
      resolve(productos)
    }, 2000);
  } else {
    reject(console.log("error 404"))
  }
})





// FUNCION

function ItemListContainer ({}) {
  
  
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams()
  
    useEffect(() => {
      if (id) {
        getFetch
          .then((resp) => setProds(resp.filter(prod => prod.categoria === id)))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      } else {
        getFetch
          .then((resp) => setProds(resp))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }
    }, [id])


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