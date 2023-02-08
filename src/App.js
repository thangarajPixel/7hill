import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "../src/assets/css/style.css";
import NotFoundPage from "./views/app/pages/notFound";

const Home = lazy(() => import("../src/views/app/pages/home"));
const About = lazy(() => import("../src/views/app/pages/about"));
const Dealers = lazy(() => import("../src/views/app/pages/dealers"));
const HomeFurniture = lazy(() =>
  import("../src/views/app/pages/homeFurniture")
);
const InstitutionalFurniture = lazy(() =>
  import("./views/app/pages/institutionalFurniture")
);
const OfficeTables = lazy(() => import("./views/app/pages/officeTables"));
const Products = lazy(() => import("./views/app/pages/products"));
const InstitutionalProducts = lazy(() =>
  import("./views/app/pages/institutionalProducts")
);
const OurTeam = lazy(() => import("./views/app/pages/ourTeam"));
const Infrastructure = lazy(() => import("./views/app/pages/infrastructure"));
const Careers = lazy(() => import("./views/app/pages/careers"));
const ContactUs = lazy(() => import("./views/app/pages/contact"));
const PrivacyPolicy = lazy(() => import("./views/app/pages/privacyPolicy"));
const DiscriminationPolicy = lazy(() =>
  import("./views/app/pages/discriminationPolicy")
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <title>7Hill Furniture</title>
          <meta
            name="description"
            content="Home furniture, office furniture in Chennai in India"
          />
          <meta
            name="keywords"
            content="Furniture, Home furniture, office furniture"
          />
        </Helmet>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <About />
              </Suspense>
            }
          />
          <Route
            path="/dealers"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <Dealers />
              </Suspense>
            }
          />
          <Route
            path="/home-furniture"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <HomeFurniture />
              </Suspense>
            }
          />
          <Route
            path="/institutional-furniture"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <InstitutionalFurniture />
              </Suspense>
            }
          />
          <Route
            path="/institutional-furniture/:inst_sub_furn"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <OfficeTables />
              </Suspense>
            }
          />
          <Route
            path="/institutional-furniture/office-tables/products"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <InstitutionalProducts />
              </Suspense>
            }
          />
          <Route
            path="/home-furniture/:products"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <Products />
              </Suspense>
            }
          />
          <Route
            path="/our-team"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <OurTeam />
              </Suspense>
            }
          />
          <Route
            path="/infrastructure"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <Infrastructure />
              </Suspense>
            }
          />
          <Route
            path="/careers"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <Careers />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <ContactUs />
              </Suspense>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="/discrimination-policy"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <DiscriminationPolicy />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense
                fallback={
                  <>
                    <div className="preloader">Loading ...</div>
                  </>
                }
              >
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
