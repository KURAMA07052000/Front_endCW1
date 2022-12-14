import React, { useEffect, useState } from "react";
import FetchData from "./FetchNutrition";
import OrderContext from "./OrderContext";
import OrderSummary from "./OrderSummary";
import Accordion from "react-bootstrap/Accordion";
import Ratings from "./Ratings";
import './card.css';



const MenuItems = ({ items }) => {

  let stored;

  //Allows for the storage of local data
  if (localStorage.getItem('item') !== null) {
    stored = JSON.parse(localStorage.getItem('item'))
    console.log(stored)
  }
  else {
    stored = []
  }
  const [selectedItems, setSelectedItems] = useState(stored);
  const handleClick = (e, selectedItem) => {
    let newState = [...selectedItems, selectedItem];
    setSelectedItems(newState);
    console.log(selectedItems);
  };

  // save selected menu items into local storage
  useEffect(() => {
    if (selectedItems !== 0) {
      localStorage.setItem('item', JSON.stringify(selectedItems));
    }

  }, [selectedItems]);


  return (
    <>

      <div className="cards">
        {/* Renders cards according to the item ID */}
        {items.map((item, index) => (

          <div className="card card-4" key={item.id} >
            
            <h2 className="card__title" style={{color: "black", fontWeight: "bold"}}>{item.name}</h2>
            <br></br>
            <Accordion>
              <Accordion.Item eventKey={index} key={index} style={{ border: "none", background: "none"}}>
                <Accordion.Header key={item.id}>Ingredients:</Accordion.Header>
                <Accordion.Body>
                  <p style={{ textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>{item.ingredients}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <br></br>
            <div className="card_description">
              <Accordion>
                <Accordion.Item eventKey={index} key={index} style={{ border: "none", backgroundColor: "", background: "none" }}>
                  <Accordion.Header key={item.id}>Nutritional Information:</Accordion.Header>
                  <Accordion.Body>
                    <p style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}}><FetchData query={item.name} /></p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </div>
            <br></br>
            <div className="card_recipe">
              <Accordion>
                <Accordion.Item eventKey={index} key={index} style={{ border: "none", backgroundColor: "", background: "none" }}>
                  <Accordion.Header key={item.id}>Recipe:</Accordion.Header>
                  <Accordion.Body>
                    <p style={{ whiteSpace: 'pre-wrap', color: 'ivory', backgroundColor: 'rgba(0, 0, 0, 0.5)', margin: '' }}> {item.recipe}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="row">
              <div className="col" style={{ justifyContent: "center" }}>
                <p style={{ fontWeight: "bold"}}> {item.category}</p>
              </div>
              <div className="col">

                <Ratings starRating={item}></Ratings>

              </div>
            </div>
            <br></br>
            <p className="card__apply">
              <a className="card__link" onClick={(e) => handleClick(e, item)}>Add to Cart<i className="fas fa-arrow-right"></i></a>
            </p>
          </div>

        ))}

      </div>


      <br></br>
      {/* Renders selected items using OderSummary.js */}
      <div><OrderContext.Provider value={[selectedItems, setSelectedItems]}>
        <section ><div><OrderSummary /></div></section>
      </OrderContext.Provider></div>
    </>
  );
};
export default MenuItems;
