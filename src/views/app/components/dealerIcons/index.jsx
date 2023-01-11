import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';
import DealerIcon1 from '../../../../assets/images/dealer-icon1.png';
import DealerIcon2 from '../../../../assets/images/dealer-icon2.png';
import DealerIcon3 from '../../../../assets/images/dealer-icon3.png';
import DealerIcon4 from '../../../../assets/images/dealer-icon4.png';
import DealerIcon5 from '../../../../assets/images/dealer-icon5.png';
import DealerIcon6 from '../../../../assets/images/dealer-icon6.png';

const DealerIcons = () => {

    return (
      <>    
        <section className="page-bg-5">
          <Container>
            <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8} xl={6}>
              <h2 className="heading2 mar-bot-30 text-center">Why you should become a Dealer & Distributor for Hevea?</h2>
            </Col>
            </Row>
            <Row>
              <Col>
                <ListGroup className="dealer-icon-list">
                    <ListGroup.Item>
                        <img src={DealerIcon1} alt="" />
                        <p>South India’s largest solid wood <br/>furniture manufacturer</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img src={DealerIcon2} alt="" />
                        <p>Own manufacturing plant equipped with state-of-the-art machinery from Germany & Italy</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img src={DealerIcon3} alt="" />
                        <p>In-house design & development team that attracts all range of customers.</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img src={DealerIcon4} alt="" />
                        <p>Decades of experience in furniture manufacturing since 1937</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img src={DealerIcon5} alt="" />
                        <p>Ensure success of <br/>your business</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img src={DealerIcon6} alt="" />
                        <p>World class manufacturing <br/>facilities</p>
                    </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
}

export default DealerIcons;