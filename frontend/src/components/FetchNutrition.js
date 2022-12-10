import React, { useEffect, useState, useCallback } from "react";
import MenuItems from "./MenuNutritionItems";
const FetchData = ({ query }) => {
    const [nutrition, setNutrition] = useState({
        sugar_g: " ",
        fiber_g: " ",
        serving_size_g: " ",
        sodium_mg: " ",
        name: " ",
        potassium_mg: " ",
        fat_saturated_g: " ",
        fat_total_g: " ",
        calories: " ",
        cholesterol_mg: " ",
        protein_g: " ",
        carbohydrates_total_g: " ",
    });
    const fetchData = useCallback(() => {
        const url =
            "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
        console.log(url);
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "59a1ed6959mshd3995aae4929d99p14e246jsnd8b7b3daa451",
                "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
            },
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData);
                if (incomingData.items.length !== 0)
                    setNutrition(incomingData.items[0]);
            })
            .catch((err) => console.error(err));
    }, [query]);
    useEffect(() => {
        fetchData();
    }, [fetchData, query]);
    return (
        <div>
            <MenuItems item={nutrition} />
        </div>
    );
};
export default FetchData;