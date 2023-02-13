import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VisionIcon from '../../../../assets/images/vision-icon.png';
import MissionIcon from '../../../../assets/images/mission-icon.png';

const AboutVisionMission = () => {

    return (
      <>
        <section className="page-bg-3 vision-mission p-0">
          <Container>
            <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
                <div className="about-vision">
                    <h2 className="heading2 mar-bot-30"><img src={VisionIcon} alt="" /> &nbsp; Our Vision</h2>
                    <p className="text-gray">Create genuine quality furniture made with top notch raw materials at an affordable cost, to offer great comfort for the Indian and International consumer, who is proud to pass it down through generations.</p>
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
                <div className="about-mission">
                    <h2 className="heading2 mar-bot-30"><img src={MissionIcon} alt="" /> &nbsp; Our Mission</h2>
                    <p className="text-gray">To be the leader in well-crafted, qualitative, durable and affordable furniture in India and abroad, to specialise in solid as well as panel furniture, and to use the best quality input such as Teakwood and other quality materials across multiple  demographics.</p>
                </div>
            </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default AboutVisionMission;