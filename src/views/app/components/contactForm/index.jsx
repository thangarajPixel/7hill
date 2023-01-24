import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ContactResponse } from "../../helpers/FormResponse";
// import { API_URL } from "../../constant/apiRoute";

const ContactForm = () => {
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
    formdata.append("message", data.message);

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
        ContactResponse();
        reset();
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="pad-top-bot-100 px-5">
        <h1 className="heading2 mar-bot-20">Contact Form</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mar-bot-30" controlId="name">
            <Form.Control
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "This is required.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <small className="text-danger ml-2">* {message}</small>
              )}
            />
          </Form.Group>
          <Form.Group className="mar-bot-30" controlId="email">
            <Form.Control
              type="email"
              placeholder="Email"
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
                <small className="text-danger ml-2">* {message}</small>
              )}
            />
          </Form.Group>
          <Form.Group className="mar-bot-30" controlId="contactnumber">
            <Form.Control
              type="tel"
              placeholder="Contact Number"
              {...register("mobile", {
                required: "This is required.",
                pattern: {
                  value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  message: "Not a valid Phone Number",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="mobile"
              render={({ message }) => (
                <small className="text-danger ml-2">* {message}</small>
              )}
            />
          </Form.Group>
          <Form.Group className="mar-bot-30" controlId="message">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              {...register("message", {
                required: "This is required.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="message"
              render={({ message }) => (
                <small className="text-danger ml-2">* {message}</small>
              )}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
