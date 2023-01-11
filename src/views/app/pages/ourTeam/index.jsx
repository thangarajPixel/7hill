import React from "react";
import OurTeamBanner from '../../../../assets/images/team-banner.jpg';
import CeoMessage from '../../components/ceoMessage';
import GmMessage from '../../components/gmMessage';

const OurTeam = () => {

    return (
        <>
          <img src={OurTeamBanner} alt="" className="img-fluid w-100" />
          <CeoMessage />
          <GmMessage />
        </>
    );
}

export default OurTeam;