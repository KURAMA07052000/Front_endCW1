import React, { useEffect, useState, useCallback } from "react";
import MenuItems from "./MenuItems";
import Search from "./Search";


const FetchData = () => {
  const [foods, setFoods] = useState([{
    id: "",
    name: "apple pie",
    price: "",
    category: "",
    available: "",
  }]);

  const fetchData = useCallback(() => {
    const url = "http://localhost:3001/food";
    fetch(url)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData)
        setFoods(incomingData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h2>Recipes</h2>
      <br></br>
     <Search details={foods} />
      {/* <MenuItems items={foods} /> */}
      
    </div>
  );
};
export default FetchData;
