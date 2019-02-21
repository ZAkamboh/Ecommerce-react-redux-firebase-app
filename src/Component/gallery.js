import React, { Component } from "react";
import firebase from "../firebase";
import Navbar from "./Navbar"
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataa: "",
      fetch: false,
      searchedData: [],
      image:""
    }
  }
  render() {
    return (
      <div className="my-2" >
      {/* <div className="col-10 mx-auto col-md-10 my-2"  >
      
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/dslr.JPG"
      alt="First slide"
      fluid
    />
    <Carousel.Caption>
      <h3></h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/mobile1.JPG"
    
      alt="Third slide"
      rounded
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/mobile2.JPG"
      
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> */}
<Container>
  <Row>
    <Col sm={12}>
    
    <Carousel>
  <Carousel.Item>
 
  <img src="http://movers.com.pk/wp-content/uploads/2015/12/slide-image-new-0055.jpg"   className="d-block w-100" style={{width: "900px", height: "657px", left: "-126px", top: "0px"}}/>
    <Carousel.Caption>
      <h3></h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/mobile1.JPG"
    
      alt="Third slide"
      rounded
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/mobile2.JPG"
      
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    
    </Col>
    
  </Row>

</Container>;
<section className="global-hero top-hero tc-animate-me delayed-slow" data-animation="fadeIn">
<div className="container1170 text-center white tc-fade-in delayed-slow">
<h2>The Best eCommerce Platform for SEO</h2>
<h3>Unlimited plans starting at $19/month. No transaction fees.</h3>
</div>
</section>
</div>
      
    );
  }
}
