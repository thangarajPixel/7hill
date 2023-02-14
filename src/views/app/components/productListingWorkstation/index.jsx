import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import WorkstationImage1 from "../../../../assets/images/workstation-image1.jpg";
// import WorkstationImage2 from "../../../../assets/images/workstation-image2.jpg";
// import WorkstationImage3 from "../../../../assets/images/workstation-image3.jpg";
// import WorkstationImage4 from "../../../../assets/images/workstation-image4.jpg";
import ProductDetailImage1 from "../../../../assets/images/product-details-image4.jpg";
import ProductDetailImage2 from "../../../../assets/images/product-details-image5.jpg";
import ProductDetailImage3 from "../../../../assets/images/product-details-image6.jpg";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import Form from "react-bootstrap/Form";

function ProductDetailsModal(props) {
  const [modalShow1, setModalShow1] = React.useState(false);

  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    dots: true,
    swipe: true,
    slidesToScroll: 1,
  };

  return (
    <>
      <ProductEnquiryModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={7}
                className="product-detail-slider"
              >
                <Slider {...settings}>
                  <img
                    src={ProductDetailImage1}
                    alt=""
                    className="img-fluid w-100"
                  />
                  <img
                    src={ProductDetailImage2}
                    alt=""
                    className="img-fluid w-100"
                  />
                  <img
                    src={ProductDetailImage3}
                    alt=""
                    className="img-fluid w-100"
                  />
                </Slider>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={5}>
                <div>
                  <h3 className="heading3">
                    Two Seater Workstation with Fabric Screen - Natural Finish
                  </h3>
                  <h6 className="text-orange heading6 mb-0">Wood Type</h6>
                  <p>Premium Teak Wood</p>
                  <h6 className="text-orange heading6 mb-0">Bed Size</h6>
                  <p>Queen</p>
                  <h6 className="text-orange heading6 mb-0">Storage Type</h6>
                  <p>Side Storage</p>
                  <h6 className="text-orange heading6 mb-0">Finish Type</h6>
                  <p>Natural</p>
                  <p className="text-center">
                    <Button
                      className="view-btn"
                      onClick={() => [setModalShow1(true), props.onHide()]}
                    >
                      Enquire Now
                    </Button>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

function ProductEnquiryModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className="px-3 mob-pad-bot-20">
                <h3 className="heading3">Product Enquiry</h3>
                <Form>
                  <Form.Group className="mar-bot-30" controlId="name">
                    <Form.Control type="text" placeholder="Name *" />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="contactnumber">
                    <Form.Control type="tel" placeholder="Contact Number *" />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="email">
                    <Form.Control type="email" placeholder="Email ID *" />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="companyname">
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="city">
                    <Form.Control type="text" placeholder="City *" />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="product">
                    <Form.Control
                      type="text"
                      value="Two Seater Workstation with Fabric Screen - Natural Finish"
                      disabled
                    />
                  </Form.Group>
                  <p className="text-center mb-0">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

const ProductListingWorkstation = ({ product }) => {
  let products = product?.products;
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);

  return (
    <>
      <ProductDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ProductEnquiryModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />

      <section className="pt-0">
        <Container>
          <Row>
            <Col>
              <p>
                <small className="text-light-gray">
                  Showing {products && products.length ? products && "1" : "0"}{" "}
                  - {products && products.length} Results out of{" "}
                  {products && products.length} Results
                </small>
              </p>
              <Row className="justify-content-center">
                {products &&
                  products?.map((item, i) => {
                    return (
                      <Col xs={12} sm={6} md={6} lg={4} xl={3} key={i}>
                        <div className="products-div">
                          <img
                            src={item.base_image}
                            alt=""
                            className="img-fluid w-100"
                          />
                          <p>{item.product_name}</p>
                          <div className="products-buttons">
                            <Button
                              className="view-btn"
                              onClick={() => setModalShow(true)}
                            >
                              View Details
                            </Button>
                            <Button
                              className="enquire-btn"
                              onClick={() => setModalShow1(true)}
                            >
                              Enquire Now
                            </Button>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                {/* <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage1}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Two Seater Workstation with Fabric Screen - Natural Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage2}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Linear Workstation with Fabric Privacy Screen - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage3}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Four Seater Workstation with Privacy Screen - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage4}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>Two Seater Linear Workstation - Natural Finish</p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage3}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Two Seater - Linear back to back Workstation - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage4}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Linear Workstation with Fabric Privacy Screen - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage2}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Two Seater Workstation with Fabric Screen - Natural Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage1}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Linear Workstation with Fabric Privacy Screen - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col> */}
                {products && products.length > 10 && (
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="text-center"
                  >
                    <Link to="/" className="enquire-btn load-more-btn">
                      Load More
                    </Link>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductListingWorkstation;
