import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import CareersBanner from '../../../../assets/images/careers-banner.jpg';
import CareerContent from '../../components/careerContent';

const Careers = () => {

    return (
        <>
          <Header />
          <img src={CareersBanner} alt="" className="img-fluid w-100" />
          <CareerContent />
          <Footer />
        </>
    );
}

export default Careers;