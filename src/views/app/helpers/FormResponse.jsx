import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CareerResponse = () => {
  return withReactContent(Swal).fire({
    title: "Thanks for Applying",
    html: <p className="m-0">Our team will get back to you shortly.</p>,
    confirmButtonText: "Okay",
    confirmButtonColor: "#ef7f1a",
    allowOutsideClick: false,
  });
};
const ContactResponse = () => {
  return withReactContent(Swal).fire({
    title: "Thanks for reach us",
    html: <p className="m-0">Our team will get back to you shortly.</p>,
    confirmButtonText: "Okay",
    confirmButtonColor: "#ef7f1a",
    allowOutsideClick: false,
  });
};
const ProductEnquiryResponse = () => {
  return withReactContent(Swal).fire({
    title: "Thanks for your interest",
    html: <p className="m-0">Our team will get back to you shortly.</p>,
    confirmButtonText: "Okay",
    confirmButtonColor: "#ef7f1a",
    allowOutsideClick: false,
  });
};

const DealersEnquiryResponse = () => {
  return withReactContent(Swal).fire({
    title: "Thanks for your interest",
    html: <p className="m-0">Our team will get back to you shortly.</p>,
    confirmButtonText: "Okay",
    confirmButtonColor: "#ef7f1a",
    allowOutsideClick: false,
  });
};
export { CareerResponse, ContactResponse, ProductEnquiryResponse, DealersEnquiryResponse };
