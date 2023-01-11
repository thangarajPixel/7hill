import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageBg2 from '../../../../assets/images/page-bg-2.png';
import HomeAboutImage from '../../../../assets/images/home-about-image.jpg';
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';


const HomeAbout = () => {

    return (
      <>
        <section className="home-about">
        <img src={PageBg2} alt="" className="rellax page-bg-2 img-fluid" data-rellax-speed="6" />
          <Container>
            <Row>
            <Col xs={12} sm={12} md={12} lg={6} xl={5}>
              <h2 className="heading2 mar-bot-20">7Hill - Your Lifetime Partner</h2>
              <p className=" mar-bot-20">7 Hill furniture is a renewed brand and unit of Hevea Furniture and Interiors Private Ltd. is one of South India’s largest manufacturer of home furniture, office furniture in Chennai in India. Quality, Commitment, Service, Innovation & Customer focused approach are the essential factors that have helped brand Hevea furniture to attain this position in furniture segment today. Over the years Hevea furniture have grown in size and volumes. Now Hevea furniture is coming up with a new sister concern company i.e 7 Hill furniture to offer a qualitative product range with memorable products, great customer service, offering eco-friendly values, nurturing social values across multiple generations while developing.</p>
              <Link to="/" className="orange-btn mb-4">Know More <BsArrowRight /></Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={7}>
              <img src={HomeAboutImage} alt="" className="img-fluid" />
            </Col>
            </Row>
          </Container>
        </section>
      </>
    );
}

export default HomeAbout;