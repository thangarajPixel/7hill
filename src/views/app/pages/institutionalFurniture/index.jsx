import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import InstitutionalFurnitureBanner from '../../../../assets/images/institutional-furniture-banner.jpg';
import InstitutionalFurnitureContent from '../../components/institutionalFurnitureContent';
import InstitutionalFurnitureTabs from '../../components/institutionalFurnitureTabs';
import HomeCTA from '../../components/homeCTA';
import HomeBlog from '../../components/homeBlog';

const InstitutionalFurniture = () => {

    return (
        <>
          <Header />
          <img src={InstitutionalFurnitureBanner} alt="" className="img-fluid w-100" />
          <InstitutionalFurnitureContent />
          <InstitutionalFurnitureTabs />
          <HomeCTA />
          <HomeBlog />
          <Footer />
        </>
    );
}

export default InstitutionalFurniture;