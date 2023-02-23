import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const ForOfficeFurnitureTabs = ({ product }) => {
  // console.log(product && product.slug);
  const category = useSelector((state) => state.allMenu.value);
  const [officeFurniture, setOfficeFurniture] = useState("");
  // console.log(officeFurniture);
  useEffect(() => {
    let institutionalFurn = category?.filter(
      (item) => item.slug === "institutional-furniture"
    );
    let officeFurn =
      product &&
      product.slug &&
      institutionalFurn
        ?.map((item) => item.child)[0]
        ?.filter((item) => item.slug === product.slug);
    setOfficeFurniture(officeFurn && officeFurn);
  }, [product, category]);
  // console.log(officeFurniture);
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
              <h3 className="text-center">
                {officeFurniture && officeFurniture[0].title}
              </h3>
              <Row className="justify-content-center">
                {officeFurniture &&
                  officeFurniture[0].subChild?.map((item, i) => (
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ForOfficeFurnitureTabs;
