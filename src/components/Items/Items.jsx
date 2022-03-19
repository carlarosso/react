import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ItemCount from '../ItemCount/ItemCount';
import { Navigate, Route, Routes } from "react-router-dom";

const productos = [
  { id: 1,
  name: "El Argento",
  img: "el-argento.jpg",
  imgAlt : "Argentinian breakfast",
  stock: 12,
  price: 15,
  description: "Classic argentinian breakfast"
  },

  { id: 2,
  name: "Marie Antoinette",
  img: "/marie-antoinette.jpg",
  imgAlt : "Argentinian breakfast",
  stock: 10,
  price: 18,
  description: "Let them eat cake"
  },

  { id: 3,
  name: "Willy Wonka",
  img: "/willy-wonka.jpg",
  imgAlt : "Argentinian breakfast",
  stock: 5,
  price: 13,
  description: "Full of chocolate"
  },
  
]

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


/* function navigateItemDetail() {
  <Route path="" element="<NavigateTo='../ItemDetail/ItemDetail'>"/>
} */


const Item = ( {prod} ) => {

  const { name, img, imgAlt, price, stock } = prod;

  return (


        <CardGroup>
        <Card className="singleCard, card">
          <Card.Body className="cardBody">
              <h2 className="cardTitle">{`${name}`}</h2>


            <img src={img} alt={imgAlt} className="imgProd"/>

          <span className="priceProd">{`${price} CHF`}</span>
          </Card.Body>

          <Card.Footer className="cardFoot" >
            <ItemCount  stock={stock} initial= { 1 } />
          </Card.Footer>

          {/* <button onClick={navigateItemDetail}> See more </button> */}

        </Card>
        </CardGroup>


  )
}

export default Item


