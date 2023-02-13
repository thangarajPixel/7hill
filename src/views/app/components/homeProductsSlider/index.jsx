import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeProductsData from "../../data/homeProducts.json";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeProductsSlider = () => {
  var settings = {
    autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      centerMode: true,
      centerPadding: '300px',
      slidesToShow: 1,
      dots: true,
      swipe: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            centerPadding: '100px',
          },
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: '0px',
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
                {HomeProductsData.map((HomeProduct, i) => {
                  return (
                    <div className="collection-slider" key={i}>
                      <LazyLoadImage
                        src={HomeProduct.image}
                        alt=""
                        className="img-fluid w-100"
                      />
                      <div className="collection-slider-content">
                        <h1>
                          {HomeProduct.heading}
                          <span>{HomeProduct.subHeading}</span>
                        </h1>
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
};

export default HomeProductsSlider;
