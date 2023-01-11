import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeVideo = () => {

    return (
      <>
        <section className="home-video-bg">
          <Container>
            <Row className="justify-content-center align-items-center">                
            <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                <h2 className="heading2 text-white">Get a Virtual Tour of our State-of-the-art Factory</h2>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={7}>
                <a href="https://www.youtube.com/watch?v=ZLy4iTMwt04" data-fancybox className="video-play-button">
                <span></span>
                </a>
            </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default HomeVideo;