import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../../assets/images/logo.png";
import "./style.css";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../redux/constant/ApiRoute";
import { allMenu } from "../../../redux/features/allMenu";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Header = () => {
  const category = useSelector((state) => state.allMenu.value);  
  const dispatch = useDispatch();

  const [isActive, setActive] = useState("false");
  const [isActive1, setActive1] = useState("false");
  const [isActive2, setActive2] = useState("false");

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line
  }, []);
  const ToggleClass = () => {
    setActive(!isActive);
  };
  const ToggleClass1 = () => {
    setActive1(!isActive1);
  };
  const ToggleClass2 = () => {
    setActive2(!isActive2);
  };

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const getCategory = () => {
    return axios
      .get(API_URL.CATEGORY, requestOptions)
      .then((res) => {
        dispatch(allMenu(res.data));
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <header>
        <Container>
          <Row>
            <Col>
              <nav id="cssmenu">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
                <ul className="header-top">
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      onClick={() => openInNewTab("tel:+918881381388")}
                    >
                      <FiPhone />
                      &nbsp; +91 88813 81388
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      onClick={() =>
                        openInNewTab("mailto:info@7hillfurniture.com")
                      }
                    >
                      <TfiEmail />
                      &nbsp; info@7hillfurniture.com
                    </Link>
                  </li>
                </ul>
                <div id="head-mobile"></div>
                <div
                  className={isActive ? "button" : "menu-opened button"}
                  onClick={ToggleClass}
                ></div>
                <ul className={isActive ? "main-nav" : "open main-nav"}>
                  <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="has-sub">
                    <span
                      className={
                        isActive1
                          ? "submenu-button"
                          : "submenu-opened submenu-button"
                      }
                      onClick={ToggleClass1}
                    ></span>
                    <Link to="/">Products</Link>
                    <ul className={isActive1 ? "closeed" : "open"}>
                      <Container>
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={6}>
                            {category && category?.map((product, i) => (
                              <div key={i}>
                                <h5>
                                  <Link to={`/${product.slug}`}>
                                    {product.title}
                                  </Link>
                                </h5>
                                <ul className="mar-bot-20">
                                  {product.child?.map((item, i) => {
                                    return (
                                      <li key={i}>
                                        <Link
                                          to={`/${product.slug}/${item.slug}/`}
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                  {product.child?.map((item, i) => {
                                    return (
                                      <li key={i}>
                                        <strong style={{ color: "black" }}>
                                          {item.title}
                                        </strong>
                                        {item.child?.map((item, i) => {
                                          return (
                                            <Link
                                              to={`/institutional-furniture/${item.slug}`}
                                              key={i}
                                            >
                                              {item.name}
                                            </Link>
                                          );
                                        })}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </Col>
                          {category && category?.map((product, i) => {
                            if (i === 0 || i === 1) {
                              return (
                                <Col xs={12} sm={12} md={12} lg={3} key={i}>
                                  <div className="furniture-menu">
                                    <img
                                      src={product.image}
                                      alt=""
                                      className="img-fluid h-22-rem"
                                    />
                                    <div className="furniture-menu-hover">
                                      {product.title}
                                      <Link to={`/${product.slug}`}>
                                        View Collections
                                      </Link>
                                    </div>
                                  </div>
                                </Col>
                              );
                            } else {
                              return <></>;
                            }
                          })}
                        </Row>
                      </Container>
                    </ul>
                  </li>
                  <li
                    className={
                      splitLocation[1] === "about" ||
                      splitLocation[1] === "our-team"
                        ? "active has-sub single"
                        : "has-sub single"
                    }
                  >
                    <span
                      className={
                        isActive2
                          ? "submenu-button"
                          : "submenu-opened submenu-button"
                      }
                      onClick={ToggleClass2}
                    ></span>
                    <Link to="/about">About Us</Link>
                    <ul className={isActive2 ? "closeed" : "open"}>
                      <li
                        className={splitLocation[1] === "about" ? "active" : ""}
                      >
                        <Link to="/about">Company Overview</Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "our-team" ? "active" : ""
                        }
                      >
                        <Link to="/our-team">Our Team</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={splitLocation[1] === "dealers" ? "active" : ""}
                  >
                    <Link to="/dealers">Dealers</Link>
                  </li>
                  <li
                    className={
                      splitLocation[1] === "infrastructure" ? "active" : ""
                    }
                  >
                    <Link to="/infrastructure">Infrastructure</Link>
                  </li>
                  <li
                    className={splitLocation[1] === "careers" ? "active" : ""}
                  >
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li
                    className={splitLocation[1] === "contact" ? "active" : ""}
                  >
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
      <div
        className={isActive ? "headerbackdrop" : "active headerbackdrop"}
      ></div>
    </>
  );
};

export default Header;
