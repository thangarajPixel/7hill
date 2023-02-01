import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeProductsData from '../../data/homeProducts.json';
import Slider from "react-slick";
import { Link } from "react-router-dom";

const HomeProductsSlider = () => {

    var settings = {
      autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        dots: true,
        swipe: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            },
          },
        ],
    };
  
      return (
        <>
          <Container fluid className="pad-bot-30">
            <Row className="g-0 align-items-center">
              <Col>
                <div className="home-collection">
                  <Slider {...settings}>
                    {HomeProductsData.map((HomeProduct,i) => {
                      return (
                            <div className="collection-slider" key={i}>
                              <img src={HomeProduct.image} alt="" className="img-fluid w-100" />
                              <div className="collection-slider-content">
                                <h1>{HomeProduct.heading}<span>{HomeProduct.subHeading}</span></h1>
                                <Link to="/home-furniture">Explore the Collection</Link>
                              </div>
                            </div>
                      );
                    })}
                  </Slider>                
                </div>
              </Col>
            </Row>
          </Container>
        </>
      );
  }
  
  export default HomeProductsSlider;