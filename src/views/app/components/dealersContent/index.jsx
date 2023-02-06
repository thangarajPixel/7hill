import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageBg2 from "../../../../assets/images/page-bg-2.png";
import DealersImage from "../../../../assets/images/dealers-image.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DealersSection = () => {
  return (
    <>
      <section className="pb-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={9}>
              <h1 className="heading2 mar-bot-20 text-center">
                Stay on Top of the Furniture World!
              </h1>
              <p className="text-center">
                Become the Dealer and Distributor of South India’s largest solid
                wood manufacturer of furniture that has been in the business for
                80 years with an extensive range of products. - Join our Dealer
                network today and unlock new benefits
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <LazyLoadImage
          src={PageBg2}
          alt=""
          className="rellax dealers-bg1 img-fluid"
          data-rellax-speed="6"
        />
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={7} xl={8}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={10} xl={9}>
                  <h2 className="heading2 mar-bot-20">
                    Benefits Of Being A Hevea Furniture Dealer & Distributor
                  </h2>
                </Col>
              </Row>

              <div className="dealers-list">
                <ListGroup>
                  <ListGroup.Item>
                    <BsCheck2Circle /> Full control over the manufacturing
                    process
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> Online & offline marketing support for
                    dealer & distributor network
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> Training for dealer & distributor network
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> Expert advice & Technical Support
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> Helping and making strategy planning for
                    growth & expansion for all dealers and distributor
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> Sales Support, EMI facilities for end
                    users
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> High Value Ticket business
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> 100 % Billing through dealer &
                    distributor network
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> Different Schemes
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> Online lead generation support
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> Product quality & durability
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsCheck2Circle /> After Sales service support
                  </ListGroup.Item>
                </ListGroup>
                <Link to="/" className="orange-btn mb-4">
                  Enquire Now <BsArrowRight />
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={4}>
              <LazyLoadImage
                src={DealersImage}
                alt=""
                className="img-fluid w-100 mar-top-40"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DealersSection;
