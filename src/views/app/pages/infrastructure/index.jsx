import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import InfrastructureBanner from "../../../../assets/images/about-banner.jpg";
import InfrastructureContent from "../../components/infrastructureContent";
import InfrastructureImages from "../../components/infrastructureImages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

const Infrastructure = () => {
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Infrastructure</title>
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
      <LazyLoadImage
        src={InfrastructureBanner}
        alt=""
        className="img-fluid w-100"
      />
      <InfrastructureContent />
      <InfrastructureImages />
      <Footer />
    </>
  );
};

export default Infrastructure;
