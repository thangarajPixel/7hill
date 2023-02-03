import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import InstitutionalFurnitureBanner from '../../../../assets/images/institutional-furniture-banner.jpg';
import InstitutionalFurnitureContent from '../../components/institutionalFurnitureContent';
import InstitutionalFurnitureTabs from '../../components/institutionalFurnitureTabs';
import HomeCTA from '../../components/homeCTA';
import HomeBlog from '../../components/homeBlog';
import { useSelector } from "react-redux";

const InstitutionalFurniture = () => {
  const category = useSelector((state) => state.category);
  const [institutionalFurniture, setInstitutionalFurniture] = useState("");
  useEffect(() => {
    let institutionalFurn = category?.filter((item) => item.slug === "institutional-furniture");
    institutionalFurn &&
      institutionalFurn.forEach((item) => {
        setInstitutionalFurniture(item.image);
      });
  }, [category]);
    return (
        <>
          <Header />
          <img src={institutionalFurniture} alt="" className="img-fluid w-100 h-25-rem" />
          <InstitutionalFurnitureContent />
          <InstitutionalFurnitureTabs />
          <HomeCTA />
          <HomeBlog />
          <Footer />
        </>
    );
}

export default InstitutionalFurniture;