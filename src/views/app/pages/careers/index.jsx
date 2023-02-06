import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import CareersBanner from "../../../../assets/images/careers-banner.jpg";
import CareerContent from "../../components/careerContent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Careers</title>
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
      <LazyLoadImage src={CareersBanner} alt="" className="img-fluid w-100" />
      <CareerContent />
      <Footer />
    </>
  );
};

export default Careers;
