import React from "react";
import FetchData from "./components/FetchData";
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar&footer.css';
import { AboutUs } from "./components/About Us";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <FetchData />
      <AboutUs />
    </>
  );
}
export default App;