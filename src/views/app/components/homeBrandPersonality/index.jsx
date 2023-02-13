import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrandPersonalityIcon1 from '../../../../assets/images/brand-personality-icon1.png';
import BrandPersonalityIcon2 from '../../../../assets/images/brand-personality-icon2.png';
import BrandPersonalityIcon3 from '../../../../assets/images/brand-personality-icon3.png';
import BrandPersonalityIcon4 from '../../../../assets/images/brand-personality-icon4.png';
import BrandPersonalityIcon5 from '../../../../assets/images/brand-personality-icon5.png';
import BrandPersonalityIcon6 from '../../../../assets/images/brand-personality-icon6.png';
import BrandPersonalityIcon7 from '../../../../assets/images/brand-personality-icon7.png';

const HomeBrandPersonality = () => {

    return (
      <>
        <section className="light-gray-bg">
          <Container>
            <Row>
                <Col>
                    <h2 className="heading2 text-center mar-bot-20">Brand Personality</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">                
                <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="brand-personality">
                        <img src={BrandPersonalityIcon1} alt="" />
                        <p>Stylish and Ergonomical</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="brand-personality">
                        <img src={BrandPersonalityIcon2} alt="" />
                        <p>Approachable and Affordable</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="brand-personality">
                        <img src={BrandPersonalityIcon5} alt="" />
                        <p>Progressive and Popular</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="brand-personality">
                        <img src={BrandPersonalityIcon4} alt="" />
                        <p>Adaptive and Customized</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="brand-personality">
                        <img src={BrandPersonalityIcon3} alt="" />
                        <p>Driven and Courteous</p>
                    </div>
                </Col>              
                <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="brand-personality">
                        <img src={BrandPersonalityIcon7} alt="" />
                        <p>Reliable and Reasonable</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="brand-personality">
                        <img src={BrandPersonalityIcon6} alt="" />
                        <p>New Age Modernity with Old Age Prestige</p>
                    </div>
                </Col>  
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default HomeBrandPersonality;