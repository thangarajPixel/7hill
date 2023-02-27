import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const OtherProductsSlider = ({ otherProducts }) => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 4,
    dots: true,
    swipe: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="orange-bg">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h2 className="heading2 text-center">
                Browse our Other Products
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="other-products-slider">
              <Slider {...settings}>
                {otherProducts &&
                  otherProducts.map((item, i) => {
                    return (
                      <Link
                        to={`/${item.parent_slug}/${item.slug}`}
                        className="product-list"
                        key={i}
                      >
                        <div className="blog-img">
                          <img
                            src={item.image}
                            alt=""
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="product-list-content">
                          <h3>
                            {item.name}
                            <span>
                              <BsArrowRight />
                            </span>
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OtherProductsSlider;
