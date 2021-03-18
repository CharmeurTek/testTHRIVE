import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
// import desktop-image-hero-1 from '../images/desktop-image-hero-1.jpg'

export default function Home() {
  var [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const next = (indexPrev) => {
    switch (indexPrev) {
      case 0:
        index = 1;
        break;
      case 1:
        index = 2;
        break;
      case 2:
        index = 0;
        break;
    }
    handleSelect(index)
  }

  const prev = (indexPrev) => {
    switch (indexPrev) {
      case 0:
        index = 2;
        break;
      case 1:
        index = 0;
        break;
      case 2:
        index = 1;
        break;
    }
    handleSelect(index)
  }

  return (
    <Container style={{ paddingLeft: '0px', zIndex: '0', float: 'left', maxWidth: 'initial' }}>
      <Row>
        <Col style={{ zIndex: '0', paddingRight: '0px' }}>
          <Carousel fade activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={null}>
            <Carousel.Item>
              <img
                width="1000px"
                src={window.location.origin + "/testTHRIVE/images/desktop-image-hero-1.jpg"}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="1000px"
                src={window.location.origin + "/testTHRIVE/images/desktop-image-hero-2.jpg"}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="1000px"
                src={window.location.origin + "/testTHRIVE/images/desktop-image-hero-3.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col style={{ marginLeft: "0%", zIndex: '1' }}>
          <Carousel fade activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={null}
            style={{ marginLeft: '27%', marginTop: '22%', maxWidth: '395px' }}>
            <Carousel.Item>
              <div style={{ textAlign: 'left' }}>
                <h1 style={{ fontSize: '35px' }} >Discover innovative ways to decorate</h1>
                <p style={{ color: "grey" }}>We provide unmatched quality, comfort, and style for property owners across the country.
                Our experts combine form and function in bringing your vision to life. Create a room in your
  own style with our collection and make your property a reflection of you and what you love.</p>
                <Button>Shop Now <img src={window.location.origin + "/testTHRIVE/images/icon-arrow.svg"}></img></Button>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ textAlign: 'left' }}>
                <h1>We are available all across the globe</h1>
                <p style={{ color: "grey" }}>With stores all over the world, it's easy for you to find furniture for your home or place of business.
                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
  store locator. Any questions? Don't hesitate to contact us today.</p>
                <Button>Shop Now <img src={window.location.origin + "/testTHRIVE/images/icon-arrow.svg"}></img></Button>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ textAlign: 'left' }}>
                <h1>Manufactured with the best materials</h1>
                <p style={{ color: "grey" }}>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
                to ensure that every product is made as perfect and as consistent as possible. With three decades of
  experience in this industry, we understand what customers want for their home and office.</p>
                <Button>Shop Now <img src={window.location.origin + "/testTHRIVE/images/icon-arrow.svg"}></img></Button>
              </div>
            </Carousel.Item>
          </Carousel>
          <div style={{ position: 'absolute', bottom: "0px", left: "0px" }}>
            <Button style={{ height: '70px', width: '70px', borderRadius: '0px', margin: '0px' }} color='black' icon='carousel-control-prev-icon' onClick={() => prev(index)} />
            <Button style={{ height: '70px', width: '70px', borderRadius: '0px' }} color='black' icon='carousel-control-next-icon' onClick={() => next(index)} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}