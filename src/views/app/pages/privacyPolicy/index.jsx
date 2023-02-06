import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import PolicyBanner from '../../../../assets/images/policy-banner.jpg';
import PrivacyPolicyContent from '../../components/privacyPolicyContent';
import { LazyLoadImage } from "react-lazy-load-image-component";

const PrivacyPolicy = () => {

    return (
        <>
          <Header />
          <LazyLoadImage src={PolicyBanner} alt="" className="img-fluid w-100" />
          <PrivacyPolicyContent />
          <Footer />
        </>
    );
}

export default PrivacyPolicy;