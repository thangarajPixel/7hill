import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductFilters from "../productFilters";
import ProductImage1 from "../../../../assets/images/product-image1.jpg";
import ProductImage2 from "../../../../assets/images/product-image2.jpg";
import ProductImage3 from "../../../../assets/images/product-image3.jpg";
import ProductImage4 from "../../../../assets/images/product-image4.jpg";
import ProductImage5 from "../../../../assets/images/product-image5.jpg";
import ProductImage6 from "../../../../assets/images/product-image6.jpg";
import ProductDetailImage1 from "../../../../assets/images/product-details-image1.jpg";
import ProductDetailImage2 from "../../../../assets/images/product-details-image2.jpg";
import ProductDetailImage3 from "../../../../assets/images/product-details-image3.jpg";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ProductEnquiryResponse } from "../../helpers/FormResponse";

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
                    Natural Finish Orchid Queen Bed - With Side Storage
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
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("company_name", data.company_name);
    formdata.append("city", data.city);
    formdata.append("product_id", data.product_id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://192.168.0.56/7hillAdmin/public/api/product-enquiry",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        ProductEnquiryResponse();
        reset();
      })
      .catch((error) => console.log("error", error));
  };
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
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mar-bot-30" controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Name *"
                      {...register("name", {
                        required: "This is required.",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="contactnumber">
                    <Form.Control
                      type="tel"
                      placeholder="Contact Number *"
                      {...register("mobile", {
                        required: "This is required.",
                        pattern: {
                          value:
                            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                          message: "Not a valid Phone Number",
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="mobile"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email ID *"
                      {...register("email", {
                        required: "This is required.",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid email address!",
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="email"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="companyname">
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      {...register("company_name")}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="company_name"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="city">
                    <Form.Control
                      type="text"
                      placeholder="City *"
                      {...register("city", {
                        required: "This is required.",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="city"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                  </Form.Group>
                  <Form.Group className="mar-bot-30" controlId="product_id">
                    <Form.Control
                      type="text"
                      value="Natural Finish Orchid Queen Bed - With Side Storage"
                      {...register("product_id")}
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

const ProductListing = () => {
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
            <Col xs={12} sm={12} md={3} lg={3} xl={2}>
              <ProductFilters />
            </Col>
            <Col xs={12} sm={12} md={9} lg={9} xl={10}>
              <p>
                <small className="text-light-gray">
                  Showing 1 - 6 Results out of 142 Results
                </small>
              </p>
              <Row className="justify-content-center">
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                  <div className="products-div">
                    <img
                      src={ProductImage1}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>Natural Finish Orchid Queen Bed - With Side Storage</p>
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
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                  <div className="products-div">
                    <img
                      src={ProductImage2}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>Rosewood Finish Garden Bed - With Side Storage</p>
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
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                  <div className="products-div">
                    <img
                      src={ProductImage3}
                      alt="ProductImage"
                      className="img-fluid w-100"
                    />
                    <p>
                      Dark Walnut Finish Magnolia Bed - With Hydraulic Storage
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
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                  <div className="products-div">
                    <img
                      src={ProductImage4}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>Natural Finish Orchid Queen Bed - With Side Storage</p>
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
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                  <div className="products-div">
                    <img
                      src={ProductImage5}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>Rosewood Finish Lily Bed - With Side Storage</p>
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
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                  <div className="products-div">
                    <img
                      src={ProductImage6}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>Dark Walnut Finish Laven Bed - With Hydraulic Storage</p>
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
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductListing;
