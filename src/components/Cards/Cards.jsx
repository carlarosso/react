import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount/ItemCount";
import "./Cards.css";

function Cards() {
  return (
    <div className="cardGroup">
      <CardGroup>
        <Card className="singleCard">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/el-argento.jpg"}
            alt="Desayuno argentino"
            className="imgCard"
          />
          <Card.Body className="cardBody">
            <Card.Title className="cardTitle">El Argento</Card.Title>
          </Card.Body>
          <Card.Footer>
              <ItemCount />
          </Card.Footer>
        </Card>

        <Card className="singleCard">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/marie-antoinette.jpg"}
            alt="Breakfast with cakes"
            className="imgCard"
          />
          <Card.Body className="cardBody">
            <Card.Title className="cardTitle">Marie Antoinette</Card.Title>
          </Card.Body>
          <Card.Footer>
              <ItemCount />
          </Card.Footer>
        </Card>

        <Card className="singleCard">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/willy-wonka.jpg"}
            alt="Chocolate breakfast"
            className="imgCard"
          />
          <Card.Body className="cardBody">
            <Card.Title className="cardTitle">Willy Wonka</Card.Title>
          </Card.Body>
          <Card.Footer>
              <ItemCount />
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Cards;
