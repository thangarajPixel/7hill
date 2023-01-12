import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import ContactBanner from '../../../../assets/images/contact-banner.jpg';
import ContactContent from '../../components/contactContent';

const ContactUs = () => {

    return (
        <>
          <Header />
          <img src={ContactBanner} alt="" className="img-fluid w-100" />
          <ContactContent />
          <Footer />
        </>
    );
}

export default ContactUs;