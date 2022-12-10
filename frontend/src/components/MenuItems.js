import React, { useState } from "react";
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
   
    <div class="cards">
    {items.map((item) => (
    <div class="card card-3" key={item.id} onClick={(e) => handleClick(e, item.name)}>
      
      <h2 class="card__title">{item.name}</h2>
      <div class="card_description">
      {item.description}
      </div>
      <p class="card__apply">
        <a class="card__link" href="#">Add to Cart <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
     ))}
    
    </div>
    </>
  );
};
export default MenuItems;
