import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import OfficeTables from "../../../../assets/images/office-tables.jpg";
// import OfficeSeating from "../../../../assets/images/office-seating.jpg";
// import OfficeSofas from "../../../../assets/images/office-sofas.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const InstitutionalFurnitureTabs = () => {
  const category = useSelector((state) => state.category);
  const [officeFurniture, setOfficeFurniture] = useState("");
  const [schoolFurniture, setSchoolFurniture] = useState("");
  const [hospitalsFurniture, setHospitalsFurniture] = useState("");
  useEffect(() => {
    let institutionalFurn = category?.filter(
      (item) => item.slug === "institutional-furniture"
    );

    let officeFurn = institutionalFurn
      ?.map((item) => item.childCategory)[0]
      ?.filter((item) => item.slug === "for-offices")[0];
    setOfficeFurniture(officeFurn && officeFurn.category);
    
    let schoolFurn = institutionalFurn
    ?.map((item) => item.childCategory)[0]
    ?.filter((item) => item.slug === "for-school")[0];
    setSchoolFurniture(schoolFurn && schoolFurn.category);
    
    let hospitalsFurn = institutionalFurn
    ?.map((item) => item.childCategory)[0]
    ?.filter((item) => item.slug === "for-labs-hospitals")[0];
    setHospitalsFurniture(hospitalsFurn && hospitalsFurn.category);
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
              <Tabs defaultActiveKey="forOffices" id="home-tabs">
                <Tab eventKey="forOffices" title="For Offices">
                  <Row className="justify-content-center">
                    {officeFurniture &&
                      officeFurniture?.map((item, i) => (
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
                <Tab eventKey="forSchools" title="For Schools">
                  <Row className="justify-content-center">
                  {schoolFurniture &&
                      schoolFurniture?.map((item, i) => (
                    <Col xs={12} sm={12} md={6} lg={4} xl={4}  key={i}>
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
                <Tab eventKey="forlabs" title="For Labs & Hospitals">
                  <Row className="justify-content-center">
                  {hospitalsFurniture &&
                      hospitalsFurniture?.map((item, i) => (
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
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InstitutionalFurnitureTabs;
