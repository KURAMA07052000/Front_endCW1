import React, { useEffect, useState, useCallback } from "react";
import MenuItems from "./MenuItems";


const FetchData = () => {
  const [foods, setFoods] = useState([{
    id: "",
    name: "",
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


 // const FetchNutrition = ({ query }) => {
   // const [nutrition, setNutrition] = useState({
  //      sugar_g: " ",
   //     fiber_g: " ",
   //     serving_size_g: " ",
    //    sodium_mg: " ",
    //    name: " ",
   //    potassium_mg: " ",
    //    fat_saturated_g: " ",
    //    fat_total_g: " ",
    //    calories: " ",
    //    cholesterol_mg: " ",
    //    protein_g: " ",
   //     carbohydrates_total_g: " ",
   // });
   
  //  const fetchNutrition = useCallback(() => {
   //     const url =
   //         "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
   //    console.log(url);
   //     const options = {
     //       method: "GET",
     //       headers: {
     //           "X-RapidAPI-Key": "7cb8ef39eamshd33244298f0bd8bp1b9a3djsn148fa3c9ce98",
     //           "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
     //       },
      //  };
    //    fetch(url, options)
   //         .then((response) => response.json())
     //       .then((incomingData) => {
   //             console.log(incomingData);
    //            if (incomingData.items.length !== 0)
    //                setNutrition(incomingData.items[0]);
     //       })
   //         .catch((err) => console.error(err));
  //  }, [query]);
  //  useEffect(() => {
    //    fetchNutrition();
  //  }, [fetchNutrition, query]);
    
 // };

  
  return (
    <div>
      <MenuItems items={foods} />
      
    </div>
  );
};
export default FetchData;
