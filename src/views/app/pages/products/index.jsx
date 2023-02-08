import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
// import ProductListingBanner from "../../../../assets/images/product-listing-banner.jpg";
import ProductListingContent from "../../components/productListingContent";
import ProductListing from "../../components/productListing";
import OtherProductsScroll from "../../components/otherProductScroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useParams } from "react-router-dom";

const Products = () => {
  const productURL =
    "https://www.pixel-studios.net/7hills-admin/public/api/get/products";
  let { products } = useParams();
  const [product, setProduct] = useState("");
  const [productDetails, setProductDetails] = useState("");

  useEffect(() => {
    getProducts();
    getProductDetails();
    // eslint-disable-next-line
  }, [products]);

  const getProducts = () => {
    return axios
      .post(productURL, {
        category: { products },
      })
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => console.error(err));
  };

  const getProductDetails = () => {
    return axios
      .get(
        `https://www.pixel-studios.net/7hills-admin/public/api/get/subcategory/details/${products}`
      )
      .then((res) => {
        setProductDetails(res.data.category);
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
        src={productDetails.image}
        alt=""
        className="img-fluid w-100 h-22-rem"
      />
      <ProductListingContent productDetails={productDetails} />
      <ProductListing product={product} />
      <OtherProductsScroll />
      <Footer />
    </>
  );
};

export default Products;
