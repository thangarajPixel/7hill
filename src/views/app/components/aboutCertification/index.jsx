import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CertificateImage1 from '../../../../assets/images/certificate-1.jpg';
import CertificateImage2 from '../../../../assets/images/certificate-2.jpg';
import CertificateImage3 from '../../../../assets/images/certificate-3.jpg';

const AboutCertifications = () => {

    return (
      <>
        <section className="certifications page-bg-3 orange">
          <Container>
            <Row className="justify-content-center">
                <Col>
                <h2 className="heading2 mar-bot-30 text-center">Certifications that Make 7Hill Credible</h2>
                </Col>
            </Row>
            <Row className="align-items-center justify-content-around">                
                <Col xs={12} sm={12} md={4} lg={3} className="img-center">
                  <a href={CertificateImage2} data-fancybox>
                    <img src={CertificateImage2} alt="" className="img-fluid shadow1 w-auto" />
                  </a>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="img-center my-4">
                  <a href={CertificateImage1} data-fancybox>
                    <img src={CertificateImage1} alt="" className="img-fluid shadow1 w-auto" />
                  </a>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} className="img-center">
                  <a href={CertificateImage3} data-fancybox>
                    <img src={CertificateImage3} alt="" className="img-fluid shadow1 w-auto" />
                  </a>
                </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default AboutCertifications;