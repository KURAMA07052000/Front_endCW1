import React, { useContext } from "react";
import OrderContext from "./OrderContext";
import './card.css';
import Accordion from "react-bootstrap/Accordion";


export default function OrderSummary() {
  const [order, setOrder] = useContext(OrderContext);
  const removeItem = (e, item) => {
    let updatedOrder = order.filter((element) => {
      localStorage.removeItem('item', JSON.stringify(element))
      return element !== item;
    });
    setOrder(updatedOrder);
  };

  return (
    <>
      <h2 id="orderSummary">Your Order</h2>

      <Accordion>
        <div className="cards">
          {order.map((item, index) => (
            <Accordion.Item eventKey={index} key={index} style={{border: "none", background: "none"}} >
              <div className="card card-2" key={item.id} >

                <h2 className="card__title">{item.name}</h2>
                <div className="card_description">
                <br></br>
                <p style={{ textAlign: "center", color: "white" }}>{item.ingredients}</p>
                </div>
                <br></br>
                <div className="card_recipe">
                <Accordion.Header key={item.id}>Recipe:</Accordion.Header>
                  <Accordion.Body>
                    <p style={{ whiteSpace: 'pre-wrap', color: 'white' }}> {item.recipe}</p>
                  </Accordion.Body>
                </div>
                <p className="card__delete">
                  <a className="card__link" onClick={(e) => removeItem(e, item)}>Delete <i className="fas fa-arrow-right"></i></a>
                </p>
              </div>
            </Accordion.Item>
          ))}

        </div>
      </Accordion>
      
    </>
  );
}
