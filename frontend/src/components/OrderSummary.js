import React, { useContext } from "react";
import OrderContext from "./OrderContext";
import './card.css';
import Accordion from "react-bootstrap/Accordion";


export default function OrderSummary() {
  const [order, setOrder] = useContext(OrderContext);
  const removeItem = (e, item) => {
    let updatedOrder = order.filter((element) => {
      return element !== item;
    });
    setOrder(updatedOrder);
  };

  return (
    <>
      <h2>Your Order</h2>

      <Accordion>
        <div className="cards">
          {order.map((item, index) => (
            <Accordion.Item eventKey={index} key={index} style={{border: "none"}} >
              <div className="card card-2" key={item.id} >

                <h2 className="card__title">{item.name}</h2>
                <div className="card_description">

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
