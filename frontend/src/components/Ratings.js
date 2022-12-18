import React, { useContext, useState } from "react";
import Rating from "@mui/material/Rating";


const Ratings= ({ starRating }) => {

    // calculates the average(mean)
    const mean = (x) => {
        let sum = 0;
        let reccur = 0
        for (let n in x) {
            reccur++;
            sum = sum + x[n];
        }
        return Math.round(sum / reccur)
    }

    const rated = Math.round(mean(starRating.rating))
    const [star, setStar] = useState(rated);
    const [item, setItem] = useState(starRating);
    const [value, setValue] = useState();


    // post new ratings to the route updateRating in the backend
    async function addRating() {
        await fetch(`http://localhost:3001/updateRating`, {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, *",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .catch((err) => {
                console.log(err)
            });
    };

    return (
        <>
        {/* show the rating and update onClick */}
            <Rating
                name="simple-controlled"
                value={value}
                defaultValue={mean(item.rating)}
                precision={0.5}
                style={{ float: "right" }}
                onChange={(e) => {
                    setStar(e.target.value)
                    item.rating.push(parseInt(star))
                    setItem(item)
                    addRating();
                    setValue(e)
                }}
            />
            <p style={{ color: "white", fontStyle: "oblique" }}>Rating: {mean(item.rating)}/5</p>{/* Displays the average of a rating as a number */}
        </>
    );
};
export default Ratings;

