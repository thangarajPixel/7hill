import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
// import WorkstationsBanner from "../../../../assets/images/workstations-banner.jpg";
import ProductListingContentWorkstation from "../../components/productListingContentWorkstation";
import ProductListingWorkstation from "../../components/productListingWorkstation";
import OtherProductsScroll from "../../components/otherProductScroll";
import { Helmet } from "react-helmet";
import { API_URL } from "../../../../redux/constant/ApiRoute";
import { useParams } from "react-router";
import axios from "axios";

const InstitutionalProducts = () => {
  const { products } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [products]);

  const getProducts = () => {
    return axios
      .get(`${API_URL.PRODUCTS_BY_SLUG}/${products}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };
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
      <img src={product.image} alt="" className="img-fluid w-100 h-25-rem" />
      <ProductListingContentWorkstation product={product} />
      <ProductListingWorkstation product={product} />
      <OtherProductsScroll />
      <Footer />
    </>
  );
};

export default InstitutionalProducts;
