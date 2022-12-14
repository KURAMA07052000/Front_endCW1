
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "bootstrap/dist/css/bootstrap.min.css";
import './card.css';



function Search({ details }) {
    const [searchField, setSearchField] = useState("");
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [checkedThree, setCheckedThree] = React.useState(false);
    const [checkedFour, setCheckedFour] = React.useState(false);

    console.log(details);
    const filtered = details.filter((entry) => {

        console.log(entry);
        // filters by either name or ingredients
        return entry.name.toLowerCase().includes(searchField.toLowerCase()) || entry.ingredients.toLowerCase().includes(searchField.toLowerCase());

    });

    // filters out available items from unavailabke items

    const availableList = filtered.filter((entry) => {

        return entry.available === "yes";
    });


    // allert that checkboxes have been checked
    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);

    };

    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    };

    const handleChangeThree = () => {
        setCheckedThree(!checkedThree);
    };

    const handleChangeFour = () => {
        setCheckedFour(!checkedFour);
    };

    // if else statement to select items by category
    const checkBoxFiltered = availableList.filter((entry) => {
        if (checkedOne === true) {
            if (entry.category === "drinks") {
                return entry;
            }

        }
        else if (checkedTwo === true) {
            if (entry.category === "side") {
                return entry;
            }

        }

        else if (checkedThree === true) {
            if (entry.category === "snack") {
                return entry;
            }

        }
        else if (checkedFour === true) {
            if (entry.category === "main") {
                return entry;
            }

        }

        else {
            return availableList
        }


    });

    //checkbox to be used for filtration

    const Checkbox = ({ label, value, onChange }) => {
        return (
            <label>
                <input type="checkbox" checked={value} onChange={onChange} />
                {label}
            </label>
        );
    };



    return (
        <div>
            <div className="searchBG" style={{paddingBottom: "5%", borderBottom: "3px solid black"}}>
            <h2 id="Menu" style={{paddingTop: "3%", fontWeight: "bold", color: "black"}}>Recipes</h2>
      <br></br>
                <div>
                    <input
                        type="text"
                        placeholder="Search ingredients or dish name ..."
                        className="form-control"
                        onChange={(e) => setSearchField(e.target.value)}
                        style={{ display: "block", margin: "auto", width: "60%", borderStyle: "solid" }}
                    />
                </div>

                <br></br>

                <div className="List"  /* style={{margin: "auto", width: "60%", paddingLeft: "130px"}} */ >
                    <div className="row" >
                        {/* displays of checboxes  */}
                        <div className="col" style={{ fontSize: "15px", fontWeight: "bold", color: "ivory" }}>
                            <Checkbox
                                label="Drink"
                                value={checkedOne}
                                onChange={handleChangeOne}
                            />
                        </div>

                        <div className="col" style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>
                            <Checkbox
                                label="Side"
                                value={checkedTwo}
                                onChange={handleChangeTwo}
                            />
                        </div>

                        <div className="col" style={{ fontSize: "13px", fontWeight: "bold", color: "ivory" }}>
                            <Checkbox
                                label="Snack"
                                value={checkedThree}
                                onChange={handleChangeThree}
                            />
                        </div>

                        <div className="col" style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>
                            <Checkbox
                                label="Main"
                                value={checkedFour}
                                onChange={handleChangeFour}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <MenuItems items={checkBoxFiltered} />
            <br></br>

        </div>
    );
}


export default Search;