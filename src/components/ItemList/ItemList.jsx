import React from "react";
import { useState, useEffect } from "react";
import { getFetch } from "../Items/Items";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemList.css";


const ItemList = () => {
  
    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(true);

  
    useEffect(() => {
      getFetch
        .then((resp) => setProds(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);
  

    return (
      <>
  
        {loading ? (
          <h2 className="loading"> Loading... </h2>
        ) : (
          prods.map((prod) => (
            <div className="cardGroup" key={prod.id}>
              <CardGroup>
                <Card className="singleCard, card">
                  <Card.Body className="cardBody">
                      <h2 className="cardTitle">{`${prod.name}`}</h2>
  
  
                    <img src={prod.img} alt={prod.imgAlt} className="imgProd"/>
  
                   <span className="priceProd">{`${prod.price}`}</span>
                  </Card.Body>
  
                  <Card.Footer className="cardFoot" >
                    <ItemCount  stock="10" initial="1" onAdd="Su cantidad seleccionada es"/>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </div>
          ))
        )}
      </>
    );
  };

export default ItemList;
