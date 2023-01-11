import React from "react";
import ProductListingBanner from '../../../../assets/images/product-listing-banner.jpg';
import ProductListingContent from '../../components/productListingContent';
import ProductListing from '../../components/productListing';
import OtherProductsScroll from '../../components/otherProductScroll';

const Products = () => {

    return (
        <>
          <img src={ProductListingBanner} alt="" className="img-fluid w-100" />
          <ProductListingContent />
          <ProductListing />
          <OtherProductsScroll />
        </>
    );
}

export default Products;