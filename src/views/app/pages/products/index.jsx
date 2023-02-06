import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import ProductListingBanner from '../../../../assets/images/product-listing-banner.jpg';
import ProductListingContent from '../../components/productListingContent';
import ProductListing from '../../components/productListing';
import OtherProductsScroll from '../../components/otherProductScroll';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Products = () => {

    return (
        <>
          <Header />
          <LazyLoadImage src={ProductListingBanner} alt="" className="img-fluid w-100" />
          <ProductListingContent />
          <ProductListing />
          <OtherProductsScroll />
          <Footer />
        </>
    );
}

export default Products;