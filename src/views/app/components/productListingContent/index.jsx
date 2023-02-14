import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";


const BedsContent = ({product}) => {
  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={9}>
              <h1 className="heading2 mar-bot-20 text-center capitalize">{product && product.name}</h1>
              <Breadcrumb>
                <ul>
                  <li>
                    <Link to="/home-furniture/">Home Furniture</Link>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                  </li>
                  <li className="capitalize">{product && product.name}</li>
                </ul>
              </Breadcrumb>
              <p className="text-center mar-bot-20">
                {
                  product && product.description
                }
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BedsContent;
