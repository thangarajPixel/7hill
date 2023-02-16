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
  const { sub_products } = useParams();
  const [product, setProduct] = useState("");
  const [productsDetails, setProductsDetails] = useState("");
  const [otherProducts, setOtherProducts] = useState("");

  useEffect(() => {
    getProducts();
    getOtherCategory();
    // eslint-disable-next-line
  }, [sub_products]);

  const getProducts = () => {
    return axios
      .post(`${API_URL.PRODUCTS}/${sub_products}`)
      .then((res) => {
        setProduct(res.data[0]);
        setProductsDetails(res.data[0]);
        // console.log(res.data[0]);
      })
      .catch((err) => console.error(err));
  };
  const getOtherCategory = () => {
    return axios
      .post(API_URL.OTHER_CATEGORY, {
        category: { sub_products },
      })
      .then((res) => {
        // console.log(res.data);
        setOtherProducts(res.data);
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
      <img src={productsDetails && productsDetails.image} alt="" className="img-fluid w-100 h-25-rem" />
      <ProductListingContentWorkstation product={productsDetails} />
      <ProductListingWorkstation filterMenu={productsDetails} product={product} />
      <OtherProductsScroll otherProducts={otherProducts}/>
      <Footer />
    </>
  );
};

export default InstitutionalProducts;
