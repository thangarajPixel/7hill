import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import HomeProductSlider from '../../components/homeProductsSlider';
import HomeAbout from '../../components/homeAbout';
import HomeCounters from '../../components/homeCounters';
import HomeTabs from '../../components/homeTabs';
import HomeCTA from '../../components/homeCTA';
import HomeVision from '../../components/homeVision';
import HomeFurnish from '../../components/homeFurnish';
import HomeBlog from '../../components/homeBlog';
import HomeVideo from '../../components/homeVideo';
import HomeTestimonials from '../../components/homeTestimonials';

const Home = () => {

    return (
      <>
        <Header />
        <HomeProductSlider />
        <HomeAbout />
        <HomeCounters />
        <HomeTabs />
        <HomeCTA />
        <HomeVision />
        <HomeFurnish />
        <HomeBlog />
        <HomeVideo />
        <HomeTestimonials />
        <Footer />
      </>
    );
}

export default Home;