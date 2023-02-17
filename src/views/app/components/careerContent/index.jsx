import React from "react";
import Container from "react-bootstrap/Container";
import CareerForm from "../careerForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CareersContent = ({ setLoader }) => {
  return (
    <>
      <section className="p-0 career-section">
        <Container className="p-0">
          <Row className="g-0">
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <div className="pad-top-bot-100 px-5">
                <h1 className="heading2 mar-bot-20">Careers</h1>
                <p className="mar-bot-20">
                  At 7Hill Furniture, you will have the one-of-a-kind
                  opportunity to work with the leader in the field. You will
                  become an expert and build your competencies across many
                  areas. You will consistently progress to higher ranks within a
                  short period of time, through reinforcement of our ideals,
                  values and opportunities.
                </p>
                <p className="mar-bot-20">
                  If this sounds like something you would like to explore, fill
                  in the form below and we will get back to you.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} className="orange-bg">
              <CareerForm setLoader={setLoader} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CareersContent;
