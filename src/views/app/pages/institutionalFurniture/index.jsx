import React from "react";
import InstitutionalFurnitureBanner from '../../../../assets/images/institutional-furniture-banner.jpg';
import InstitutionalFurnitureContent from '../../components/institutionalFurnitureContent';
import InstitutionalFurnitureTabs from '../../components/institutionalFurnitureTabs';
import HomeCTA from '../../components/homeCTA';
import HomeBlog from '../../components/homeBlog';

const InstitutionalFurniture = () => {

    return (
        <>
          <img src={InstitutionalFurnitureBanner} alt="" className="img-fluid w-100" />
          <InstitutionalFurnitureContent />
          <InstitutionalFurnitureTabs />
          <HomeCTA />
          <HomeBlog />
        </>
    );
}

export default InstitutionalFurniture;