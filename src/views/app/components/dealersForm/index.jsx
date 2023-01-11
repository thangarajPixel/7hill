import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DealersForm = () => {

    return (
        <>
          <section className="orange-bg1">
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <h2 className="heading2 mar-bot-20 text-center">Do you wish to join our growing Dealers & Distrubutor Network</h2>
                <p className="text-center">Please sumbit your details and a member from our team willl get in touch with you.</p>
              </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} sm={12} md={12} lg={10} xl={8}>
                  <Form>
                    <Row>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30">
                          <Form.Select id="enquiry">
                            <option>Select type enquiry</option>
                            <option>Enquiry 1</option>
                            <option>Enquiry 2</option>
                            <option>Enquiry 3</option>
                            <option>Enquiry 4</option>
                            <option>Enquiry 5</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30">
                          <Form.Select id="enquiry">
                            <option>Select state</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30" controlId="location">
                          <Form.Control type="text" placeholder="Enter your Location" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30" controlId="name">
                          <Form.Control type="text" placeholder="Enter your Name" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30" controlId="email">
                          <Form.Control type="email" placeholder="Enter your Email" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30" controlId="mobile">
                          <Form.Control type="tel" placeholder="Enter your Mobile Number" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default DealersForm;