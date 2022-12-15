import React, { useState } from "react";
import FetchData from "./FetchNutrition";
import OrderContext from "./OrderContext";
import OrderSummary from "./OrderSummary";
import Accordion from "react-bootstrap/Accordion";
import './card.css';



const MenuItems = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleClick = (e, selectedItem) => {
    let newState = [...selectedItems, selectedItem];
    setSelectedItems(newState);
    console.log(selectedItems);
  };


  return (
    <>


      <Accordion>
        <div className="cards">
          {items.map((item, index) => (
            <Accordion.Item eventKey={index} key={index} style={{ border: "none", backgroundColor: "", background:"none" }}>
              <div className="card card-3" key={item.id} >

                <h2 className="card__title">{item.name}</h2>
                <br></br>
                <Accordion.Header key={item.id}>Ingredients:</Accordion.Header>
                  <Accordion.Body>
                    <p style={{ textAlign: "center" }}>{item.ingredients}</p>
                  </Accordion.Body>
                
                <br></br>
                <div className="card_description">

                  <Accordion.Header key={item.id}>Nutritional Information:</Accordion.Header>
                  <Accordion.Body>
                    <p><FetchData query={item.name} /></p>
                  </Accordion.Body>


                </div>
                <div className="row">
                  <div className="col" style={{ justifyContent: "center" }}>
                    {item.category}
                  </div>
                  <div className="col">
                    <p style={{ color: "white", float: "right", fontStyle: "oblique" }}>£{item.price}</p>
                  </div>
                </div>
                <br></br>
                <p className="card__apply">
                  <a className="card__link" onClick={(e) => handleClick(e, item)}>Add to Cart <i className="fas fa-arrow-right"></i></a>
                </p>
              </div>
            </Accordion.Item>
          ))}

        </div>
      </Accordion>
      
      <br></br>
      <div><OrderContext.Provider value={[selectedItems, setSelectedItems]}>
        <section ><div><OrderSummary /></div></section>
      </OrderContext.Provider></div>
    </>
  );
};
export default MenuItems;
