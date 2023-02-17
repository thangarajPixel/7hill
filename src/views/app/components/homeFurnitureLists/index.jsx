import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
// import axios from "axios";

const HomeFurnitureLists = () => {
  const category = useSelector((state) => state.allMenu.value);
  const [homeFurniture, setHomeFurniture] = useState("");
  useEffect(() => {
    let homeFurn = category?.filter((item) => item.slug === "home-furniture");
    homeFurn &&
      homeFurn.forEach((item) => {
        setHomeFurniture(item.child);
      });
  }, [category]);
  
  return (
    <>
      <section className="orange-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={6}>
              <h2 className="heading2 mar-bot-20 text-center">
                Our Range of Home Furniture to Make your Aesthetic
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {homeFurniture &&
              homeFurniture?.map((product, i) => (
                <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                  <Link
                    to={`/home-furniture/${product.slug}/`}
                    className="product-list"
                  >
                    <div className="blog-img">
                      <LazyLoadImage
                        src={product.image}
                        alt=""
                        className="img-fluid w-100 h-15-rem"
                      />
                    </div>
                    <div className="product-list-content">
                      <h3>
                        {product.name}
                        <span>
                          <BsArrowRight />
                        </span>
                      </h3>
                    </div>
                  </Link>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeFurnitureLists;
