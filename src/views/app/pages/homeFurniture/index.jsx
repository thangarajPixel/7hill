import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import HomeFurnitureBanner from '../../../../assets/images/home-furniture-banner.jpg';
import HomeFurnitureContent from '../../components/homeFurnitureContent';
import HomeFurnitureLists from '../../components/homeFurnitureLists';
import HomeCTA from '../../components/homeCTA';
import HomeBlog from '../../components/homeBlog';

const HomeFurniture = () => {

    return (
        <>
          <Header />
          <img src={HomeFurnitureBanner} alt="" className="img-fluid w-100" />
          <HomeFurnitureContent />
          <HomeFurnitureLists />
          <HomeCTA />
          <HomeBlog />
          <Footer />
        </>
    );
}

export default HomeFurniture;