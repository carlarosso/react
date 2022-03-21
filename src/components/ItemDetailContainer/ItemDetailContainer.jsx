import { useState, useEffect } from "react";
import { getFetch } from "../ItemListContainer/ItemListContainer";
import ItemDetail from "../ItemDetail/ItemDetail"; 
import { useParams } from "react-router-dom";


function ItemDetailContainer ({}) {

  const [prodDetail, setProds] = useState([]);

  const {prodId} = useParams()
  
    useEffect(() => {
      getFetch
        .then((resp) => setProds(resp.find(prodDetail => prodDetail.id === prodId)))
        .catch((err) => console.log(err))
        .finally(() => console.log("finalización"));
    }, []);



  return (

    <div style={{backgroundColor: '#282c34'}} >
      <ItemDetail prodDetail={prodDetail} />
    </div>
  )
}

export default ItemDetailContainer

