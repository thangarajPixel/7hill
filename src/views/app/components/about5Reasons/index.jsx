import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutTabsImage from '../../../../assets/images/about-tab-image.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AboutReasons = () => {

    return (
      <>
        <section>
          <Container>
            <Row>
                <Col>
                <h2 className="heading2 text-center mar-bot-30">5 Reasons to Choose 7Hill Furnitures </h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <div className="about-tabs">
                        <Tabs defaultActiveKey="aboutTabs" id="about-tabs">
                            <Tab eventKey="aboutTabs" title="Machine">
                                <p>Machines provide the foundation for precise manufacturing. Basic wood working machines form the basis for small scale industries. The suggestions and guidance required for this set up is furnished at 7Hill. Our contribution for medium-scale factories for batch production which are facilitated with entry-level machines with semi-automatic machines is commendable. For massive production, large scale factories are setup with CNC wood working machines and automated finishing lines, inline operations and less dependence on human skill. 7Hill backs up these industrial scale woodworking factories too.</p>
                            </Tab>
                            <Tab eventKey="method" title="Method">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </Tab>
                            <Tab eventKey="material" title="Material">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
                            </Tab>
                            <Tab eventKey="manpower" title="Man Power">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </Tab>
                            <Tab eventKey="money" title="Money">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <div className="border-left">
                        <img src={AboutTabsImage} alt="" className="img-fluid" />
                    </div>
                </Col>
            </Row>
          </Container>
        </section>        
      </>
    );
}

export default AboutReasons;