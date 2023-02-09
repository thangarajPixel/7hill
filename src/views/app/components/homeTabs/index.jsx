import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeFurnitureIcon1 from '../../../../assets/images/home-furniture-icon1.png';
import HomeFurnitureIcon2 from '../../../../assets/images/home-furniture-icon2.png';
import HomeFurnitureIcon3 from '../../../../assets/images/home-furniture-icon3.png';
import HomeFurnitureIcon4 from '../../../../assets/images/home-furniture-icon4.png';
import HomeFurnitureIcon5 from '../../../../assets/images/home-furniture-icon5.png';
import HomeFurnitureIcon6 from '../../../../assets/images/home-furniture-icon6.png';
import HomeFurnitureIcon7 from '../../../../assets/images/home-furniture-icon7.png';
import HomeFurnitureIcon8 from '../../../../assets/images/home-furniture-icon8.png';
import HomeFurnitureIcon9 from '../../../../assets/images/home-furniture-icon9.png';
import HomeFurnitureIcon10 from '../../../../assets/images/home-furniture-icon10.png';
import InstitutionalIcon1 from '../../../../assets/images/institutional-icon1.png';
import InstitutionalIcon2 from '../../../../assets/images/institutional-icon2.png';
import InstitutionalIcon3 from '../../../../assets/images/institutional-icon3.png';
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import PageBg4 from '../../../../assets/images/page-bg-4.png';
import PageBg6 from '../../../../assets/images/page-bg-6.png';


const HomeTabs = () => {

    return (
      <>    
        <section className="page-bg-5">
            <img src={PageBg4} alt="" id="tab-image1" className="rellax page-bg-4 img-fluid" data-rellax-speed="6" />
            <img src={PageBg6} alt="" id="tab-image2" className="rellax page-bg-4 img-fluid" data-rellax-speed="6" style={{display: "none"}} />
          <Container>
            <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8} xl={5}>
              <h2 className="heading2 mar-bot-30 text-center">Our Range of Furniture that Stands the Test of Time</h2>
            </Col>
            </Row>
            <Row>
              <Col className="home-tabs">
                <Tabs defaultActiveKey="homefurniture" id="home-tabs">
                  <Tab eventKey="homefurniture" title="Home Furniture">
                    <ListGroup>
                      <ListGroup.Item>
                        <Link to="/home-furniture/bed/">
                          <img src={HomeFurnitureIcon1} alt="" />
                          Beds
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/home-furniture/sofas-Armchairs">
                          <img src={HomeFurnitureIcon2} alt="" />
                          Sofas & Armchairs
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/home-furniture/dining-tables">
                          <img src={HomeFurnitureIcon3} alt="" />
                          Dining Tables
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/home-furniture/dining-chairs">
                          <img src={HomeFurnitureIcon4} alt="" />
                          Dining Chairs
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/home-furniture/side-table">
                          <img src={HomeFurnitureIcon5} alt="" />
                          Side Table
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/home-furniture/center-table">
                          <img src={HomeFurnitureIcon6} alt="" />
                          Center Table
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/home-furniture/cupboards">
                          <img src={HomeFurnitureIcon7} alt="" />
                          Cupboards
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/home-furniture/tv-units">
                          <img src={HomeFurnitureIcon8} alt="" />
                          TV Units
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/home-furniture/shoe-racks">
                          <img src={HomeFurnitureIcon9} alt="" />
                          Shoe Racks
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/home-furniture/pooja-mandapam">
                          <img src={HomeFurnitureIcon10} alt="" />
                          Pooja Mandapam
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab>
                  <Tab eventKey="institfurniture" title="Institutional Furniture">
                  <ListGroup>
                      <ListGroup.Item>
                        <Link to="/institutional-furniture/for-offices">
                          <img src={InstitutionalIcon1} alt="" />
                          For Offices
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/institutional-furniture/for-schools">
                          <img src={InstitutionalIcon2} alt="" />
                          For Schools
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/institutional-furniture/for-labs-and-hospitals">
                          <img src={InstitutionalIcon3} alt="" />
                          For Labs & Hospitals
                        </Link>
                      </ListGroup.Item>                 
                    </ListGroup>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
}

export default HomeTabs;