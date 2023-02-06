import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../../../layouts/utility/footer/Footer";
import Header from "../../../../layouts/utility/header/Header";
import NotFound from "../../../../layouts/utility/notFound/NotFound";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Not Found Page</title>
        <meta
          name="description"
          content="Home furniture, office furniture in Chennai in India"
        />
        <meta
          name="keywords"
          content="Furniture, Home furniture, office furniture"
        />
      </Helmet>
      <Header />
      <NotFound />
      <Footer />
    </>
  );
};

export default NotFoundPage;
