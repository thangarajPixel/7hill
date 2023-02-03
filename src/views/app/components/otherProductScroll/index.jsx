import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BedImage from '../../../../assets/images/bed.jpg';
import SofasArmchairs from '../../../../assets/images/sofas-armchairs.jpg';
import DinningTables from '../../../../assets/images/dinning-tables.jpg';
import DinningChairs from '../../../../assets/images/dinning-chairs.jpg';
import SideTable from '../../../../assets/images/side-table.jpg';
import CenterTable from '../../../../assets/images/center-table.jpg';
import Cupboards from '../../../../assets/images/cupboards.jpg';
import TvUnits from '../../../../assets/images/tv-units.jpg';
import ShoeRacks from '../../../../assets/images/shoe-racks.jpg';
import PoojaMandapam from '../../../../assets/images/pooja-mandapam.jpg';
import { BsArrowRight } from 'react-icons/bs';

const OtherProductsSlider = () => {

    var settings = {
      autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 4,
        dots: true,
        swipe: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };
  
      return (
        <>
          <section className="orange-bg">
            <Container>
              <Row className="justify-content-center">
                <Col>
                    <h2 className="heading2 text-center">Browse our Other Products</h2>
                </Col>
              </Row>
              <Row>
                <Col className="other-products-slider">
                    <Slider {...settings}>
                        <Link to="/home-furniture/bed" className="product-list">
                            <div className="blog-img">
                                <img src={BedImage} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>Bed <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                        <Link to="/home-furniture/sofas-armchairs" className="product-list">
                            <div className="blog-img">
                                <img src={SofasArmchairs} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>Sofas &amp; Armchairs <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                        <Link to="/home-furniture/dinning-tables" className="product-list">
                            <div className="blog-img">
                                <img src={DinningTables} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>Dinning Tables <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                        <Link to="/home-furniture/dinning-chairs" className="product-list">
                            <div className="blog-img">
                                <img src={DinningChairs} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>Dinning Chairs <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                        <Link to="/home-furniture/side-table" className="product-list">
                            <div className="blog-img">
                                <img src={SideTable} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>Side Table <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                        <Link to="/home-furniture/center-table" className="product-list">
                            <div className="blog-img">
                                <img src={CenterTable} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>Center Table <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                        <Link to="/home-furniture/cupboards" className="product-list">
                            <div className="blog-img">
                                <img src={Cupboards} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>Cupboards <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                        <Link to="/home-furniture/tv-units" className="product-list">
                            <div className="blog-img">
                                <img src={TvUnits} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>TV Units <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                        <Link to="/home-furniture/shoe-racks" className="product-list">
                            <div className="blog-img">
                                <img src={ShoeRacks} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>Shoe Racks <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                        <Link to="/home-furniture/pooja-mandapam" className="product-list">
                            <div className="blog-img">
                                <img src={PoojaMandapam} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="product-list-content">
                                <h3>Pooja Mandapam <span><BsArrowRight /></span></h3>
                            </div>
                        </Link>
                    </Slider>    
                </Col>
              </Row>
            </Container>
          </section>
        </>
      );
  }
  
  export default OtherProductsSlider;