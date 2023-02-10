import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./style.css";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { BsArrowUp } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const category = useSelector((state) => state.category);
  const [homeFurniture, setHomeFurniture] = useState("");
  const [institutionalFurniture, setInstitutionalFurniture] = useState("");
  useEffect(() => {
    let homeFurn = category?.filter((item) => item.slug === "home-furniture");
    let institutionalFurn = category?.filter(
      (item) => item.slug === "institutional-furniture"
    );
    homeFurn &&
      homeFurn.forEach((item) => {
        setHomeFurniture(item.child);
      });
    institutionalFurn &&
      institutionalFurn.forEach((item) => {
        setInstitutionalFurniture(item.child);
      });
  }, [category]);

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <h5>Reach Us at</h5>
            <p className="footer-text1">
              <RiMapPinLine /> 1/183, Sri Selvavinayagar Nagar, <br />
              Behind Don Bosco School, <br />
              Payasampakkam Village, <br />
              Red Hills, Chennai – 600 052.
            </p>
            <p className="footer-text1">
              <Link
                rel="noopener noreferrer"
                onClick={() => openInNewTab("tel:+918881381388")}
              >
                {" "}
                <FiPhone /> +91 88813 81388
              </Link>
            </p>
            <p className="footer-text1">
              <Link
                rel="noopener noreferrer"
                onClick={() => openInNewTab("mailto:info@7hillfurniture.com")}
              >
                {" "}
                <TfiEmail /> info@7hillfurniture.com
              </Link>
            </p>
            <ListGroup>
              <ListGroup.Item>
                <Link
                  rel="noopener noreferrer"
                  onClick={() => openInNewTab("/")}
                >
                  <AiOutlineInstagram />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  rel="noopener noreferrer"
                  onClick={() => openInNewTab("/")}
                >
                  <RiLinkedinFill />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  rel="noopener noreferrer"
                  onClick={() => openInNewTab("/")}
                >
                  <RiTwitterFill />
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={12} md={6} lg={2} xl={2}>
            <h5>Quick Links</h5>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/home-furniture">Products</Link>
              <Link to="/about">About Us</Link>
              <Link to="/dealers">Dealers</Link>
              <Link to="/infrastructure">Infrastructure</Link>
              <Link to="/">Blog</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <h5>Home Furniture</h5>
            <div className="footer-links home-furniture">
              {homeFurniture &&
                homeFurniture?.map((item, i) => {
                  // console.log(item);
                  return (
                    <Link to={`/home-furniture/${item.slug}/`} key={i}>
                      {item.name}
                    </Link>
                  );
                })}
            </div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <h5>Institutional Furniture</h5>
            <div className="footer-links">
              {institutionalFurniture &&
                institutionalFurniture.map((item, i) => {
                  return item.child?.map((item, i) => {
                    return(
                      <Link
                        to={`/institutional-furniture/${item.slug}`}
                        key={i}
                      >
                        {item.name}
                      </Link>
                    )
                  });
                })}

              {/*  */}
              {/* <Link to="/institutional-furniture/office-tables" >Office Tables</Link>
                  <Link to="/institutional-furniture/office-tables" >Office Seating</Link>
                  <Link to="/institutional-furniture/office-tables" >Office Sofa</Link>
                  <Link to="/institutional-furniture/office-tables" >School Furniture</Link>
                  <Link to="/institutional-furniture/office-tables" >Lab & Hospital Furniture</Link> */}
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <p className="footer-bottom-text1">
              Copyright &copy; {getCurrentYear()} 7Hill Furniture | All Rights
              Reserved. Designed By{" "}
              <Link
                rel="noopener noreferrer"
                onClick={() => openInNewTab("https://www.pixel-studios.com")}
              >
                Pixel Studios
              </Link>
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <p className="footer-bottom-text2">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/discrimination-policy">Discrimination Policy</Link>
            </p>
          </Col>
        </Row>
      </Container>
      {/* eslint-disable-next-line */}
      <a href="#" className="back-to-top">
        <BsArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
