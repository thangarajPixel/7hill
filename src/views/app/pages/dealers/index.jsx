import React from "react";
import AboutBanner from '../../../../assets/images/about-banner.jpg';
import DealersSection from '../../components/dealersContent';
import DealersForm from '../../components/dealersForm';
import DealerIcons from '../../components/dealerIcons';

const Dealers = () => {

    return (
        <>
          <img src={AboutBanner} alt="" className="img-fluid w-100" />
          <DealersSection />
          <DealersForm />
          <DealerIcons />
        </>
    );
}

export default Dealers;