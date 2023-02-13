import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CeoImage from '../../../../assets/images/home-vision-image.jpg';

const CeoMessage = () => {

    return (
        <>
          <section>
            <Container>
              <Row>
              <Col xs={12} sm={12} md={5} lg={5} xl={4}>
                <img src={CeoImage} alt="" className="img-fluid mar-bot-30 image-border" />
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} xl={8}>
                <h1 className="heading2 mar-bot-20">About Our Founder</h1>
                <p className=" mar-bot-20">One of the leading names in the furniture industry, Shri. Rajendran Elumalai, pioneer in manufacturing of wooden furniture and other wooden products, has time and again elevated wooden craftsmanship to a whole new level with his vast experience, able guidance and inspiring leadership.</p>
                <p className=" mar-bot-20">A veteran in furniture manufacturing, Elumalai is known for his experience and tactful consulting for setting up furniture manufacturing facilities and is an encyclopedia of everything from planning, products, technology and management of furniture manufacturing. </p>
                <p className=" mar-bot-20">Mr. Rajendran is known to have provided the ideal facelift to the Wooden Furniture category, at a time when the furniture making process underwent a transition from man-made to machine-made. He imbibed his engineering ideas to mechanise the production of wooden furniture and orchestrated global furniture with ease.</p>
                <p className=" mar-bot-20">Mr. Rajendran has a strong conviction about Teakwood, which he believes is not only a durable raw material, but also something that creates strong family values. Apart from having a good resale value, Elumalai believes that Teakwood’s legacy is one that can be passed down across generations.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default CeoMessage;