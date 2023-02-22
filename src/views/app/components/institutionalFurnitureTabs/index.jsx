import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const InstitutionalFurnitureTabs = () => {
  const category = useSelector((state) => state.allMenu.value);
  const [officeFurniture, setOfficeFurniture] = useState("");
  const [schoolFurniture, setSchoolFurniture] = useState("");
  const [hospitalsFurniture, setHospitalsFurniture] = useState("");

  useEffect(() => {
    let institutionalFurn =
      category &&
      category?.filter((item) => item.slug === "institutional-furniture");

    let officeFurn = institutionalFurn.map((item) =>
      // eslint-disable-next-line
      item.child.find((item) => {
        if (item.slug === "for-offices") {
          return item;
        }
      })
    );
    setOfficeFurniture(officeFurn[0]);

    let schoolFurn = institutionalFurn.map((item) =>
      // eslint-disable-next-line
      item.child.find((item) => {
        if (item.slug === "for-school") {
          return item;
        }
      })
    );
    setSchoolFurniture(schoolFurn[0]);

    let hospitalsFurn = institutionalFurn.map((item) =>
      // eslint-disable-next-line
      item.child.find((item) => {
        if (item.slug === "for-labs-hospitals") {
          return item;
        }
      })
    );
    setHospitalsFurniture(hospitalsFurn[0]);

    // let officeFurn = institutionalFurn
    //   ?.map((item) => item?.child[0])
    //   ?.filter((item) => item.slug === "for-offices");

    // let schoolFurn = institutionalFurn?.map((item) => item?.child[1]);
    // ?.filter((item) => item.slug === "for-school");

    // let hospitalsFurn = institutionalFurn
    //   ?.map((item) => item?.child)
    //   ?.filter((item) => item.slug === "for-labs-hospitals");
  }, [category]);

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
                {officeFurniture && (
                  <Tab eventKey="forOffices" title="For Offices">
                    <Row className="justify-content-center">
                      {officeFurniture &&
                        officeFurniture.subChild?.map((item, i) => (
                          <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                            <Link
                              to={`/institutional-furniture/${item.slug}`}
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
                )}
                {schoolFurniture && (
                  <Tab eventKey="forSchools" title="For Schools">
                    <Row className="justify-content-center">
                      {schoolFurniture &&
                        schoolFurniture.subChild?.map((item, i) => (
                          <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                            <Link
                              to={`/institutional-furniture/${item.slug}`}
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
                )}
                {hospitalsFurniture && (
                  <Tab eventKey="forlabs" title="For Labs & Hospitals">
                    <Row className="justify-content-center">
                      {hospitalsFurniture &&
                        hospitalsFurniture.subChild?.map((item, i) => (
                          <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                            <Link
                              to={`/institutional-furniture/${item.slug}`}
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
                )}
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InstitutionalFurnitureTabs;
