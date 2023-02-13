import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import DealersBanner from '../../../../assets/images/dealers-banner.webp';
import DealersSection from "../../components/dealersContent";
import DealerIcons from "../../components/dealerIcons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

const Dealers = () => {
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Dealers</title>
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
      <LazyLoadImage src={DealersBanner} alt="" className="img-fluid w-100" />
      <DealersSection />
      <DealerIcons />
      <Footer />
    </>
  );
};

export default Dealers;
