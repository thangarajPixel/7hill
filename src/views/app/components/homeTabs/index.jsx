import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import PageBg4 from "../../../../assets/images/page-bg-4.png";
import PageBg6 from "../../../../assets/images/page-bg-6.png";
import { useSelector } from "react-redux";

const HomeTabs = () => {
  const category = useSelector((state) => state.category);
  const [homeFurniture, setHomeFurniture] = useState("");
  const [institutionalFurniture, setInstitutionalFurniture] = useState("");
  useEffect(() => {
    let homeFurn = category?.filter((item) => item.slug === "home-furniture");
    let institutionalFurn = category?.filter(
      (item) => item.slug === "institutional-furniture"
    );
    homeFurn &&
      homeFurn.forEach((item) => {
        setHomeFurniture(item.child);
      });
    institutionalFurn &&
      institutionalFurn.forEach((item) => {
        setInstitutionalFurniture(item.child);
      });
  }, [category]);
  return (
    <>
      <section className="page-bg-5">
        <img
          src={PageBg4}
          alt=""
          id="tab-image1"
          className="rellax page-bg-4 img-fluid"
          data-rellax-speed="6"
        />
        <img
          src={PageBg6}
          alt=""
          id="tab-image2"
          className="rellax page-bg-4 img-fluid"
          data-rellax-speed="6"
          style={{ display: "none" }}
        />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8} xl={5}>
              <h2 className="heading2 mar-bot-30 text-center">
                Our Range of Furniture that Stands the Test of Time
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="home-tabs">
              <Tabs defaultActiveKey="homefurniture" id="home-tabs">
                <Tab eventKey="homefurniture" title="Home Furniture">
                  <ListGroup>
                    {homeFurniture &&
                      homeFurniture.map((item, i) => {
                        return (
                          <ListGroup.Item key={i}>
                            <Link to={`/home-furniture/${item.slug}`}>
                              <img src={item.icon} alt="" />
                              {item.title ? item.title : item.name}
                            </Link>
                          </ListGroup.Item>
                        );
                      })}
                  </ListGroup>
                </Tab>
                <Tab eventKey="institfurniture" title="Institutional Furniture">
                  <ListGroup>
                    {institutionalFurniture &&
                      institutionalFurniture.map((item, i) => {
                        return (
                          <ListGroup.Item key={i}>
                    
                            <Link to={`/institutional-furnitures/${item.slug}`}>
                              <img src={item.icon} alt="" />
                              {item.title ? item.title : item.name}
                            </Link>
                          </ListGroup.Item>
                        );
                      })}
                  </ListGroup>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeTabs;
