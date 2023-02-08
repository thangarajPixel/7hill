import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { RiArrowRightSLine } from "react-icons/ri";

const OfficeTablesContent = ({ productDetails }) => {
  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={9}>
              <h1 className="heading2 mar-bot-20 text-center capitalize">
                {productDetails.name}
              </h1>
              <Breadcrumb>
                <ul>
                  <li>
                    <Link to="/institutional-furniture/">
                      Institutional Furniture
                    </Link>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                  </li>
                  <li className="capitalize">{productDetails.name}</li>
                </ul>
              </Breadcrumb>
              <p className="text-center mar-bot-20">
                {productDetails.description}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OfficeTablesContent;
