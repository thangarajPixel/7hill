import {useState} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../../../assets/images/logo.png';
import HomeFurniture from '../../../assets/images/menu-home-furniture.jpg';
import HomeInstitutionalFurniture from '../../../assets/images/menu-institutional-furniture.jpg';
import "./style.css";
import { TfiEmail } from 'react-icons/tfi';
import { FiPhone } from 'react-icons/fi';

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const Header = () => {

    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive); 
    };

    return (
        <>
        <header> 
            <BrowserRouter>
            <Container>
                <Row>
                    <Col>
                        <nav id='cssmenu'>
                            <div className="logo">
                                <Link to="/" >
                                    <img src={Logo} alt=""/>
                                </Link>
                            </div>                    
                                <ul className="header-top">
                                    <li>
                                        <Link rel="noopener noreferrer" onClick={() => openInNewTab('tel:+918881381388')} ><FiPhone />&nbsp; +91 88813 81388</Link>
                                    </li>
                                    <li>
                                        <Link rel="noopener noreferrer" onClick={() => openInNewTab('mailto:info@7hillfurniture.com')} ><TfiEmail />&nbsp; info@7hillfurniture.com</Link>
                                    </li>
                                </ul>                        
                                <div id="head-mobile"></div>
                                <div className="button" onClick={ToggleClass}></div>
                                <ul className="main-nav">
                                    <li className='active'><Link to="/" >Home</Link></li>
                                    <li><Link to="/" >Products</Link>
                                    <ul>
                                        <Container>
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={6}>
                                                    <h5>Home Furniture</h5>
                                                    <ul className="mar-bot-20">
                                                        <li><Link to="/home-furniture/products/" >Beds</Link></li>
                                                        <li><Link to="/" >Sofas & Armchairs</Link></li>
                                                        <li><Link to="/" >Dining Tables</Link></li>
                                                        <li><Link to="/" >Dining Chairs</Link></li>
                                                        <li><Link to="/" >Side Table</Link></li>
                                                        <li><Link to="/" >Center Table</Link></li>
                                                        <li><Link to="/" >Cupboards</Link></li>
                                                        <li><Link to="/" >TV Units</Link></li>
                                                        <li><Link to="/" >Shoe Racks</Link></li>
                                                        <li><Link to="/" >Pooja Mandapam</Link></li>
                                                    </ul>
                                                    <h5>Institutional Furniture</h5>
                                                    <ul>
                                                        <li><strong>For Offices</strong>
                                                            <Link to="/" >Office Tables</Link>
                                                            <Link to="/" >Office Seating</Link>
                                                            <Link to="/" >Office Sofas</Link>
                                                        </li>
                                                        <li><strong>For Schools</strong>
                                                            <Link to="/" >Student Bench</Link>
                                                            <Link to="/" >Teacher Table</Link>
                                                            <Link to="/" >Hostel Bed</Link>
                                                            <Link to="/" >Steel Storages</Link>
                                                            <Link to="/" >Filing Racks</Link>
                                                            <Link to="/" >File Cabinet</Link>
                                                        </li>
                                                        <li><strong>For Labs & Hospitals</strong>
                                                            <Link to="/" >Hospital Bed</Link>
                                                            <Link to="/" >Wheel Chairs</Link>
                                                            <Link to="/" >Metal Pedestal</Link>
                                                            <Link to="/" >Laboratory furniture</Link>
                                                            <Link to="/" >Compactors</Link>
                                                        </li>
                                                    </ul>
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={3}>
                                                    <div className="furniture-menu">
                                                        <img src={HomeFurniture} alt="" className="img-fluid" />
                                                        <div className="furniture-menu-hover">
                                                            Home Furniture
                                                            <Link to="/" >View Collections</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={3}>
                                                    <div className="furniture-menu">
                                                        <img src={HomeInstitutionalFurniture} alt="" className="img-fluid" />
                                                        <div className="furniture-menu-hover">
                                                            Institutional Furniture
                                                            <Link to="/" >View Collections</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ul>
                                    </li>                        
                                    <li className="has-sub single"><Link to="/about" >About Us</Link>
                                        <ul>
                                            <li><Link to="/about" >Company Overview</Link></li>
                                            <li><Link to="/" >Our Team</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/" >Dealers</Link></li>
                                    <li><Link to="/" >Infrastructure</Link></li>
                                    <li><Link to="/" >Blog</Link></li>
                                    <li><Link to="/" >Careers</Link></li>
                                    <li><Link to="/" >Contact Us</Link></li> 
                                </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
            </BrowserRouter>
        </header>
        <div className={isActive ? "headerbackdrop" : "active headerbackdrop"}></div>
        </>
    );
}

export default Header;
