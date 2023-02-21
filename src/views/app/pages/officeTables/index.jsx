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

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [inst_sub_furn]);

  const getProducts = () => {
    return axios
      .post(`${API_URL.PRODUCTS}/${inst_sub_furn}`)
      .then((res) => {
        // console.log(res.data[0]);
        setProduct(res.data[0]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Helmet>
        <title>7Hill Furniture | {product && product.name}</title>
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
        src={product.image}
        alt=""
        className="img-fluid w-100 h-22-rem"
      />
      <OfficeTablesContent product={product}/>
      <OfficeTablesLists product={product} />
      <Footer />
    </>
  );
};

export default OfficeTables;
