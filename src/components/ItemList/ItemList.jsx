import Item from "../Items/Items";


const ItemList = ({data}) => {


  return (
    <div className="cardGroup ">
      
      {data.map((prod) => <Item key={prod.id} prod={prod} /> )}


    </div>
    

    )
}

export default ItemList