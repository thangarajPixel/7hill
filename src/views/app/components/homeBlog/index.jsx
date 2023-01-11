import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import HomeBlogImage1 from '../../../../assets/images/home-blog-image1.jpg';
import HomeBlogImage2 from '../../../../assets/images/home-blog-image2.jpg';
import HomeBlogImage3 from '../../../../assets/images/home-blog-image3.jpg';

const HomeBlog = () => {

    return (
      <>
        <section>
          <Container>
            <Row>
                <Col>
                    <h2 className="heading2 text-center mar-bot-20">Latest Blogs from 7Hill</h2>
                </Col>
            </Row>
            <Row>                
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Link to="/" className="home-blog">
                        <div className="blog-img">
                            <img src={HomeBlogImage1} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="home-blog-content">
                        <p><strong>Interior design</strong> <span>16 Dec 2022</span></p>
                            <h3>Interior design trends that will be massive in 2023</h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Link to="/" className="home-blog">
                        <div className="blog-img">
                            <img src={HomeBlogImage2} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="home-blog-content">                        
                            <p><strong>Interior design</strong> <span>12 Nov 2022</span></p>
                            <h3>How to decorate your home & hallway for the Summer Season</h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Link to="/" className="home-blog">
                        <div className="blog-img">
                            <img src={HomeBlogImage3} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="home-blog-content">                        
                            <p><strong>Living Room</strong> <span>05 Oct 2022</span></p>
                            <h3>Modern wall TV Cabinets & Units for your Living Room</h3>
                        </div>
                    </Link>
                </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default HomeBlog;