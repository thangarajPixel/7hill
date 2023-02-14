import { useState } from "react";
// import ProductDetailImage1 from "../../../../assets/images/product-details-image1.jpg";
// import ProductDetailImage2 from "../../../../assets/images/product-details-image2.jpg";
// import ProductDetailImage3 from "../../../../assets/images/product-details-image3.jpg";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ProductEnquiryResponse } from "../../helpers/FormResponse";
import { API_URL } from "../../../../redux/constant/ApiRoute";

function ProductEnquiryModal(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
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

    fetch(API_URL.PRODUCT_ENQUIRY, requestOptions)
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
                      defaultValue={localStorage.getItem("product_name")}
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

function ProductDetailsModal(props) {
  const [modalShow1, setModalShow1] = useState(false);

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
        {...props}
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
                  {props.product?.gallery?.map((item, i) => {
                    return (
                      <img
                        key={i}
                        src={item}
                        alt=""
                        className="img-fluid w-100 h-25-rem"
                      />
                    );
                  })}
                  {/* <img
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
                  /> */}
                </Slider>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={5}>
                <div>
                  <h3 className="heading3">{props.product.product_name}</h3>
                  {props.product &&
                    props.product.attributes.map((item, i) => {
                      return (
                        <>
                          <h6 className="text-orange heading6 mb-0">
                            {item.title}
                          </h6>
                          <p>{item.items[0].attribute_values}</p>
                        </>
                      );
                    })}
                  {/* <h6 className="text-orange heading6 mb-0">Wood Type</h6>
                  <p>Premium Teak Wood</p>
                  <h6 className="text-orange heading6 mb-0">Bed Size</h6>
                  <p>Queen</p>
                  <h6 className="text-orange heading6 mb-0">Storage Type</h6>
                  <p>Side Storage</p>
                  <h6 className="text-orange heading6 mb-0">Finish Type</h6>
                  <p>Natural</p> */}
                  <p className="text-center">
                    <Button
                      className="view-btn"
                      onClick={() => [
                        setModalShow1(true),
                        props.onHide(),
                        localStorage.setItem("product_name", props.product.product_name),
                      ]}
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

export { ProductDetailsModal, ProductEnquiryModal };
