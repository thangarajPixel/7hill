import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CareerResponse } from "../../helpers/FormResponse";
import { API_URL } from "../../../../redux/constant/ApiRoute";

const CareersForm = ({setLoader}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoader(true)
    console.log(data);
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("cover_letter", data.cover_letter);
    formdata.append("file", data.chooseFile[0], data.chooseFile[0].name);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(API_URL.CAREER, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setLoader(false)
        CareerResponse();
        reset();
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="pad-top-bot-100 px-5">
        <h1 className="heading2 mar-bot-20">Apply Now!</h1>
        <Form onSubmit={handleSubmit(onSubmit)} className="career-form">
          <Form.Group className="mar-bot-30 position-relative" controlId="name">
            <Form.Control
              type="text"
              placeholder="Name *"
              {...register("name", {
                required: "Enter your Name",
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
          <Form.Group className="mar-bot-30 position-relative" controlId="email">
            <Form.Control
              type="email"
              placeholder="Email *"
              {...register("email", {
                required: "Enter your Email ID",
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
          <Form.Group className="mar-bot-30 position-relative" controlId="contactnumber">
            <Form.Control
              type="tel"
              placeholder="Contact Number *"
              {...register("mobile", {
                required: "Enter your Contact Number",
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
          <Form.Group className="mar-bot-30 position-relative" controlId="cover_letter">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Cover Letter *"
              {...register("cover_letter", {
                required: "Enter your Message",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="cover_letter"
              render={({ message }) => (
                <small className="text-danger ml-2">* {message}</small>
              )}
            />
          </Form.Group>
          <Form.Group className="mar-bot-30 position-relative file" controlId="upload">
            <Form.Control
              type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              name="chooseFile"
              {...register("chooseFile", {
                required: "Choose File",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="chooseFile"
              render={({ message }) => (
                <small className="text-danger ml-2">* {message}</small>
              )}
            />            
            <small style={{fontSize: "12px"}}>Acceptable file formats (.pdf, .docx &amp; .doc)</small>
          </Form.Group>
          <p className="mandatory-fields text-right"><small className="text-danger">* Mandatory Fields</small></p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CareersForm;