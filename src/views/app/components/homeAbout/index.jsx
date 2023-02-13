import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageBg2 from '../../../../assets/images/page-bg-2.png';
import HomeAboutImage1 from '../../../../assets/images/home-about-image1.webp';
import HomeAboutImage2 from '../../../../assets/images/home-about-image2.webp';
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import Slider from "react-slick";

const HomeAbout = () => {


  var settings = {
    autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      slidesToShow: 1,
      dots: true,
      fade: true,
      swipe: true,
      slidesToScroll: 1,
  };

    return (
      <>
        <section className="home-about">
        <img src={PageBg2} alt="" className="rellax page-bg-2 img-fluid" data-rellax-speed="6" />
          <Container>
            <Row>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <h2 className="heading2 mar-bot-20">7Hill Furniture - Your Lifetime Partner</h2>
              <p className=" mar-bot-20">7Hill Furniture is a renewed brand and a unit of Hevea Furniture and Interiors Private Ltd., one of South India’s largest manufacturers of residential and commercial furniture.</p>
              <p className=" mar-bot-20">Quality, commitment, service, innovation & a customer-focused approach are the essential factors that have steered brand Hevea to the position of a leader in the furniture segment.</p>
              <p className=" mar-bot-20">Over the years, Hevea has grown in size and volume. 7Hill Furniture brings to you a distinctive and qualitative product range with world-class products, great customer service, built on eco-friendly values, and nurtured across multiple generations.</p>
              <p className=" mar-bot-20"><strong>7Hill is truly your partner for a lifetime!</strong></p>
              <Link to="/about" className="orange-btn mb-4">Know More <BsArrowRight /></Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Slider {...settings} className="pb-4">
                <img src={HomeAboutImage1} alt="" className="img-fluid" />
                <img src={HomeAboutImage2} alt="" className="img-fluid" />
              </Slider>
            </Col>
            </Row>
          </Container>
        </section>
      </>
    );
}

export default HomeAbout;