import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import AboutBanner from '../../../../assets/images/about-banner.jpg';
import DealersSection from '../../components/dealersContent';
import DealersForm from '../../components/dealersForm';
import DealerIcons from '../../components/dealerIcons';

const Dealers = () => {

    return (
        <>
          <Header />
          <img src={AboutBanner} alt="" className="img-fluid w-100" />
          <DealersSection />
          <DealersForm />
          <DealerIcons />
          <Footer />
        </>
    );
}

export default Dealers;