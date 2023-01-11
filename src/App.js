import React, { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from "../src/layouts/utility/header/Header";
import Footer from "../src/layouts/utility/footer/Footer";
import '../src/assets/css/style.css';

const Home =  lazy(() => import("../src/views/app/pages/home"));
const About =  lazy(() => import("../src/views/app/pages/about"));
const Dealers =  lazy(() => import("../src/views/app/pages/dealers"));
const HomeFurniture =  lazy(() => import("../src/views/app/pages/homeFurniture"));
const InstitutionalFurniture =  lazy(() => import("./views/app/pages/institutionalFurniture"));
const OfficeTables =  lazy(() => import("./views/app/pages/officeTables"));
const Products =  lazy(() => import("./views/app/pages/products"));

function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Suspense fallback={<>Loading ...</>}> <Home /> </Suspense> } /> 
            <Route path="/about" element={ <Suspense fallback={<>Loading ...</>}> <About /> </Suspense> } /> 
            <Route path="/dealers" element={ <Suspense fallback={<>Loading ...</>}> <Dealers /> </Suspense> } /> 
            <Route path="/home-furniture" element={ <Suspense fallback={<>Loading ...</>}> <HomeFurniture /> </Suspense> } /> 
            <Route path="/institutional-furniture" element={ <Suspense fallback={<>Loading ...</>}> <InstitutionalFurniture /> </Suspense> } />
            <Route path="/institutional-furniture/office-tables" element={ <Suspense fallback={<>Loading ...</>}> <OfficeTables /> </Suspense> } />
            <Route path="/home-furniture/products" element={ <Suspense fallback={<>Loading ...</>}> <Products /> </Suspense> } />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
