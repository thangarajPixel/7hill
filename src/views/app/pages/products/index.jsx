import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import ProductListingContent from "../../components/productListingContent";
import ProductListing from "../../components/productListing";
import OtherProductsScroll from "../../components/otherProductScroll";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../../redux/constant/ApiRoute";
import { useSelector } from "react-redux";

const Products = () => {
  const loader = useSelector((state) => state.loader.value);

  let { products } = useParams();
  const [product, setProduct] = useState("");
  const [productsDetails, setProductsDetails] = useState("");
  const [otherProducts, setOtherProducts] = useState("");

  useEffect(() => {
    getProducts();
    getOtherCategory();
    // eslint-disable-next-line
  }, [products]);

  const getProducts = () => {
    return axios
      .post(`${API_URL.PRODUCTS}/${products}`)
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
        category: { products },
      })
      .then((res) => {
        // console.log(res.data);
        setOtherProducts(res.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      {loader ? (
        <div className="preloader">Laoding...</div>
      ) : (
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
          <img
            src={productsDetails && productsDetails.banner_image}
            alt=""
            className="img-fluid w-100 h-25-rem"
          />
          <ProductListingContent product={productsDetails} />
          <ProductListing
            filterMenu={productsDetails}
            product={product}
            setProduct={setProduct}
          />
          <OtherProductsScroll otherProducts={otherProducts} />
          <Footer />
        </>
      )}
    </>
  );
};
export default Products;
