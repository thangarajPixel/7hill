import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ContactResponse } from "../../helpers/FormResponse";
import { API_URL } from "../../../../redux/constant/ApiRoute";

const DealersForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("enquiry_name", data.enquiry_name);
    formdata.append("location", data.location);
    formdata.append("state", data.state);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(API_URL.DEALERS, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        ContactResponse();
        reset();
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <section className="orange-bg1">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8} xl={6}>
              <h2 className="heading2 mar-bot-20 text-center">
                Do you wish to join our growing Dealers & Distrubutor Network
              </h2>
              <p className="text-center">
                Please sumbit your details and a member from our team willl get
                in touch with you.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={8}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Form.Group className="mar-bot-30">
                      <Form.Select
                        id="enquiry"
                        {...register("enquiry_name", {
                          required: "This is required.",
                        })}
                      >
                        <option value="">Select type enquiry</option>
                        <option value="1">Enquiry 1</option>
                        <option value="2">Enquiry 2</option>
                        <option value="3">Enquiry 3</option>
                        <option value="4">Enquiry 4</option>
                        <option value="5">Enquiry 5</option>
                      </Form.Select>
                      <ErrorMessage
                        errors={errors}
                        name="enquiry_name"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Form.Group className="mar-bot-30">
                      <Form.Select
                        id="enquiry"
                        {...register("state", {
                          required: "This is required.",
                        })}
                      >
                        <option value="">Select state</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                      </Form.Select>
                      <ErrorMessage
                        errors={errors}
                        name="state"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Form.Group className="mar-bot-30" controlId="location">
                      <Form.Control
                        type="text"
                        placeholder="Enter your Location"
                        {...register("location", {
                          required: "This is required.",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="location"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Form.Group className="mar-bot-30" controlId="name">
                      <Form.Control
                        type="text"
                        placeholder="Enter your Name"
                        {...register("name", {
                          required: "This is required.",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Form.Group className="mar-bot-30" controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="Enter your Email"
                        {...register("email", {
                          required: "This is required.",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email address!",
                          },
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Form.Group className="mar-bot-30" controlId="mobile">
                      <Form.Control
                        type="tel"
                        placeholder="Enter your Mobile Number"
                        {...register("mobile", {
                          required: "This is required.",
                          pattern: {
                            value:
                              /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                            message: "Not a valid Phone Number",
                          },
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="mobile"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="text-center"
                  >
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
};

export default DealersForm;
