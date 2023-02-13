import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import OurTeamBanner from '../../../../assets/images/team-banner1.jpg';
import CeoMessage from "../../components/ceoMessage";
import GmMessage from "../../components/gmMessage";
import OurTeams from '../../components/ourTeams';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

const OurTeam = () => {
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Our Team</title>
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
      <LazyLoadImage src={OurTeamBanner} alt="" className="img-fluid w-100" />
      <CeoMessage />
      <GmMessage />
      <OurTeams />
      <Footer />
    </>
  );
};

export default OurTeam;
