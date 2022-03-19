import Item from "../Items/Items";


const ItemList = ({data}) => {


  return (
    <div>
      
      {data.map((prod) => <Item key={prod.id} prod={prod} /> )}


    </div>
    

    )
}

export default ItemList