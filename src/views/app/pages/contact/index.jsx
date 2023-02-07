import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import ContactBanner from "../../../../assets/images/contact-banner.jpg";
import ContactContent from "../../components/contactContent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Contact Us</title>
        <meta
          name="description"
          content="Home furniture, office furniture in Chennai in India"
        />
        <meta
          name="keywords"
          content="Furniture, Home furniture, office furniture"
        />
      </Helmet>
      <Header />
      <LazyLoadImage src={ContactBanner} alt="" className="img-fluid w-100" />
      <ContactContent />
      <Footer />
    </>
  );
};

export default ContactUs;
