import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import "./Cards.css";

function Cards( {titleCard, cardImg} ) {
  return (
    <>
      
      <CardGroup className="cardGroup">

        <Card className="singleCard">

          <Card.Img src={cardImg} className="imgCard" />


          <Card.Body className="cardBody">
            
            <Card.Title className="cardTitle"> {titleCard} </Card.Title>

          </Card.Body>


          <Card.Footer className="cardFooter">

            <ItemCount stock="10" initial="1" onAdd="Su cantidad seleccionada es" />

          </Card.Footer>

        </Card>

      </CardGroup>

    </>
  );
}

export default Cards;
