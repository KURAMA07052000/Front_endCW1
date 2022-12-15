import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../navbar&footer.css';
import logo from "../images/logo.png"

function Navbar() {
  return (
    <>
      <section style={{ marginBottom: "3%" }}>
        <nav class="fill">
          <div class="logo">
            <img class="welcomeimage" src={logo} width="100px" height="100px"></img>
          </div>
          <ul class="navcontent">
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#orderSummary">Your Order</a></li>
            <li><a href="#AboutUs" class="buttonnav">About Us</a></li>
          </ul>

          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </nav>
      </section >
      
    </>
  );
}
export default Navbar;