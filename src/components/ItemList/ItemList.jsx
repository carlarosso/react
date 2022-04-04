import Item from "../Items/Items";
import { memo } from "react";


const ItemList = memo (
    ({data}) => {
    
    
      return (
        <div className="cardGroup ">
          
          {data.map((prod) => <Item key={prod.id} prod={prod} /> )}
    
    
        </div>
      )
    } 
  ) 
  

export default ItemList 