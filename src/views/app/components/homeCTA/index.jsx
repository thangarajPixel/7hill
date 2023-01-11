import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

const HomeCTA = () => {

    return (
      <>
        <section className="home-cta-bg">
          <Container>
            <Row className="justify-content-center">
            <Col>
            <h2 className="heading2 text-white">Stay on Top of the <strong className="text-white">Furniture World!</strong></h2>
            <h5 className="text-white mar-bot-30">Join our Dealer network and unlock new benefits</h5>
            <Link to="/" className="orange-btn hover-white">Join us Today <BsArrowRight /></Link>
            </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default HomeCTA;