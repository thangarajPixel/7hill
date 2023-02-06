import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InfrastructureContent = () => {
  return (
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={8}>
              <h1 className="heading2 mar-bot-20 text-center">
                Infrastructure
              </h1>
              <p className="text-center mar-bot-20">
                Well equipped with state-of-the-art machinery imported from
                Germany and Italy, and with a set of completely streamlined
                processes from processing timber to taking out finished
                products, 7Hill ensures quality, efficiency and consistency at
                all stages of manufacturing resulting in excellent durability of
                the products.
              </p>
              <p className="text-center mar-bot-20">
                Various quality systems are incorporated into the manufacturing
                process thus ensuring consistency at every stage. The plant is{" "}
                <strong>
                  ISO 9001:2015, ISO 14001:2015, OHSAS 18001:2007, FSC & BSCI
                  Certified.
                </strong>
              </p>
              <p className="text-center mar-bot-20">
                The 3,00,000 Sq.ft. factory, with hi-tech contraptions for mass
                production, houses diligent and skilled craftsmen who are
                trained to craft exclusive intricate furniture, and promptly
                deliver them to your doorstep within the stipulated date.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default InfrastructureContent;
