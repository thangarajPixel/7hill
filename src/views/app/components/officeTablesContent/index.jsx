import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { RiArrowRightSLine } from 'react-icons/ri';

const OfficeTablesContent = () => {

    return (
        <>
          <section>
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={9}>
                <h1 className="heading2 mar-bot-20 text-center">Office Tables</h1>
                <Breadcrumb>
                    <ul>
                        <li><Link to="/home-furniture/">Institutional Furniture</Link></li>
                        <li><RiArrowRightSLine /></li>
                        <li>Office Tables</li>
                    </ul>
                </Breadcrumb>
                <p className="text-center mar-bot-20">Our carefully designed office tables meets the ergonomics standards in order to provide maximum comfort for you & your employees. We at 7Hill aim to create a practical yet inviting environment for employees to use, that enhance productivity and wellness within the workplace.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default OfficeTablesContent;