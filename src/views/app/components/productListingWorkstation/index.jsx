import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProductDetailsModal from "../productListing/ProductDetailsModal";
import ProductEnquiryModal from "../productListing/ProductEnquiryModal";
import axios from "axios";
import { API_URL } from "../../../../redux/constant/ApiRoute";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductFilters from "../productFilters";
import NoProduct from "../../../../layouts/utility/notFound/NoProduct";
// import WorkstationImage1 from "../../../../assets/images/workstation-image1.jpg";
// import WorkstationImage2 from "../../../../assets/images/workstation-image2.jpg";
// import WorkstationImage3 from "../../../../assets/images/workstation-image3.jpg";
// import WorkstationImage4 from "../../../../assets/images/workstation-image4.jpg";
// import ProductDetailImage1 from "../../../../assets/images/product-details-image4.jpg";
// import ProductDetailImage2 from "../../../../assets/images/product-details-image5.jpg";
// import ProductDetailImage3 from "../../../../assets/images/product-details-image6.jpg";
// import Modal from "react-bootstrap/Modal";
// import Slider from "react-slick";
// import Form from "react-bootstrap/Form";
// import { ErrorMessage } from "@hookform/error-message";
// import { useForm } from "react-hook-form";
// import { ProductEnquiryResponse } from "../../helpers/FormResponse";

// function ProductDetailsModal(props) {
//   const [modalShow1, setModalShow1] = useState(false);

//   var settings = {
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     slidesToShow: 1,
//     dots: true,
//     swipe: true,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       <ProductEnquiryModal
//         {...props}
//         show={modalShow1}
//         onHide={() => setModalShow1(false)}
//       />
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton></Modal.Header>
//         <Modal.Body>
//           <Container>
//             <Row>
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={12}
//                 lg={6}
//                 xl={7}
//                 className="product-detail-slider"
//               >
//                 <Slider {...settings}>
//                   {props.product?.gallery?.map((item, i) => {
//                     return (
//                       <img
//                         key={i}
//                         src={item}
//                         alt=""
//                         className="img-fluid w-100 h-25-rem"
//                       />
//                     );
//                   })}
//                   {/* <img
//                     src={ProductDetailImage1}
//                     alt=""
//                     className="img-fluid w-100"
//                   />
//                   <img
//                     src={ProductDetailImage2}
//                     alt=""
//                     className="img-fluid w-100"
//                   />
//                   <img
//                     src={ProductDetailImage3}
//                     alt=""
//                     className="img-fluid w-100"
//                   /> */}
//                 </Slider>
//               </Col>
//               <Col xs={12} sm={12} md={12} lg={6} xl={5}>
//                 <div>
//                   <h3 className="heading3">{props.product.product_name}</h3>
//                   {props.product &&
//                     props.product.attributes.map((item, i) => {
//                       return (
//                         <>
//                           <h6 className="text-orange heading6 mb-0">
//                             {item.title}
//                           </h6>
//                           <p>{item.items[0].attribute_values}</p>
//                         </>
//                       );
//                     })}
//                   {/* <h6 className="text-orange heading6 mb-0">Wood Type</h6>
//                   <p>Premium Teak Wood</p>
//                   <h6 className="text-orange heading6 mb-0">Bed Size</h6>
//                   <p>Queen</p>
//                   <h6 className="text-orange heading6 mb-0">Storage Type</h6>
//                   <p>Side Storage</p>
//                   <h6 className="text-orange heading6 mb-0">Finish Type</h6>
//                   <p>Natural</p> */}
//                   <p className="text-center">
//                     <Button
//                       className="view-btn"
//                       onClick={() => [
//                         setModalShow1(true),
//                         props.onHide(),
//                         localStorage.setItem("product_name", props.product.product_name),
//                       ]}
//                     >
//                       Enquire Now
//                     </Button>
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
// function ProductEnquiryModal(props) {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     reset,
//   } = useForm();

//   const onSubmit = (data) => {
//     // console.log(data);
//     var formdata = new FormData();
//     formdata.append("name", data.name);
//     formdata.append("email", data.email);
//     formdata.append("mobile", data.mobile);
//     formdata.append("company_name", data.company_name);
//     formdata.append("city", data.city);
//     formdata.append("product_id", data.product_id);

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(API_URL.PRODUCT_ENQUIRY, requestOptions)
//       .then((response) => response.text())
//       .then((result) => {
//         ProductEnquiryResponse();
//         reset();
//       })
//       .catch((error) => console.log("error", error));
//   };
//   return (
//     <Modal
//       {...props}
//       size="md"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton></Modal.Header>
//       <Modal.Body>
//         <Container>
//           <Row className="align-items-center">
//             <Col>
//               <div className="px-3 mob-pad-bot-20">
//                 <h3 className="heading3">Product Enquiry</h3>
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <Form.Group className="mar-bot-30" controlId="name">
//                     <Form.Control
//                       type="text"
//                       placeholder="Name *"
//                       {...register("name", {
//                         required: "This is required.",
//                       })}
//                     />
//                     <ErrorMessage
//                       errors={errors}
//                       name="name"
//                       render={({ message }) => (
//                         <small className="text-danger ml-2">* {message}</small>
//                       )}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mar-bot-30" controlId="contactnumber">
//                     <Form.Control
//                       type="tel"
//                       placeholder="Contact Number *"
//                       {...register("mobile", {
//                         required: "This is required.",
//                         pattern: {
//                           value:
//                             /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
//                           message: "Not a valid Phone Number",
//                         },
//                       })}
//                     />
//                     <ErrorMessage
//                       errors={errors}
//                       name="mobile"
//                       render={({ message }) => (
//                         <small className="text-danger ml-2">* {message}</small>
//                       )}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mar-bot-30" controlId="email">
//                     <Form.Control
//                       type="email"
//                       placeholder="Email ID *"
//                       {...register("email", {
//                         required: "This is required.",
//                         pattern: {
//                           value:
//                             /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//                           message: "Invalid email address!",
//                         },
//                       })}
//                     />
//                     <ErrorMessage
//                       errors={errors}
//                       name="email"
//                       render={({ message }) => (
//                         <small className="text-danger ml-2">* {message}</small>
//                       )}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mar-bot-30" controlId="companyname">
//                     <Form.Control
//                       type="text"
//                       placeholder="Company Name"
//                       {...register("company_name")}
//                     />
//                     <ErrorMessage
//                       errors={errors}
//                       name="company_name"
//                       render={({ message }) => (
//                         <small className="text-danger ml-2">* {message}</small>
//                       )}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mar-bot-30" controlId="city">
//                     <Form.Control
//                       type="text"
//                       placeholder="City *"
//                       {...register("city", {
//                         required: "This is required.",
//                       })}
//                     />
//                     <ErrorMessage
//                       errors={errors}
//                       name="city"
//                       render={({ message }) => (
//                         <small className="text-danger ml-2">* {message}</small>
//                       )}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mar-bot-30" controlId="product_id">
//                     <Form.Control
//                       type="text"
//                       defaultValue={localStorage.getItem("product_name")}
//                       {...register("product_id")}
//                       disabled
//                     />
//                   </Form.Group>
//                   <p className="text-center mb-0">
//                     <Button variant="primary" type="submit">
//                       Submit
//                     </Button>
//                   </p>
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </Modal.Body>
//     </Modal>
//   );
// }
// // function ProductEnquiryModal(props) {
// //   return (
// //     <Modal
// //       {...props}
// //       size="md"
// //       aria-labelledby="contained-modal-title-vcenter"
// //       centered
// //     >
// //       <Modal.Header closeButton></Modal.Header>
// //       <Modal.Body>
// //         <Container>
// //           <Row className="align-items-center">
// //             <Col>
// //               <div className="px-3 mob-pad-bot-20">
// //                 <h3 className="heading3">Product Enquiry</h3>
// //                 <Form>
// //                   <Form.Group className="mar-bot-30" controlId="name">
// //                     <Form.Control type="text" placeholder="Name *" />
// //                   </Form.Group>
// //                   <Form.Group className="mar-bot-30" controlId="contactnumber">
// //                     <Form.Control type="tel" placeholder="Contact Number *" />
// //                   </Form.Group>
// //                   <Form.Group className="mar-bot-30" controlId="email">
// //                     <Form.Control type="email" placeholder="Email ID *" />
// //                   </Form.Group>
// //                   <Form.Group className="mar-bot-30" controlId="companyname">
// //                     <Form.Control type="text" placeholder="Company Name" />
// //                   </Form.Group>
// //                   <Form.Group className="mar-bot-30" controlId="city">
// //                     <Form.Control type="text" placeholder="City *" />
// //                   </Form.Group>
// //                   <Form.Group className="mar-bot-30" controlId="product">
// //                     <Form.Control
// //                       type="text"
// //                       value="Two Seater Workstation with Fabric Screen - Natural Finish"
// //                       disabled
// //                     />
// //                   </Form.Group>
// //                   <p className="text-center mb-0">
// //                     <Button variant="primary" type="submit">
// //                       Submit
// //                     </Button>
// //                   </p>
// //                 </Form>
// //               </div>
// //             </Col>
// //           </Row>
// //         </Container>
// //       </Modal.Body>
// //     </Modal>
// //   );
// // }

const ProductListingWorkstation = ({ product }) => {
  let products = product?.products;
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [productDetails, setProductDetails] = useState("");

  const getProductDetails = (item) => {
    return axios
      .get(`${API_URL.PRODUCTS_BY_SLUG}/${item}`)
      .then((res) => {
        setProductDetails(res.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <ProductDetailsModal
        product={productDetails}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ProductEnquiryModal
        product={productDetails}
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />

      <section className="pt-0">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={3} lg={3} xl={2}>
              <ProductFilters menu={product.filter_menus} />
            </Col>
            <Col xs={12} sm={12} md={9} lg={9} xl={10}>
              <p>
                <small className="text-light-gray">
                  Showing {products && products.length ? products && "1" : "0"}{" "}
                  - {products && products.length} Results out of{" "}
                  {products && products.length} Results
                </small>
              </p>

              <Row className="justify-content-center">
                {products && products.length !== 0 ? (
                  products &&
                  products?.map((item, i) => {
                    return (
                      <Col xs={12} sm={6} md={6} lg={4} xl={4} key={i}>
                        <div className="products-div">
                          <img
                            src={item.base_image}
                            alt=""
                            className="img-fluid w-100"
                          />
                          <p>{item.product_name}</p>
                          <div className="products-buttons">
                            <Button
                              className="view-btn"
                              onClick={() => {
                                localStorage.setItem(
                                  "product_name",
                                  item.product_name
                                );
                                getProductDetails(item.product_url);
                                setModalShow(true);
                              }}
                            >
                              View Details
                            </Button>
                            <Button
                              className="enquire-btn"
                              onClick={() => {
                                localStorage.setItem(
                                  "product_name",
                                  item.product_name
                                );
                                getProductDetails(item.product_url);
                                setModalShow1(true);
                              }}
                            >
                              Enquire Now
                            </Button>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                ) : (
                  <NoProduct />
                )}
                {/* <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage1}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Two Seater Workstation with Fabric Screen - Natural Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage2}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Linear Workstation with Fabric Privacy Screen - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage3}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Four Seater Workstation with Privacy Screen - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage4}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>Two Seater Linear Workstation - Natural Finish</p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage3}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Two Seater - Linear back to back Workstation - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage4}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Linear Workstation with Fabric Privacy Screen - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage2}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Two Seater Workstation with Fabric Screen - Natural Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="products-div">
                    <img
                      src={WorkstationImage1}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <p>
                      Linear Workstation with Fabric Privacy Screen - Natural
                      Finish
                    </p>
                    <div className="products-buttons">
                      <Button
                        className="view-btn"
                        onClick={() => setModalShow(true)}
                      >
                        View Details
                      </Button>
                      <Button
                        className="enquire-btn"
                        onClick={() => setModalShow1(true)}
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col> */}
                {products && products.length > 10 && (
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="text-center"
                  >
                    <Link to="/" className="enquire-btn load-more-btn">
                      Load More
                    </Link>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductListingWorkstation;
