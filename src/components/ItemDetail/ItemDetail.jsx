
function ItemDetail({prodDetail}) {

  const { name, img, imgAlt, price, description } = prodDetail;


  return (
    <div>
      <h1> {name} </h1>
      <img src={img} alt={imgAlt} />
      <p> {price} </p>
      <p> {description} </p>

    </div>
  )
}

export default ItemDetail