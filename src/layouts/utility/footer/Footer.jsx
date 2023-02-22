import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./style.css";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import ListGroup from "react-bootstrap/ListGroup";
import WhatsappIcon from "../../../assets/images/whatsapp-icon.png";
import { useSelector } from "react-redux";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const category = useSelector((state) => state.allMenu.value);
  const [homeFurniture, setHomeFurniture] = useState("");
  const [institutionalFurniture, setInstitutionalFurniture] = useState("");
  useEffect(() => {
    let homeFurn =
      category && category?.filter((item) => item.slug === "home-furniture");
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
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/07hillfurniture/")
                  }
                >
                  <AiOutlineInstagram />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  rel="noopener noreferrer"
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/company/7hillfurniture/"
                    )
                  }
                >
                  <RiLinkedinFill />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  rel="noopener noreferrer"
                  onClick={() =>
                    openInNewTab("https://twitter.com/7hillfurniture/")
                  }
                >
                  <RiTwitterFill />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  rel="noopener noreferrer"
                  onClick={() =>
                    openInNewTab("https://www.facebook.com/7hillfurniture/")
                  }
                >
                  <RiFacebookFill />
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={12} md={6} lg={2} xl={2}>
            <h5>Quick Links</h5>
            <div className="footer-links">
              <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
                Home
              </Link>
              <Link
                className={
                  splitLocation[1] === "home-furniture" ? "active" : ""
                }
                to="/home-furniture"
              >
                Products
              </Link>
              <Link
                className={splitLocation[1] === "about" ? "active" : ""}
                to="/about"
              >
                About Us
              </Link>
              <Link
                className={splitLocation[1] === "dealers" ? "active" : ""}
                to="/dealers"
              >
                Dealers
              </Link>
              <Link
                className={
                  splitLocation[1] === "infrastructure" ? "active" : ""
                }
                to="/infrastructure"
              >
                Infrastructure
              </Link>
              <Link
                className={splitLocation[1] === "careers" ? "active" : ""}
                to="/careers"
              >
                Careers
              </Link>
              <Link
                className={splitLocation[1] === "contact" ? "active" : ""}
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <h5>Home Furniture</h5>
            <div className="footer-links home-furniture">
              {homeFurniture &&
                homeFurniture?.map((item, i) => {
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
                institutionalFurniture.map((item) => {
                  return item.subChild?.map((item, i) => {
                    return (
                      <Link
                        to={`/institutional-furniture/${item.slug}`}
                        key={i}
                      >
                        {item.name}
                      </Link>
                    );
                  });
                })}
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <p className="footer-bottom-text1">
              Copyright &copy; {getCurrentYear()} 7Hill Furniture. A unit of
              Hevea Furniture & Interior Pvt Ltd | All Rights Reserved.
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <p className="footer-bottom-text2">
              <Link
                className={
                  splitLocation[1] === "privacy-policy" ? "active" : ""
                }
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className={
                  splitLocation[1] === "discrimination-policy" ? "active" : ""
                }
                to="/discrimination-policy"
              >
                Discrimination Policy
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
      {/* eslint-disable-next-line */}
      <Link
        rel="noopener noreferrer"
        className="whatsapp-btn"
        onClick={() =>
          openInNewTab("https://api.whatsapp.com/send?phone=918881381388")
        }
      >
        <img src={WhatsappIcon} alt="" />
      </Link>
    </footer>
  );
};

export default Footer;
