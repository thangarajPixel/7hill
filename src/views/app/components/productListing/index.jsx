import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductFilters from '../../components/productFilters';
import ProductImage1 from '../../../../assets/images/product-image1.jpg';
import ProductImage2 from '../../../../assets/images/product-image2.jpg';
import ProductImage3 from '../../../../assets/images/product-image3.jpg';
import ProductImage4 from '../../../../assets/images/product-image4.jpg';
import ProductImage5 from '../../../../assets/images/product-image5.jpg';
import ProductImage6 from '../../../../assets/images/product-image6.jpg';
import { Link } from "react-router-dom";

const ProductListing = () => {

    return (
        <>
          <section className="pt-0">
            <Container>
              <Row>
                <Col xs={12} sm={12} md={4} lg={3} xl={2}>
                    <ProductFilters />
                </Col>
                <Col xs={12} sm={12} md={8} lg={9} xl={10}>
                    <p><small className="text-light-gray">Showing 1 - 6 Results out of 142 Results</small></p>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                            <div className="products-div">
                                <img src={ProductImage1} alt="" className="img-fluid w-100" />
                                <p>Natural Finish Orchid Queen Bed - With Side Storage</p>
                                <div className="products-buttons">
                                    <Link to="/" className="view-btn">View Details</Link>
                                    <Link to="/" className="enquire-btn">Enquire Now</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                            <div className="products-div">
                                <img src={ProductImage2} alt="" className="img-fluid w-100" />
                                <p>Rosewood Finish Garden Bed - With Side Storage</p>
                                <div className="products-buttons">
                                    <Link to="/" className="view-btn">View Details</Link>
                                    <Link to="/" className="enquire-btn">Enquire Now</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                            <div className="products-div">
                                <img src={ProductImage3} alt="" className="img-fluid w-100" />
                                <p>Dark Walnut Finish Magnolia Bed - With Hydraulic Storage</p>
                                <div className="products-buttons">
                                    <Link to="/" className="view-btn">View Details</Link>
                                    <Link to="/" className="enquire-btn">Enquire Now</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                            <div className="products-div">
                                <img src={ProductImage4} alt="" className="img-fluid w-100" />
                                <p>Natural Finish Orchid Queen Bed - With Side Storage</p>
                                <div className="products-buttons">
                                    <Link to="/" className="view-btn">View Details</Link>
                                    <Link to="/" className="enquire-btn">Enquire Now</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                            <div className="products-div">
                                <img src={ProductImage5} alt="" className="img-fluid w-100" />
                                <p>Rosewood Finish Lily Bed - With Side Storage</p>
                                <div className="products-buttons">
                                    <Link to="/" className="view-btn">View Details</Link>
                                    <Link to="/" className="enquire-btn">Enquire Now</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                            <div className="products-div">
                                <img src={ProductImage6} alt="" className="img-fluid w-100" />
                                <p>Dark Walnut Finish Laven Bed - With Hydraulic Storage</p>
                                <div className="products-buttons">
                                    <Link to="/" className="view-btn">View Details</Link>
                                    <Link to="/" className="enquire-btn">Enquire Now</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                            <Link to="/" className="enquire-btn w-auto px-4">Load More</Link>
                        </Col>
                    </Row>
                </Col>    
               </Row>
            </Container>
          </section>
        </>
    );
}

export default ProductListing;