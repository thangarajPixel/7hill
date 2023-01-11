import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Link } from "react-router-dom";
import "./style.css";
import { FiPhone } from 'react-icons/fi';
import { RiMapPinLine } from 'react-icons/ri';
import { BsArrowUp } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';
import ListGroup from 'react-bootstrap/ListGroup';

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {

    return (
      <footer>
        <BrowserRouter>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <h5>Reach Us at</h5>
                <p className="footer-text1"><RiMapPinLine /> 1/183, Sri Selvavinayagar Nagar, <br/>Behind Don Bosco School, <br/>Payasampakkam Village, <br/>Red Hills, Chennai – 600 052.</p>
                <p className="footer-text1"><Link rel="noopener noreferrer" onClick={() => openInNewTab('tel:+918881381388')} > <FiPhone /> +91 88813 81388</Link></p>
                <p className="footer-text1"><Link rel="noopener noreferrer" onClick={() => openInNewTab('mailto:info@7hillfurniture.com')} > <TfiEmail /> info@7hillfurniture.com</Link></p>
                <ListGroup>
                      <ListGroup.Item>
                        <Link rel="noopener noreferrer" onClick={() => openInNewTab('/')} >
                          <AiOutlineInstagram />
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link rel="noopener noreferrer" onClick={() => openInNewTab('/')} >
                          <RiLinkedinFill />
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link rel="noopener noreferrer" onClick={() => openInNewTab('/')} >
                          <RiTwitterFill />
                        </Link>
                      </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col xs={12} sm={12} md={6} lg={2} xl={2}>
              <h5>Quick Links</h5>
                <div className="footer-links">
                  <Link to="/" >Home</Link>
                  <Link to="/" >Products</Link>
                  <Link to="/" >About Us</Link>
                  <Link to="/" >Dealers</Link>
                  <Link to="/" >Infrastructure</Link>
                  <Link to="/" >Blogs</Link>
                  <Link to="/" >Careers</Link>
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <h5>Home Furniture</h5>
                <div className="footer-links home-furniture">
                  <Link to="/" >Beds</Link>
                  <Link to="/" >Sofas & Armchairs</Link>
                  <Link to="/" >Dining Tables</Link>
                  <Link to="/" >Dining Chairs</Link>
                  <Link to="/" >Side Table</Link>
                  <Link to="/" >Center Table</Link>
                  <Link to="/" >Cupboards</Link>
                  <Link to="/" >TV Units</Link>
                  <Link to="/" >Shoe Racks</Link>
                  <Link to="/" >Pooja Mandapam</Link>
                </div>
            </Col>
            
            <Col xs={12} sm={12} md={6} lg={3} xl={3}>
              <h5>Institutional Furniture</h5>
                <div className="footer-links">
                  <Link to="/" >Office Tables</Link>
                  <Link to="/" >Office Seating</Link>
                  <Link to="/" >Office Sofa</Link>
                  <Link to="/" >School Furniture</Link>
                  <Link to="/" >Lab & Hospital Furniture</Link>
                </div>
            </Col>
          </Row>
          <Row className="footer-bottom">
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <p className="footer-bottom-text1">Copyright &copy; {getCurrentYear()} 7Hill Furniture | All Rights Reserved. Designed By <Link rel="noopener noreferrer" onClick={() => openInNewTab('https://www.pixel-studios.com')} >Pixel Studios</Link></p>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <p className="footer-bottom-text2">
                  <Link to="/" >Privacy Policy</Link>
                  <Link to="/" >Discrimination Policy</Link>
                </p>
            </Col>
          </Row>
        </Container>
        </BrowserRouter>
        <a href="#" class="back-to-top"><BsArrowUp /></a>
      </footer>
    );
}

export default Footer;
