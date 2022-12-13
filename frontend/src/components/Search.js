
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
        return entry.name.toLowerCase().includes(searchField.toLowerCase());

    });


    const availableList = filtered.filter((entry) => {

        return entry.available === "yes";
    });



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

            <div>
                <input
                    type="text"
                    placeholder="Search ..."
                    className="form-control"
                    onChange={(e) => setSearchField(e.target.value)}
                    style={{ display: "block", margin: "auto", width: "60%" }}
                />
            </div>

            <br></br>

            <div className="List"  /* style={{margin: "auto", width: "60%", paddingLeft: "130px"}} */ >
                <div className="row" >
                    
                    <div className="col">
                        <Checkbox
                            label="Drink"
                            value={checkedOne}
                            onChange={handleChangeOne}
                        />
                    </div>
                    
                    <div className="col">
                        <Checkbox
                            label="Side"
                            value={checkedTwo}
                            onChange={handleChangeTwo}
                        />
                    </div>
                    
                    <div className="col">
                        <Checkbox
                            label="Snack"
                            value={checkedThree}
                            onChange={handleChangeThree}
                        />
                    </div>
                    
                    <div className="col">
                        <Checkbox
                            label="Main"
                            value={checkedFour}
                            onChange={handleChangeFour}
                        />
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