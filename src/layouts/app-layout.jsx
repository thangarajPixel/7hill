import React, { lazy } from "react";
import Header from "../layouts/utility/header/Header";
import Footer from "../layouts/utility/footer/Footer";

export const AppLayout = () => {
  return (
    <div className="ag-app">
      <Header />
      <Footer />
    </div>
  );
};

export default AppLayout;