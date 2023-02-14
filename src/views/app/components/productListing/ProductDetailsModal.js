import { useState } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import  ProductEnquiryModal from "./ProductEnquiryModal";

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
        onHide={() => setModalShow1(false)} />
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
                        className="img-fluid w-100 h-25-rem" />
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

export default ProductDetailsModal