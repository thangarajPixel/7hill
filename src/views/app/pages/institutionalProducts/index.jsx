import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import WorkstationsBanner from '../../../../assets/images/workstations-banner.jpg';
import ProductListingContentWorkstation from '../../components/productListingContentWorkstation';
import ProductListingWorkstation from '../../components/productListingWorkstation';
import OtherProductsScroll from '../../components/otherProductScroll';
import { LazyLoadImage } from "react-lazy-load-image-component";

const InstitutionalProducts = () => {

    return (
        <>
          <Header />
          <LazyLoadImage src={WorkstationsBanner} alt="" className="img-fluid w-100" />
          <ProductListingContentWorkstation />
          <ProductListingWorkstation />
          <OtherProductsScroll />
          <Footer />
        </>
    );
}

export default InstitutionalProducts;