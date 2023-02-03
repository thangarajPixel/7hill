import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import HomeFurnitureBanner from '../../../../assets/images/home-furniture-banner.jpg';
import HomeFurnitureContent from '../../components/homeFurnitureContent';
import HomeFurnitureLists from '../../components/homeFurnitureLists';
import HomeCTA from '../../components/homeCTA';
import HomeBlog from '../../components/homeBlog';
import { useSelector } from "react-redux";

const HomeFurniture = () => {
  const category = useSelector((state) => state.category);
  const [homeFurnitureImage, setHomeFurnitureImage] = useState("");
  useEffect(() => {
    let homeFurn = category?.filter((item) => item.slug === "home-furniture");
    homeFurn &&
      homeFurn.forEach((item) => {
        setHomeFurnitureImage(item.image);
      });
  }, [category]);
    return (
        <>
          <Header />
          <img src={homeFurnitureImage} alt="" className="img-fluid w-100 h-25-rem" />
          <HomeFurnitureContent />
          <HomeFurnitureLists />
          <HomeCTA />
          <HomeBlog />
          <Footer />
        </>
    );
}

export default HomeFurniture;