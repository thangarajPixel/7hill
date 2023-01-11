import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OfficeTables from '../../../../assets/images/office-tables.jpg';
import OfficeSeating from '../../../../assets/images/office-seating.jpg';
import OfficeSofas from '../../../../assets/images/office-sofas.jpg';
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

const InstitutionalFurnitureTabs = () => {

    return (
      <>    
        <section className="orange-bg">
          <Container>
            <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={8}>
              <h2 className="heading2 mar-bot-30 text-center">Our Range of Institutional Furniture for your Specific Requirements</h2>
            </Col>
            </Row>
            <Row>
              <Col className="home-tabs institutional-tabs">
                <Tabs defaultActiveKey="forOffices" id="home-tabs">
                  <Tab eventKey="forOffices" title="For Offices">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to="/institutional-furniture/office-tables" className="product-list">
                                <div className="blog-img">
                                    <img src={OfficeTables} alt="" className="img-fluid w-100" />
                                </div>
                                <div className="product-list-content">
                                    <h3>Office Tables <span><BsArrowRight /></span></h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to="/" className="product-list">
                                <div className="blog-img">
                                    <img src={OfficeSeating} alt="" className="img-fluid w-100" />
                                </div>
                                <div className="product-list-content">
                                    <h3>Office Seating <span><BsArrowRight /></span></h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to="/" className="product-list">
                                <div className="blog-img">
                                    <img src={OfficeSofas} alt="" className="img-fluid w-100" />
                                </div>
                                <div className="product-list-content">
                                    <h3>Office Sofas <span><BsArrowRight /></span></h3>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="forSchools" title="For Schools">
                  <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to="/" className="product-list">
                                <div className="blog-img">
                                    <img src={OfficeTables} alt="" className="img-fluid w-100" />
                                </div>
                                <div className="product-list-content">
                                    <h3>Office Tables <span><BsArrowRight /></span></h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to="/" className="product-list">
                                <div className="blog-img">
                                    <img src={OfficeSeating} alt="" className="img-fluid w-100" />
                                </div>
                                <div className="product-list-content">
                                    <h3>Office Seating <span><BsArrowRight /></span></h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to="/" className="product-list">
                                <div className="blog-img">
                                    <img src={OfficeSofas} alt="" className="img-fluid w-100" />
                                </div>
                                <div className="product-list-content">
                                    <h3>Office Sofas <span><BsArrowRight /></span></h3>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="forlabs" title="For Labs & Hospitals">
                  <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to="/" className="product-list">
                                <div className="blog-img">
                                    <img src={OfficeTables} alt="" className="img-fluid w-100" />
                                </div>
                                <div className="product-list-content">
                                    <h3>Office Tables <span><BsArrowRight /></span></h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to="/" className="product-list">
                                <div className="blog-img">
                                    <img src={OfficeSeating} alt="" className="img-fluid w-100" />
                                </div>
                                <div className="product-list-content">
                                    <h3>Office Seating <span><BsArrowRight /></span></h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to="/" className="product-list">
                                <div className="blog-img">
                                    <img src={OfficeSofas} alt="" className="img-fluid w-100" />
                                </div>
                                <div className="product-list-content">
                                    <h3>Office Sofas <span><BsArrowRight /></span></h3>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
}

export default InstitutionalFurnitureTabs;