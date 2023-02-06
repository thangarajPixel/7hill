import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfrastructureImage1 from '../../../../assets/images/infrastructure-image1.jpg';
import InfrastructureImage2 from '../../../../assets/images/infrastructure-image2.jpg';
import InfrastructureImage3 from '../../../../assets/images/infrastructure-image3.jpg';
import InfrastructureImage4 from '../../../../assets/images/infrastructure-image4.jpg';
import InfrastructureImage5 from '../../../../assets/images/infrastructure-image5.jpg';
import InfrastructureImage6 from '../../../../assets/images/infrastructure-image6.jpg';
import InfrastructureImage7 from '../../../../assets/images/infrastructure-image7.jpg';
import InfrastructureImage8 from '../../../../assets/images/infrastructure-image8.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component";

const InfrastructureImages = () => {

    return (
        <>
          <section className="orange-bg">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <h1 className="heading2 mar-bot-30 text-center">The state-of-the-art facilities at our manufacturing unit</h1>
              </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <a href={InfrastructureImage1} data-fancybox>
                        <LazyLoadImage src={InfrastructureImage1} alt="" className="img-fluid shadow1 w-100" />
                        <h6 className="infrastructure-text">In house wood <br/>processing facility</h6>
                    </a>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <a href={InfrastructureImage2} data-fancybox>
                        <LazyLoadImage src={InfrastructureImage2} alt="" className="img-fluid shadow1 w-100" />
                        <h6 className="infrastructure-text">Saw mill <br/>plant</h6>
                    </a>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <a href={InfrastructureImage3} data-fancybox>
                        <LazyLoadImage src={InfrastructureImage3} alt="" className="img-fluid shadow1 w-100" />
                        <h6 className="infrastructure-text">in house panel <br/>processing facility</h6>
                    </a>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <a href={InfrastructureImage4} data-fancybox>
                        <LazyLoadImage src={InfrastructureImage4} alt="" className="img-fluid shadow1 w-100" />
                        <h6 className="infrastructure-text">in house metal product manufacturing facility</h6>
                    </a>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <a href={InfrastructureImage5} data-fancybox>
                        <LazyLoadImage src={InfrastructureImage5} alt="" className="img-fluid shadow1 w-100" />
                        <h6 className="infrastructure-text">in house SPM <br/>manufacturing facility</h6>
                    </a>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <a href={InfrastructureImage6} data-fancybox>
                        <LazyLoadImage src={InfrastructureImage6} alt="" className="img-fluid shadow1 w-100" />
                        <h6 className="infrastructure-text">in house <br/>tool room</h6>
                    </a>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <a href={InfrastructureImage7} data-fancybox>
                        <LazyLoadImage src={InfrastructureImage7} alt="" className="img-fluid shadow1 w-100" />
                        <h6 className="infrastructure-text">in house Power <br/>coating facility</h6>
                    </a>
                </Col>                
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <a href={InfrastructureImage8} data-fancybox>
                        <LazyLoadImage src={InfrastructureImage8} alt="" className="img-fluid shadow1 w-100" />
                        <h6 className="infrastructure-text">in house solid wood <br/>furniture manufacturing</h6>
                    </a>
                </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default InfrastructureImages;