import React from "react";
import "./Slide.css";
import { Carousel } from "react-bootstrap";

const Slides = () => {
  const fImg =
    "https://img.freepik.com/premium-vector/landing-page-offers-brand-sale-cartoon-design_81534-1794.jpg?w=2000";
  const sImg =
    "https://img.freepik.com/premium-vector/old-married-couple-shopping-supermarket-illustration_81534-2385.jpg?w=2000";
  const thImg =
    "https://img.freepik.com/vecteurs-libre/banniere-modele-pour-boutique-ligne-panier-achats-boites-livraison-supermarche-illustration-vectorielle_548887-104.jpg?w=2000";
  const height = {
    height: 652,
  };

  return (
    <section>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 thisImg"
            src={fImg}
            alt="First slide"
            style={height}
          />
          <button className="learn">Learn More</button>
          <Carousel.Caption>
            {/*  <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={sImg}
            alt="Second slide"
            style={height}
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={thImg}
            alt="Third slide"
            style={height}
          />
          <Carousel.Caption>
            {/*  <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Slides;
