import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageBg2 from '../../../../assets/images/page-bg-2.png';
import DealersImage from '../../../../assets/images/dealers-image.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsCheck2Circle } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { DealersEnquiryResponse } from "../../helpers/FormResponse";
// import { API_URL } from "../../constant/apiRoute";

const DealersSection = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("enquiry", data.enquiry);
    formdata.append("state", data.state);
    formdata.append("location", data.location);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://192.168.0.56/7hillAdmin/public/api/contact-us",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        DealersEnquiryResponse();
        reset();
      })
      .catch((error) => console.log("error", error));
  };

  const scollToRef = useRef();

    return (
        <>
          <section className="pb-5">
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={9}>
                <h1 className="heading2 mar-bot-20 text-center">Stay on Top of the Furniture World!</h1>
                <p className="text-center">Do not miss the opportunity to become a Dealer and/or Distributor of South India’s Largest Solid Wood Furniture Manufacturer with a business experience of 80 years and an extensive range of products.</p>
                <p className="text-center">Join our Dealer network today and unlock new benefits.</p>
              </Col>
              </Row>
            </Container>
          </section>
          <section className="pt-0">
            <img src={PageBg2} alt="" className="rellax dealers-bg1 img-fluid" data-rellax-speed="6" />
          <Container>
            <Row>
            <Col xs={12} sm={12} md={12} lg={7} xl={8}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={10} xl={9}>
                <h2 className="heading2 mar-bot-20">Benefits Of Being A 7Hill Furniture Dealer/Distributor</h2>
                </Col>
              </Row>
                
                <div className="dealers-list">                    
                    <ListGroup>
                        <ListGroup.Item><BsCheck2Circle /> In-house control over the  manufacturing process</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> Online & offline marketing support for dealer & distributor network</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> Training for dealer &  distributor network</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> Expert advice &  Technical Support</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> Helping and making strategy  planning for growth & expansion for all dealers and distributors</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> Sales Support  along with EMI Facilities for customers</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> High Value Ticket business</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> 7 Years Warranty Different Schemes</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> Lead Generation Inter Phasing Support</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> Product quality &  durability</ListGroup.Item>
                        <ListGroup.Item><BsCheck2Circle /> After Sales service  support</ListGroup.Item>
                    </ListGroup>                    
                    <Button onClick={() => scollToRef.current.scrollIntoView()} className="orange-btn mb-4">Enquire Now <BsArrowRight /></Button>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={4}>
                <img src={DealersImage} alt="" className="img-fluid w-100 mar-top-40" />
            </Col>
            </Row>
          </Container>
        </section>
        <section className="orange-bg1" ref={scollToRef}>
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <h2 className="heading2 mar-bot-20 text-center">Grow with Us</h2>
                <p className="text-center">Please submit your details below, and a representative from our team will get in touch with you.</p>
              </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} sm={12} md={12} lg={10} xl={8}>
                <Form onSubmit={handleSubmit(onSubmit)} className="career-form">
                    <Row>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Group className="mar-bot-30 position-relative" controlId="enquiry">
                          <Form.Select id="enquiry" {...register("enquiry", { required: "Select Enquiry Type", })}>
                          <option value="">Select type Enquiry *</option>
                            <option value="Dealer">Dealer</option>
                            <option value="Dealer">Distributor</option>
                            <option value="Dealer">Bulk Enquiry</option>
                            <option value="Dealer">Importer</option>
                            <option value="Dealer">Exporter</option>
                            <option value="Dealer">Retailer</option>
                            <option value="Dealer">Interior Designer</option>
                            <option value="Dealer">Architect</option>
                            <option value="Dealer">Builder</option>
                            <option value="Dealer">Project </option>
                            <option value="Dealer">Hotel </option>
                            <option value="Dealer">Restaurants</option>
                            <option value="Dealer">Hospital</option>
                            <option value="Dealer">School/ University/ Hostel</option>
                            <option value="Dealer">Others</option>
                          </Form.Select>
                          <ErrorMessage errors={errors} name="enquiry"  render={({ message }) => (<small className="text-danger ml-2">* {message}</small> )}/>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Group className="mar-bot-30 position-relative" controlId="state">
                          <Form.Select id="state" {...register("state", { required: "Select State", })}>
                            <option value="">Select State *</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                          </Form.Select>
                          <ErrorMessage errors={errors} name="state"  render={({ message }) => (<small className="text-danger ml-2">* {message}</small> )}/>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30 position-relative" controlId="location">
                          <Form.Control type="text" placeholder="Enter your Location *" {...register("location", { required: "Enter your Location", })}/>
                          <ErrorMessage errors={errors} name="location"  render={({ message }) => (<small className="text-danger ml-2">* {message}</small> )}/>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30 position-relative" controlId="name">
                          <Form.Control type="text" placeholder="Enter your Name *" {...register("name", { required: "Enter your Name", })} />
                          <ErrorMessage errors={errors} name="name"  render={({ message }) => (<small className="text-danger ml-2">* {message}</small> )}/>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30 position-relative" controlId="email">
                          <Form.Control type="email" placeholder="Enter your Email *" {...register("email", {
                          required: "Enter your Email ID",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email address!",
                          },
                        })} />
                          <ErrorMessage errors={errors} name="email" render={({ message }) => (<small className="text-danger ml-2">* {message}</small> )}/>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30 position-relative" controlId="mobile">
                          <Form.Control type="tel" placeholder="Enter your Mobile Number *" {...register("mobile", {
                            required: "Enter your Mobile Number",
                            pattern: {
                              value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                              message: "Not a valid Phone Number",
                            },
                          })}/>
                          <ErrorMessage errors={errors} name="mobile"  render={({ message }) => (<small className="text-danger ml-2">* {message}</small> )}/>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <p className="mandatory-fields"><small className="text-danger">* Manditory Fields</small></p>
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

export default DealersSection;