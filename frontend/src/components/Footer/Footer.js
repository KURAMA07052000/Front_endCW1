import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px"}}>
        Front_End Web Dev Course Work 1
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#AboutUs">Mission</FooterLink>
            <FooterLink href="#AboutUs">Vision</FooterLink>
            <FooterLink href="#AboutUs">Acheivments</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#Menu">Menu</FooterLink>
            <FooterLink href="#orderSummary">Your Order</FooterLink>
            <FooterLink href="#AboutUs">About Us</FooterLink>
            
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.linkedin.com/in/kevin-urama-4ba215228/">Kevin Urama</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/kevinurama.vfx/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
           {/*  <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink> */}
            <FooterLink href="https://www.youtube.com/channel/UCAPeRlFhYYpZPYoXiC1rRBw">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;