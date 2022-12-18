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

  //fetches data from the already running backend
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
      
     <Search details={foods} />
      {/* <MenuItems items={foods} /> */}
      
    </div>
  );
};
export default FetchData;
