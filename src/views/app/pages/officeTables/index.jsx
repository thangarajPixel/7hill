import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import OfficeTablesBanner from '../../../../assets/images/office-tables-banner.jpg';
import OfficeTablesContent from '../../components/officeTablesContent';
import OfficeTablesLists from '../../components/officeTablesLists';

const OfficeTables = () => {

    return (
        <>
          <Header />
          <img src={OfficeTablesBanner} alt="" className="img-fluid w-100" />
          <OfficeTablesContent />
          <OfficeTablesLists />
          <Footer />
        </>
    );
}

export default OfficeTables;