import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import './Home.css'

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
      default:
        console.log('error')
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
      default:
        console.log('error')
    }
    handleSelect(index)
  }

  return (
    <Container className="theBase">
      <Row>
        <Col className="firstCol">
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
        <Col className="secondCol">
          <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={null}
            className="textCarou">
            <Carousel.Item>
              <div className="itemBase">
                <h1 className="itemTitle" >Discover innovative ways to decorate</h1>
                <p className="itemDesc">We provide unmatched quality, comfort, and style for property owners across the country.
                Our experts combine form and function in bringing your vision to life. Create a room in your
  own style with our collection and make your property a reflection of you and what you love.</p>
                <Button animated>
                  <Button.Content visible>
                    SHOP NOW
                    </Button.Content>
                  <Button.Content hidden>
                    <img src={window.location.origin + "/testTHRIVE/images/icon-arrow.svg"} />
                  </Button.Content>
                </Button>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="itemBase">
                <h1 className="itemTitle">We are available all across the globe</h1>
                <p className="itemDesc">With stores all over the world, it's easy for you to find furniture for your home or place of business.
                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
  store locator. Any questions? Don't hesitate to contact us today.</p>
                <Button animated>
                  <Button.Content visible>
                    SHOP NOW
                    </Button.Content>
                  <Button.Content hidden>
                    <img src={window.location.origin + "/testTHRIVE/images/icon-arrow.svg"} />
                  </Button.Content>
                </Button>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="itemBase">
                <h1 className="itemTitle">Manufactured with the best materials</h1>
                <p className="itemDesc">Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
                to ensure that every product is made as perfect and as consistent as possible. With three decades of
  experience in this industry, we understand what customers want for their home and office.</p>
                <Button animated>
                  <Button.Content visible>
                    SHOP NOW
                    </Button.Content>
                  <Button.Content hidden>
                    <img src={window.location.origin + "/testTHRIVE/images/icon-arrow.svg"} />
                  </Button.Content>
                </Button>
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="locButton">
            <Button style={{ height: '70px', width: '70px', borderRadius: '0px', margin: '0px' }} color='black' icon='carousel-control-prev-icon' onClick={() => prev(index)} />
            <Button style={{ height: '70px', width: '70px', borderRadius: '0px' }} color='black' icon='carousel-control-next-icon' onClick={() => next(index)} />
          </div>
        </Col>
      </Row>
      <Row className="lastRow">
        <Col>
          <img
            width="98%"
            src={window.location.origin + "/testTHRIVE/images/image-about-dark.jpg"}
            alt="First slide"
          />
        </Col>
        <Col className="lastRowsecondCol">
          <div className="lastRowtext">
            <h1>ABOUT OUR FURNITURE</h1>
            <p style={{ color: "grey", fontSize: '15px' }}>Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.</p>
          </div>
        </Col>
        <Col className="lastRowdesc">
          <img
            width="100%"
            className="styleImg"
            src={window.location.origin + "/testTHRIVE/images/image-about-light.jpg"}
            alt="First slide"
          />
        </Col>
      </Row>
    </Container>
  );
}