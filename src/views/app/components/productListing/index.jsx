import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductFilters from "../productFilters";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProductEnquiryModal from "./ProductEnquiryModal";
import ProductDetailsModal from "./ProductDetailsModal";
import axios from "axios";
import { API_URL } from "../../../../redux/constant/ApiRoute";
import NoProduct from "../../../../layouts/utility/notFound/NoProduct";
import { useSelector } from "react-redux";


const ProductListing = ({ filterMenu }) => {
  // console.log(filterMenu);
  const filterProductsValue = useSelector((state)=> state.getProducts.value)
  let products = filterProductsValue;
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [productDetails, setProductDetails] = useState("");

  const getProductDetails = (item) => {
    return axios
      .get(`${API_URL.PRODUCTS_BY_SLUG}/${item}`)
      .then((res) => {
        setProductDetails(res.data);
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
              <ProductFilters menu={filterMenu} />
            </Col>
            <Col xs={12} sm={12} md={9} lg={9} xl={10}>
              <p>
                <small className="text-light-gray">
                  Showing {products && products.length ? products && "1" : "0"}{" "}
                  - {products && products.length} Results out of{" "}
                  {products && products.length} Results
                </small>
              </p>
              <Row className="justify-content-center">
                {products && products.length !== 0 ? (
                  products &&
                  products?.map((item, i) => {
                    return (
                      <Col xs={12} sm={6} md={6} lg={4} xl={4} key={i}>
                        <div className="products-div">
                          <img
                            src={item.base_image ? item.base_image : item.image }
                            alt=""
                            className="img-fluid w-100"
                          />
                          <p>{item.product_name}</p>
                          <div className="products-buttons">
                            <Button
                              className="viewdetails-btn"
                              onClick={() => {
                                getProductDetails(item.product_url);
                                setModalShow(true);
                              }}
                            >
                              View Details
                            </Button>
                            <Button
                              className="enquire-btn"
                              onClick={() => {
                                localStorage.setItem(
                                  "product_name",
                                  item.product_name
                                );
                                localStorage.setItem(
                                  "product_id",
                                  item.id
                                );
                                getProductDetails(item.product_url);
                                setModalShow1(true);
                              }}
                            >
                              Enquire Now
                            </Button>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                ) : (
                  <NoProduct />
                )}
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

export default ProductListing;
