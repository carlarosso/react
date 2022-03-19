import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from '../ItemList/ItemList';


function ItemDetailContainer ({}) {

  const [prodDetail, setProds] = useState([]);

  
    useEffect(() => {
      getFetch
        .then((resp) => setProds(resp.find(prodDetail => prodDetail.id)))
        .catch((err) => console.log(err))
        .finally(() => console.log("finalización"));
    }, []);


  return (
    <>
      <ItemDetail prodDetail={prodDetail} />
    </>
  )
}

export default ItemDetailContainer

