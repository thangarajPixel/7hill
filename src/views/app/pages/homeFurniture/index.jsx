import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import HomeFurnitureContent from "../../components/homeFurnitureContent";
import HomeFurnitureLists from "../../components/homeFurnitureLists";
import HomeCTA from "../../components/homeCTA";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const HomeFurniture = () => {
  const category = useSelector((state) => state.allMenu.value);
  const [homeFurnitureImage, setHomeFurnitureImage] = useState("");

  useEffect(() => {
    let homeFurn = category?.filter((item) => item.slug === "home-furniture");
    homeFurn &&
      homeFurn.forEach((item) => {
        setHomeFurnitureImage(item.banner_image);
      });
  }, [category]);
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Home Furniture</title>
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
        src={homeFurnitureImage}
        alt=""
        className="img-fluid w-100"
      />
      <HomeFurnitureContent />
      <HomeFurnitureLists />
      <HomeCTA />
      <Footer />
    </>
  );
};

export default HomeFurniture;
