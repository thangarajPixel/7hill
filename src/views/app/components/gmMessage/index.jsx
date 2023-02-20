import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GMImage2 from '../../../../assets/images/gm-image2.jpg';
import psVenkatesan from '../../../../assets/images/ps-venkatesan.jpg';

const GmMessage = () => {

    return (
        <>
          <section className="orange-bg">
            <Container>
              <Row className="flex-row-reverse align-items-center pb-4">
              <Col xs={12} sm={12} md={5} lg={5} xl={4}>
                <img src={GMImage2} alt="" className="img-fluid mar-bot-30 gm-image" />
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} xl={8}>
                <h4 className="mb-0"><strong className="text-orange">T Vedachalam</strong></h4>
                <h6 className="heading6">General Manager</h6>
                <p className=" mar-bot-20">Mr T Vedachalam, a Commerce Graduate with CAIIB qualification, has worked for 26 years in a bank and subsequently joined Mr E. Rajendran in 1996 to assist him in all his business, personal and philanthropic activities. He has known Mr Rajendran since 1979. He is 75 years old, but active with regular practice of yoga. His ambition is to continue to assist Mr Rajendran in all possible manners  to achieve his goals in business as well as philanthropy.</p>
              </Col>
              </Row>
            </Container>
          </section>
          <section className="light-gray-bg">
            <Container>
              <Row className="align-items-center pb-4">
              <Col xs={12} sm={12} md={5} lg={5} xl={4}>
                <img src={psVenkatesan} alt="" className="img-fluid mar-bot-30 gm-image" />
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} xl={8}>
                <h4 className="mb-0"><strong className="text-orange">P S Venkatesan</strong></h4>
                <h6 className="heading6">General Manager</h6>
                <p className=" mar-bot-20">Mr P S Venkatesan has a strong background in mechanical engineering, having 50 years of experience in automobile, general engineering and furniture manufacturing industry.He has a vast experience of 36 years in the furniture industry. He was associated with Mr E. Rajendran since 1975. He has been a strong pillar for the company and his leadership is greatly appreciated.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default GmMessage;