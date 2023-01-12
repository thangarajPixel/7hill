import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Workstations from '../../../../assets/images/workstations.jpg';
import ExecutiveTables from '../../../../assets/images/executive-tables.jpg';
import DirectorTables from '../../../../assets/images/director-tables.jpg';
import ConferenceTables from '../../../../assets/images/conference-tables.jpg';
import MeetingDiscussionTables from '../../../../assets/images/meeting-discussion-tables.jpg';
import ReceptionTables from '../../../../assets/images/reception-tables.jpg';
import FilingCabinets from '../../../../assets/images/filing-cabinets.jpg';
import WoodenMetalStorages from '../../../../assets/images/wooden-metal-storages.jpg';
import ComputerTables from '../../../../assets/images/computer-tables.jpg';
import { BsArrowRight } from 'react-icons/bs';

const OfficeTablesLists = () => {

    return (
        <>
          <section className="orange-bg">
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={6}>
                <h2 className="heading2 mar-bot-20 text-center">Our Range of Office Furniture that Boosts your Productivity</h2>
              </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to="/home-furniture/products/" className="product-list">
                        <div className="blog-img">
                            <img src={Workstations} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="product-list-content">
                            <h3>Workstations <span><BsArrowRight /></span></h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to="/home-furniture/products/" className="product-list">
                        <div className="blog-img">
                            <img src={ExecutiveTables} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="product-list-content">
                            <h3>Executive Tables <span><BsArrowRight /></span></h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to="/home-furniture/products/" className="product-list">
                        <div className="blog-img">
                            <img src={DirectorTables} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="product-list-content">
                            <h3>Director Tables <span><BsArrowRight /></span></h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to="/home-furniture/products/" className="product-list">
                        <div className="blog-img">
                            <img src={ConferenceTables} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="product-list-content">
                            <h3>Conference Tables <span><BsArrowRight /></span></h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to="/home-furniture/products/" className="product-list">
                        <div className="blog-img">
                            <img src={MeetingDiscussionTables} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="product-list-content">
                            <h3>Meeting & Discussion Tables <span><BsArrowRight /></span></h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to="/home-furniture/products/" className="product-list">
                        <div className="blog-img">
                            <img src={ReceptionTables} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="product-list-content">
                            <h3>Reception Tables <span><BsArrowRight /></span></h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to="/home-furniture/products/" className="product-list">
                        <div className="blog-img">
                            <img src={FilingCabinets} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="product-list-content">
                            <h3>Filing Cabinets <span><BsArrowRight /></span></h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to="/home-furniture/products/" className="product-list">
                        <div className="blog-img">
                            <img src={WoodenMetalStorages} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="product-list-content">
                            <h3>Wooden & Metal Storages <span><BsArrowRight /></span></h3>
                        </div>
                    </Link>
                </Col>                
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to="/home-furniture/products/" className="product-list">
                        <div className="blog-img">
                            <img src={ComputerTables} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="product-list-content">
                            <h3>Computer Tables <span><BsArrowRight /></span></h3>
                        </div>
                    </Link>
                </Col>       
               </Row>
            </Container>
          </section>
        </>
    );
}

export default OfficeTablesLists;