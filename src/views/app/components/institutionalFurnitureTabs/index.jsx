import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";

const InstitutionalFurnitureTabs = () => {
  const institutionalCategory = useSelector(
    (state) => state.institutionalCategory.value
  );
  return (
    <>
      <section className="orange-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={8}>
              <h2 className="heading2 mar-bot-30 text-center">
                Our Range of Institutional Furniture for your Specific
                Requirements
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="home-tabs institutional-tabs">
              <Tabs>
                {institutionalCategory && institutionalCategory.child.map((prod, i) => (
                  <Tab eventKey={prod.slug} title={prod.title} key={i}>
                    <Row className="justify-content-center">
                      {prod.subChild?.map((item, i) => (
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                          <Link
                            to={`/${institutionalCategory.slug}/${item.slug}`}
                            className="product-list"
                          >
                            <div className="blog-img">
                              <img
                                src={item.image}
                                alt=""
                                className="img-fluid w-100 h-15-rem"
                              />
                            </div>
                            <div className="product-list-content">
                              <h3>
                                {item.name}
                                <span>
                                  <BsArrowRight />
                                </span>
                              </h3>
                            </div>
                          </Link>
                        </Col>
                      ))}
                    </Row>
                  </Tab>
                ))}
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InstitutionalFurnitureTabs;
