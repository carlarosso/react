import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({prodDetail}) {

  const { name, img, imgAlt, price, description, stock } = prodDetail;


  return (
    <div className="itemDetail">
      <h1 > {name} </h1>
      <img src={img} alt={imgAlt} />
      <p > {price} </p>
      <p > {description} </p>

      <ItemCount  stock={stock} initial= { 1 } />

    </div>
  )
}

export default ItemDetail