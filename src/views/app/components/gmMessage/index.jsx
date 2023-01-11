import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GMImage from '../../../../assets/images/home-about-image.jpg';

const GmMessage = () => {

    return (
        <>
          <section className="orange-bg">
            <Container>
              <Row className="flex-row-reverse">
              <Col xs={12} sm={12} md={5} lg={5} xl={4}>
                <img src={GMImage} alt="" className="img-fluid mar-bot-30" />
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} xl={8}>
                <h2 className="heading2 mar-bot-20">GM Message</h2>
                <h4 className="mb-0"><strong className="text-orange">T Vedachalam</strong></h4>
                <h6 className="heading6">General Manager</h6>
                <p className=" mar-bot-20">Mr T Vedachalam, a Commerce Graduate with CAIIB qualification, has worked for 26 years in a bank and subsequently joined Mr E. Rajendran in 1996 to assist him in all his business, personal and philanthropic activities. He has known Mr Rajendran since 1979. He is 75 years old, but active with regular practice of yoga. His ambition is to continue to assist Mr Rajendran in all possible manners  to achieve his goals in business as well as philanthropy.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default GmMessage;