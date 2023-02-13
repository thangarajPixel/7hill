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
              <h2 className="heading2 mar-bot-30 text-center">Timelessness, Trust-worthiness & <br/>Top Notch Finish</h2>
              <p className="text-center text-gray">Three things define 7Hill Furniture. It is truly the one-stop destination for wooden masterpieces that come with a 7-year warranty and meet every expectation of yours, for many generations to come.</p>
              <p className="text-center text-gray">Every piece of furniture is an exquisite work of art carved out of teak, rosewood or other rarest and highly expensive quality of wood, based on their age and pedigree. </p>
              <p className="text-center text-gray">7Hill Furniture is built on eco-friendly values with good attention to detail and great emphasis on customer service. </p>
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