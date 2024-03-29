import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import InstitutionalFurnitureContent from "../../components/institutionalFurnitureContent";
import InstitutionalFurnitureTabs from "../../components/institutionalFurnitureTabs";
import HomeCTA from "../../components/homeCTA";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const InstitutionalFurniture = () => {
  const category = useSelector((state) => state.allMenu.value);
  const [institutionalFurniture, setInstitutionalFurniture] = useState("");
  const [institutionalFurnitureImage, setInstitutionalFurnitureImage] = useState("");
  useEffect(() => {
    let institutionalFurn = category?.filter(
      (item) => item.slug === "institutional-furniture"
    );
    setInstitutionalFurniture(institutionalFurn)
    institutionalFurn &&
      institutionalFurn.forEach((item) => {
        setInstitutionalFurnitureImage(item.banner_image);
      });
  }, [category]);
  console.log(institutionalFurniture);
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Institutional Furniture</title>
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
        src={institutionalFurnitureImage && institutionalFurnitureImage}
        alt=""
        className="img-fluid w-100"
      />
      <InstitutionalFurnitureContent />
      <InstitutionalFurnitureTabs institutionalFurniture={institutionalFurniture}/>
      <HomeCTA />
      <Footer />
    </>
  );
};

export default InstitutionalFurniture;
