import React from "react";
import InfrastructureBanner from '../../../../assets/images/about-banner.jpg';
import InfrastructureContent from '../../components/infrastructureContent';
import InfrastructureImages from '../../components/infrastructureImages';

const Infrastructure = () => {

    return (
        <>
          <img src={InfrastructureBanner} alt="" className="img-fluid w-100" />
          <InfrastructureContent />
          <InfrastructureImages />
        </>
    );
}

export default Infrastructure;