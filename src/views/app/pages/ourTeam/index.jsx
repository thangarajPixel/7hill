import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import OurTeamBanner from '../../../../assets/images/team-banner.jpg';
import CeoMessage from '../../components/ceoMessage';
import GmMessage from '../../components/gmMessage';

const OurTeam = () => {

    return (
        <>
          <Header />
          <img src={OurTeamBanner} alt="" className="img-fluid w-100" />
          <CeoMessage />
          <GmMessage />
          <Footer />
        </>
    );
}

export default OurTeam;