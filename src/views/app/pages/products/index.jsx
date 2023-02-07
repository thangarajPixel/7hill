import React, { useEffect } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import ProductListingBanner from "../../../../assets/images/product-listing-banner.jpg";
import ProductListingContent from "../../components/productListingContent";
import ProductListing from "../../components/productListing";
import OtherProductsScroll from "../../components/otherProductScroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import axios from "axios";

const Products = () => {
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  // var formdata = new FormData();
  // formdata.append("category ", "Bed");

  var requestOptions = {
    method: "POST",
    // body: formdata,
    redirect: "follow",
  };

  const getProducts = () => {
    return axios
      .get(
        "http://192.168.0.56/7hillAdmin/public/api/get/products",
        requestOptions
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Products</title>
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
        src={ProductListingBanner}
        alt=""
        className="img-fluid w-100"
      />
      <ProductListingContent />
      <ProductListing />
      <OtherProductsScroll />
      <Footer />
    </>
  );
};

export default Products;
