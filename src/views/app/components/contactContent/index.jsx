import React from "react";
import Container from "react-bootstrap/Container";
import ContactForm from '../contactForm';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiMapPinLine } from 'react-icons/ri';
import { TfiEmail } from 'react-icons/tfi';
import { BsTelephone } from 'react-icons/bs';
import { Link } from "react-router-dom";

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const ContactContent = () => {

    return (
        <>
          <section className="p-0 career-section">
            <Container className="p-0">
              <Row className="g-0">
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="pad-top-bot-100 px-5">
                    <h1 className="heading2 mar-bot-20">Reach Us</h1>
                    <p className="contact-icons"><RiMapPinLine /> 1/183, Sri Selvavinayagar Nagar, <br/>Behind Don Bosco School, <br/>Payasampakkam Village, <br/>Red Hills, Chennai – 600052. <br/>Tamil Nadu, INDIA.</p>
                    <p className="contact-icons"><Link rel="noopener noreferrer" onClick={() => openInNewTab('tel:+918881381388')} > <BsTelephone /> +91 88813 81388</Link></p>
                    <p className="contact-icons"><Link rel="noopener noreferrer" onClick={() => openInNewTab('mailto:info@7hillfurniture.com')} > <TfiEmail /> info@7hillfurniture.com</Link></p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} className="orange-bg">
                <ContactForm />                
              </Col>
              </Row>
            </Container>
          </section>
          <section className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15538.323536415275!2d80.2109917!3d13.188805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1483bdce7a49b8f9!2s7Hill%20Furniture%20Refurbishing!5e0!3m2!1sen!2sin!4v1673514492589!5m2!1sen!2sin"  allowfullscreen="" title="Contact Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </>
    );
}

export default ContactContent;