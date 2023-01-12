import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import InfrastructureBanner from '../../../../assets/images/about-banner.jpg';
import InfrastructureContent from '../../components/infrastructureContent';
import InfrastructureImages from '../../components/infrastructureImages';

const Infrastructure = () => {

    return (
        <>
          <Header />
          <img src={InfrastructureBanner} alt="" className="img-fluid w-100" />
          <InfrastructureContent />
          <InfrastructureImages />
          <Footer />
        </>
    );
}

export default Infrastructure;