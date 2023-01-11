import React from "react";
import OfficeTablesBanner from '../../../../assets/images/office-tables-banner.jpg';
import OfficeTablesContent from '../../components/officeTablesContent';
import OfficeTablesLists from '../../components/officeTablesLists';

const OfficeTables = () => {

    return (
        <>
          <img src={OfficeTablesBanner} alt="" className="img-fluid w-100" />
          <OfficeTablesContent />
          <OfficeTablesLists />
        </>
    );
}

export default OfficeTables;