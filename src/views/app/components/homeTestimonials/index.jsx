import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeTestimonialsData from '../../data/testimonials.json';
import Slider from "react-slick";

const HomeTestimonials = () => {

    var settings = {
        autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          slidesToShow: 1,
          dots: true,
          swipe: true,
          slidesToScroll: 1,
      };

    return (
      <>
        <section className="home-testimonials-bg">
          <Container>
            <Row className="justify-content-center align-items-center">                
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <h2 className="heading2 text-center">What our Customers are Saying</h2>      
                <Slider {...settings}>
                    {HomeTestimonialsData.map((HomeTestimonial,i) => {
                      return (
                              <div className="home-testimonials" key={i}>
                                <p>{HomeTestimonial.content}</p>
                                <h4>{HomeTestimonial.name}</h4>
                                <span>{HomeTestimonial.designation}</span>
                                <img src={HomeTestimonial.image} alt="" />
                              </div>
                      );
                    })}
                  </Slider>         
            </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default HomeTestimonials;