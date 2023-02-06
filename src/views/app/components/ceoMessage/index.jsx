import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CeoImage from '../../../../assets/images/home-vision-image.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component";

const CeoMessage = () => {

    return (
        <>
          <section>
            <Container>
              <Row>
              <Col xs={12} sm={12} md={5} lg={5} xl={4}>
                <LazyLoadImage src={CeoImage} alt="" className="img-fluid mar-bot-30" />
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} xl={8}>
                <h1 className="heading2 mar-bot-20">CEO Message</h1>
                <p className=" mar-bot-20">7 Hill furniture is a renewed brand and unit of Hevea Furniture and Interiors Private Ltd. is one of the south india largest manufacturer of home furniture, office furniture in Chennai in india. Quality, Commitment, Service, Innovation & Customer focused approach are the essential factors that have helped brand Hevea furniture to attain this position in furniture segment today. Over the years Hevea furniture have grown in size and volumes. Now Hevea furniture is coming up with a new sister concern company i.e 7 Hill furniture to offer a qualitative product range with memorable products, great customer service, offering eco-friendly values, nurturing social values across multiple generations while developing.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default CeoMessage;