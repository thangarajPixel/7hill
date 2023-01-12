import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import PolicyBanner from '../../../../assets/images/policy-banner.jpg';
import DiscriminationPolicyContent from '../../components/discriminationPolicyContent';

const DiscriminationPolicy = () => {

    return (
        <>
          <Header />
          <img src={PolicyBanner} alt="" className="img-fluid w-100" />
          <DiscriminationPolicyContent />
          <Footer />
        </>
    );
}

export default DiscriminationPolicy;