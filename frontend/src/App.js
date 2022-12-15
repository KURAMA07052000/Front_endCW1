import React from "react";
import FetchData from "./components/FetchData";
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutUs } from "./components/About Us";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
      <Navbar />
      <FetchData />
      <AboutUs />
      <section style={{ marginTop: "100px" }}><Footer /></section>
    </>
  );
}
export default App;