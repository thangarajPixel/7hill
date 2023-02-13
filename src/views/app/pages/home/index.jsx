import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import HomeProductSlider from "../../components/homeProductsSlider";
import HomeAbout from "../../components/homeAbout";
import HomeCounters from "../../components/homeCounters";
import HomeTabs from "../../components/homeTabs";
import HomeCTA from "../../components/homeCTA";
import HomeVision from "../../components/homeVision";
import HomeFurnish from "../../components/homeFurnish";
import HomeBrandPersonality from "../../components/homeBrandPersonality";
import HomeVideo from "../../components/homeVideo";
import HomeTestimonials from "../../components/homeTestimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Home</title>
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
      <HomeProductSlider />
      <HomeAbout />
      <HomeCounters />
      <HomeTabs />
      <HomeCTA />
      <HomeVision />
      <HomeFurnish />
      <HomeBrandPersonality />
      <HomeVideo />
      <HomeTestimonials />
      <Footer />
    </>
  );
};

export default Home;
