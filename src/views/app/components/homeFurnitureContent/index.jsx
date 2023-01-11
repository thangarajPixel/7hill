import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeFurnitureContent = () => {

    return (
        <>
          <section>
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={8}>
                <h1 className="heading2 mar-bot-20 text-center">Home Furniture</h1>
                <p className="text-center mar-bot-20">Whether you just moved into a new home or looking to revamp your current one, we at 7Hill Furniture are here to inspire you with the most elegant and aesthetic home furniture solutions, there is a piece of furniture to every corner of your home. Create a home that is perfect for you.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default HomeFurnitureContent;