import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../../../assets/images/no-product-found.png";
// import { BsArrowRight } from "react-icons/bs";
// import { Link } from "react-router-dom";

const NoProduct = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={7} lg={7} xl={6} className="text-center">
            <LazyLoadImage src={Image} alt="" className="img-fluid" />
            <h1 className="heading2 mar-bot-20 text-center">
              Oops! <small>No Products Found!</small>
            </h1>
            {/* <Link to="/" className="orange-btn">
              Back to Home <BsArrowRight />
            </Link> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NoProduct;
