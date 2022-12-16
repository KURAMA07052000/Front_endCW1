import React, { useEffect, useState } from "react";
import FetchData from "./FetchNutrition";
import OrderContext from "./OrderContext";
import OrderSummary from "./OrderSummary";
import Accordion from "react-bootstrap/Accordion";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
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

  }, { selectedItems });

  // calculates the average(mean)
  const mean = (x) => {
    let sum = 0;
    let count = 0
    for (let n in x) {
      count++;
      sum = sum + x[n];
    }
    return Math.round(sum / sum)
  }

  return (
    <>


      <Accordion>
        <div className="cards">
          {items.map((item, index) => (
            <Accordion.Item eventKey={index} key={index} style={{ border: "none", backgroundColor: "", background: "none" }}>
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
                <br></br>
                <div className="card_recipe">
                  <Accordion.Header key={item.id}>Recipe:</Accordion.Header>
                  <Accordion.Body>
                    <p style={{ whiteSpace: 'pre-wrap', color: 'ivory' }}> {item.recipe}</p>
                  </Accordion.Body>
                </div>
                <div className="row">
                  <div className="col" style={{ justifyContent: "center" }}>
                    <p style={{ fontWeight: "bold" }}> {item.category}</p>
                  </div>
                  <div className="col">
                    {/* <Typography component="legend">Read only</Typography> */}
                    <Rating name="read-only" value={mean(item.rating)} style={{ float: "right" }} readOnly /> {/* Displays the average of a rating */}
                    {/* <Rating
                      name="simple-controlled"
                      value={mean(item.rating)}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    /> */}
                    <p style={{ color: "white", fontStyle: "oblique" }}>Rating: {mean(item.rating)}</p>

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
