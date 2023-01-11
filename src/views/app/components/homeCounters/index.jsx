import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeIcon1 from '../../../../assets/images/home-icon1.png';
import HomeIcon2 from '../../../../assets/images/home-icon2.png';
import HomeIcon3 from '../../../../assets/images/home-icon3.png';
import HomeIcon4 from '../../../../assets/images/home-icon4.png';
import CountUp from 'react-countup';

const HomeCounters = () => {

    return (
      <>
        <section className="page-bg-3">
          <Container>
            <Row className="justify-content-center">
            <Col xs={12} sm={12} md={10} lg={7}>
              <h2 className="heading2 mar-bot-30 text-center">Timeless, Trust-worthy & Top Notch Finish</h2>
              <p className="text-center text-gray">To offer a qualitative product range with memorable products, great customer service, offering eco-friendly values, nurturing social values across multiple generations while developing.</p>
            </Col>
            </Row>
            <Row>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className="home-counter">
                <div className="home-counter-icons">
                  <img src={HomeIcon1} alt="" />
                </div>
                <CountUp duration={5} decimals={3} decimal="," end={300} /> sq ft factory
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className="home-counter">
                <div className="home-counter-icons">
                  <img src={HomeIcon2} alt="" />
                </div>
                ISO, FSC & BSCI Certified
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className="home-counter">
                <div className="home-counter-icons">
                  <img src={HomeIcon3} alt="" />
                </div>
                <CountUp duration={3} end={500} /> + Range of Products
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className="home-counter">
                <div className="home-counter-icons">
                  <img src={HomeIcon4} alt="" />
                </div>
                <CountUp duration={4} end={300} /> + Skilled employees
              </div>
            </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default HomeCounters;