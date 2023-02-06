import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import AboutBanner from "../../../../assets/images/about-banner.jpg";
import DealersSection from "../../components/dealersContent";
import DealersForm from "../../components/dealersForm";
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
      <LazyLoadImage src={AboutBanner} alt="" className="img-fluid w-100" />
      <DealersSection />
      <DealersForm />
      <DealerIcons />
      <Footer />
    </>
  );
};

export default Dealers;
