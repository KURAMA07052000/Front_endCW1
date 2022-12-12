
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "bootstrap/dist/css/bootstrap.min.css";



function Search({ details }) {
    const [searchField, setSearchField] = useState("");

    console.log(details);
    const filtered = details.filter((entry) => {

        console.log(entry);
        return entry.name.toLowerCase().includes(searchField.toLowerCase());

    });


    const availableList = filtered.filter((entry) => {

        return entry.available === "yes";
    });


    const snackList = availableList.filter((entry) => {
        if (entry.category === "snack") {
            return entry;
        }

    });

    const mainList = availableList.filter((entry) => {
        if (entry.category === "main") {
            return entry;
        }

    });
    const sideList = availableList.filter((entry) => {
        if (entry.category === "side") {
            return entry;
        }

    });
    const drinksList = availableList.filter((entry) => {
        if (entry.category === "drinks") {
            return entry;
        }

    });


    return (
        <div>

            <div>
                <input
                    type="text"
                    placeholder="Search ..."
                    className="form-control"
                    onChange={(e) => setSearchField(e.target.value)}
                    style={{display: "block", margin: "auto", width: "60%"}}
                />

            </div>
            <br></br>
            <MenuItems items={availableList} />
            <br></br>
            
        </div>
    );
}


export default Search;