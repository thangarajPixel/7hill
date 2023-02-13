import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import HomeVisionImage from '../../../../assets/images/home-vision-image.jpg';
import DottedBgOrange from '../../../../assets/images/dotted-bg-orange.png';
import { BsArrowRight } from 'react-icons/bs';

const HomeVision = () => {

    return (
      <>
        <section className="page-bg-3 orange">
          <Container>
            <Row className="justify-content-center">                
            <Col xs={12} sm={12} md={12} lg={6} xl={5} className="text-right">
               <img src={DottedBgOrange} alt="" className="img-fluid dotted-bg-orange" />
              <img src={HomeVisionImage} alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={7}>
              <h2 className="heading2 mar-bot-20">The Man. The Idea. The Vision.</h2>
              <p className=" mar-bot-20">One of the leading names in the furniture industry, Shri. Rajendran Elumalai, pioneer in manufacturing of wooden furniture and other wooden products, has time and again elevated wooden craftsmanship to a whole new level with his vast experience, able guidance and inspiring leadership. </p>
              <p className=" mar-bot-20">A veteran in furniture manufacturing, E. Rajendran  is known for his experience and tactful consulting for setting up furniture manufacturing facilities and is an encyclopedia of everything from planning, products, technology and management of furniture manufacturing.</p>
              <p className=" mar-bot-20">Mr. Rajendran has a strong conviction about Teakwood, which he believes is not only a durable raw material, but also something that creates strong family values. Apart from having a good resale value, Rajendran believes that Teakwood’s legacy is one that can be passed down across generations.</p>
              <Link to="/our-team" className="orange-btn">Know More <BsArrowRight /></Link>
            </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default HomeVision;