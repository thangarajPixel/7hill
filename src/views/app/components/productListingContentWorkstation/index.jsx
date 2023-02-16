import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const WorkstationContent = ({ product }) => {
  // console.log(product);
  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={9}>
              <h1 className="heading2 mar-bot-20 text-center">
                {product.name}
              </h1>
              <Breadcrumb>
                <ul>
                  <li>
                    <Link to="/institutional-furniture">
                      Institutional Furniture
                    </Link>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                  </li>
                  <li>
                    <Link to={`/institutional-furnitures/${product?.industrial &&  product?.industrial[0]?.slug}`}>
                      {product?.industrial && product?.industrial[0]?.title}
                    </Link>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                  </li>
                  <li>{product.name}</li>
                </ul>
              </Breadcrumb>
              {product.description && (
                <p className="text-center mar-bot-20">{product.description}</p>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WorkstationContent;
