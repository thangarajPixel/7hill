import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import AboutBanner from '../../../../assets/images/about-banner.jpg';
import AboutSection from '../../components/aboutAbout';
import AboutVisionMission from '../../components/aboutVisionMission';
import AboutReasonsTab from '../../components/about5Reasons';
import AboutCertifications from '../../components/aboutCertification';

const AboutUs = () => {

    return (
        <>        
          <Header />
          <img src={AboutBanner} alt="" className="img-fluid w-100" />
          <AboutSection />
          <AboutVisionMission />
          <AboutReasonsTab />
          <AboutCertifications />
          <Footer />
        </>
    );
}

export default AboutUs;