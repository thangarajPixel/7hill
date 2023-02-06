import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import WorkstationsBanner from "../../../../assets/images/workstations-banner.jpg";
import ProductListingContentWorkstation from "../../components/productListingContentWorkstation";
import ProductListingWorkstation from "../../components/productListingWorkstation";
import OtherProductsScroll from "../../components/otherProductScroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

const InstitutionalProducts = () => {
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Institutional Products</title>
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
        src={WorkstationsBanner}
        alt=""
        className="img-fluid w-100"
      />
      <ProductListingContentWorkstation />
      <ProductListingWorkstation />
      <OtherProductsScroll />
      <Footer />
    </>
  );
};

export default InstitutionalProducts;
