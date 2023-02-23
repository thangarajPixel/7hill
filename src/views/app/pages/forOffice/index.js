import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ForOfficeContent from "../../components/forOfficeContent";
import ForOfficeFurnitureTabs from "../../components/forOfficeFurnitureTabs";

const ForOffice = () => {
  const { inst_sub_furn } = useParams();
  const category = useSelector((state) => state.allMenu.value);
  const [institutionalFurniture, setInstitutionalFurniture] = useState("");
  const [institutionalImage, setInstitutionalImage] = useState("");
  useEffect(() => {
    let institutionalFurn = category?.filter(
      (item) => item.slug === "institutional-furniture"
    );
    setInstitutionalImage(institutionalFurn[0].banner_image)
    institutionalFurn &&
      institutionalFurn.forEach((item) => {
        setInstitutionalFurniture(
          item.child.filter((item) => item.slug === inst_sub_furn)
        );
      });
      // eslint-disable-next-line
  }, [category]);
  // console.log(institutionalFurniture[0]);
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
      <img
        src={institutionalImage && institutionalImage}
        alt=""
        className="img-fluid w-100 h-25-rem"
      />
      <ForOfficeContent product={institutionalFurniture[0]} />
      <ForOfficeFurnitureTabs product={institutionalFurniture[0]} />
      <Footer />
    </>
  );
};

export default ForOffice;
