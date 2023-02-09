import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductFilters from "../productFilters";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ProductDetailsModal, ProductEnquiryModal } from "./helpers";
import axios from "axios";
import { API_URL } from "../../../../redux/constant/ApiRoute";

const ProductListing = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [productDetails, setProductDetails] = useState("");

  useEffect(() => {
    getProductDetails();
    // eslint-disable-next-line
  }, [product]);

  const getProductDetails = () => {
    return axios
      .get(`${API_URL.PRODUCTS_BY_SLUG}/${product[0]?.product_url}`)
      .then((res) => {
        setProductDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <ProductDetailsModal
        product={productDetails}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ProductEnquiryModal
        product={productDetails}
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
                  Showing {product.length ? product.length : "0"} -{" "}
                  {product.length} Results out of {product.length} Results
                </small>
              </p>
              <Row className="justify-content-center">
                {product &&
                  product?.map((item, i) => {
                    return (
                      <Col xs={12} sm={6} md={6} lg={4} xl={4} key={i}>
                        <div className="products-div">
                          <img
                            src={item.image}
                            alt={item.description}
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
                {/* <Col xs={12} sm={6} md={6} lg={4} xl={4}>
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
                </Col> */}
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
