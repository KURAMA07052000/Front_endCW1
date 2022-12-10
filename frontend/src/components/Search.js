
import React, { useState } from "react"; // Importing the useState hook
import MenuItems from "./MenuItems";
import "bootstrap/dist/css/bootstrap.min.css";

function Search({ details }) {
    const [searchField, setSearchField] = useState("");

    // add a function to loop through the list of menu items, check the name of each item and
    //return a list of items whose name includes the current state of the search field
    const filtered = details.filter((entry) => {

        return entry.name.toLowerCase().includes(searchField.toLowerCase());

    });


    const availableList = filtered.filter((entry) => {

        return entry.available === "yes";
    });


    const snackList = availableList.filter((entry) => {
        if (entry.category === "snack") { // if not using the availableList then add && entry.available==="yes"
            return entry;
        }

    });

    const mainList = availableList.filter((entry) => {
        if (entry.category === "main") { // if not using the availableList then add && entry.available==="yes"
            return entry;
        }

    });
    const sideList = availableList.filter((entry) => {
        if (entry.category === "side") { // if not using the availableList then add && entry.available==="yes"
            return entry;
        }

    });
    const drinksList = availableList.filter((entry) => {
        if (entry.category === "drinks") { // if not using the availableList then add && entry.available==="yes"
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
                    onChange={(e) => setSearchField(e.target.value)}  //add an event handler to update the state when the text input changes
                />
            </div>
            <br></br>
            <div>
                <h2>Snacks</h2>
                <MenuItems foodList={snackList} />

            </div>
            <div>
                <h2>Main</h2>
                <MenuItems foodList={mainList} />

            </div>
            <div>
                <h2>Side</h2>
                <MenuItems foodList={sideList} />

            </div>
            <div>
                <h2>Drinks</h2>
                <MenuItems foodList={drinksList} />

            </div>
        </div>
    );
}


export default Search;