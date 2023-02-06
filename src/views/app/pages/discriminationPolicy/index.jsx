import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import PolicyBanner from "../../../../assets/images/policy-banner.jpg";
import DiscriminationPolicyContent from "../../components/discriminationPolicyContent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

const DiscriminationPolicy = () => {
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Discrimination Policy</title>
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
      <LazyLoadImage src={PolicyBanner} alt="" className="img-fluid w-100" />
      <DiscriminationPolicyContent />
      <Footer />
    </>
  );
};

export default DiscriminationPolicy;
