import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InstitutionalFurnitureContent = () => {

    return (
        <>
          <section>
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={9}>
                <h1 className="heading2 mar-bot-20 text-center">Institutional Furniture</h1>
                <p className="text-center mar-bot-20">Every institutional space is unique and each requires a slightly different form and function to make the project come together. 7Hill provides high quality institutional furniture that is environmentally responsible and are designed to deliver both beauty and function for any application which gives you the ultimate control over how your space looks.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default InstitutionalFurnitureContent;