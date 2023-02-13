import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImage from '../../../../assets/images/about-image.jpg';

const AboutUsSection = () => {

    return (
        <>
          <section>
            <Container>
              <Row>
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <img src={AboutImage} alt="" className="img-fluid mar-bot-30 image-border" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={5}>
                <h1 className="heading2 mar-bot-20">About 7Hill Furniture <br/>- Your Lifetime Partner</h1>
                <p className=" mar-bot-20">7Hill Furniture is a renewed brand and a unit of Hevea Furniture and Interiors Private Ltd., one of South India’s largest manufacturers of residential and commercial furniture.</p>
                <p className=" mar-bot-20">Quality, commitment, service, innovation & a customer-focused approach are the essential factors that have steered brand Hevea to the position of a leader in the furniture segment.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default AboutUsSection;