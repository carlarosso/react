import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"; 
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';




function ItemDetailContainer () {

  const [prod, setProd] = useState({});

  const [loading, setLoading] = useState(true);


  const {prodId} = useParams()
  

    useEffect(() => {

      const bd = getFirestore()
      
      const queryDoc = doc(bd, 'productos', prodId)
      getDoc(queryDoc)
      .then(resp => setProd( { id: resp.id, ...resp.data() } ))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    }, [prodId])


  return (

    <div style={ {backgroundColor: '#282c34'} } >

      { loading ? (

        <h2 className="loading"> Loading product... </h2>

      ) : ( 

        <ItemDetail prodDetail={prod} />

      )

    }

    </div>
  )

}

export default ItemDetailContainer

