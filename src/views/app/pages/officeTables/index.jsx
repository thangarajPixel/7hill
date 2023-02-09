import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
// import OfficeTablesBanner from "../../../../assets/images/office-tables-banner.jpg";
import OfficeTablesContent from "../../components/officeTablesContent";
import OfficeTablesLists from "../../components/officeTablesLists";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useParams } from "react-router";
import { API_URL } from "../../../../redux/constant/ApiRoute";

const OfficeTables = () => {
  const { inst_sub_furn } = useParams();
  const [product, setProduct] = useState("");
  const [productDetails, setProductDetails] = useState("");
  
  useEffect(() => {
    getProducts();
    getProductDetails();
    // eslint-disable-next-line
  }, [inst_sub_furn]);

  const getProducts = () => {
    return axios
      .post(API_URL.PRODUCTS, {
        category: { inst_sub_furn },
      })
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => console.error(err));
  };

  const getProductDetails = () => {
    return axios
      .get(`${API_URL.SUBCATEGORY_DETAILS}/${inst_sub_furn}`)
      .then((res) => {
        setProductDetails(res.data.category);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Office Table</title>
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
        src={productDetails.image}
        alt=""
        className="img-fluid w-100 h-22-rem"
      />
      <OfficeTablesContent productDetails={productDetails} />
      <OfficeTablesLists product={product} />
      <Footer />
    </>
  );
};

export default OfficeTables;
