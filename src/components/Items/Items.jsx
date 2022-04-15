import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "./Item.css";
import { Link } from "react-router-dom";



const Item = ( {prod} ) => {

  const { id, name, img, imgAlt, price, } = prod;

  return (


        <CardGroup>
          <Card className="singleCard, card">
            <Card.Body className="cardBody">
              <Link to={`/detail/${id}`} className="links">    
                  <h2 className="cardTitle">{`${name}`}</h2>


                  <img src={img} alt={imgAlt} className="imgProd"/>

                  <div className="priceProd">{`${price} CHF`}</div>

                    
                    <button className="addCartBtn"> VIEW MORE </button>
                  
                  </Link>
              
              </Card.Body>

            <Card.Footer className="cardFoot" >
            </Card.Footer>

          </Card>
        </CardGroup>


  )
}

export default Item


