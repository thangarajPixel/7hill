import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from 'react-icons/ri';

const WorkstationContent = () => {

    return (
        <>
          <section>
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={9}>
                <h1 className="heading2 mar-bot-20 text-center">Workstations</h1>
                <Breadcrumb>
                    <ul>
                        <li><Link to="/institutional-furniture">Institutional Furniture</Link></li>
                        <li><RiArrowRightSLine /></li>
                        <li><Link to="/institutional-furniture/office-tables">Office Tables</Link></li>
                        <li><RiArrowRightSLine /></li>
                        <li>Workstations</li>
                    </ul>
                </Breadcrumb>
                <p className="text-center mar-bot-20">Every workplace, whether small or large, needs to offer inclusive seating that is comfortable, safe and ensures productivity - you’ll find the perfect workstation you need right here that makes sure you and your employees stay comfortable and also makes sure the ergonomics are on point.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default WorkstationContent;