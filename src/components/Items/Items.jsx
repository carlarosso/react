import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css";
import { Navigate, Route, Routes } from "react-router-dom";


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


