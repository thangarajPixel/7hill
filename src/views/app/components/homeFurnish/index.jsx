import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import HomeImage1 from '../../../../assets/images/home-image1.jpg';
import HomeImage2 from '../../../../assets/images/home-image2.jpg';
import { BsArrowRight } from 'react-icons/bs';

const HomeFurnish = () => {

    return (
      <>
        <section className="p-0">
          <Container fluid className="p-0">
            <Row className="g-0">                
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="home-furnish">
                    <img src={HomeImage2} alt="" className="img-fluid w-100" />
                    <div className="home-furnish-content">
                        <h3>Are you looking to furnish your office space?</h3>
                        <p className="text-white mar-bot-30 mt-3">We are the one stop solution for your Institutional Furniture requirements, get in touch with us now for Bulk Corporate Enquires</p>
                        <Link to="/" className="orange-btn hover-white">Get in Touch Now <BsArrowRight /></Link>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="home-furnish">
                    <img src={HomeImage1} alt="" className="img-fluid w-100" />
                    <div className="home-furnish-content left-align">
                        <h3>Do you wish to furnish your home to suit your bespoke needs</h3>
                        <p className="text-white mar-bot-30 mt-3">We are the one stop solution for your Home Furniture requirements, get in touch with us now for Bulk Enquires</p>
                        <Link to="/" className="orange-btn hover-white">Get in Touch Now <BsArrowRight /></Link>
                    </div>
                </div>
            </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default HomeFurnish;