import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import ContactBanner from "../../../../assets/images/contact-banner.jpg";
import ContactContent from "../../components/contactContent";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactUs = () => {
  return (
    <>
      <Header />
      <LazyLoadImage src={ContactBanner} alt="" className="img-fluid w-100" />
      <ContactContent />
      <Footer />
    </>
  );
};

export default ContactUs;
