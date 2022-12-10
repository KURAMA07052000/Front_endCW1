import React, { useState } from "react";
import FetchNutrition from "./FetchNutrition";
import OrderContext from "./OrderContext";
import OrderSummary from "./OrderSummary";
import SubmitOrder from "./SubmitOrder";
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
      <h2>Recipes</h2>


      <div className="cards">
        {items.map((item) => (
          <div className="card card-3" key={item.id} onClick={(e) => handleClick(e, item.name)}>

            <h2 className="card__title">{item.name}</h2>
            <div className="card_description">
              
            <FetchNutrition query={item.name} />
            </div>
            <p className="card__apply">
              <a className="card__link" href="#">Add to Cart <i className="fas fa-arrow-right"></i></a>
            </p>
          </div>
        ))}

      </div>

    </>
  );
};
export default MenuItems;
