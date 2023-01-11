import React from "react";
import HomeFurnitureBanner from '../../../../assets/images/home-furniture-banner.jpg';
import HomeFurnitureContent from '../../components/homeFurnitureContent';
import HomeFurnitureLists from '../../components/homeFurnitureLists';
import HomeCTA from '../../components/homeCTA';
import HomeBlog from '../../components/homeBlog';

const HomeFurniture = () => {

    return (
        <>
          <img src={HomeFurnitureBanner} alt="" className="img-fluid w-100" />
          <HomeFurnitureContent />
          <HomeFurnitureLists />
          <HomeCTA />
          <HomeBlog />
        </>
    );
}

export default HomeFurniture;