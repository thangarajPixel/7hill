import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutTabsImage from '../../../../assets/images/about-tab-image.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsCheck2Circle } from 'react-icons/bs';

const AboutReasons = () => {

    return (
      <>
        <section>
          <Container>
            <Row>
                <Col>
                <h2 className="heading2 text-center mar-bot-30">5 Reasons to Choose 7Hill Furniture</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <div className="about-tabs">
                        <Tabs defaultActiveKey="aboutTabs" id="about-tabs">
                            <Tab eventKey="aboutTabs" title="Machine">
                                <p><strong>Machines provide the foundation for precise manufacturing.</strong><br/>Basic wood working machines form the basis for small scale industries. The suggestions and guidance required for this set up is furnished at 7Hill. Our contribution for medium-scale factories for batch production which are facilitated with entry-level machines with semi-automatic machines is commendable. For massive production, large scale factories are setup with CNC wood working machines and automated finishing lines, inline operations and less dependence on human skill. 7Hill backs up these industrial scale woodworking factories too.</p>
                            </Tab>
                            <Tab eventKey="method" title="Method">
                                <p><strong>7Hill offers project reports consisting of the following aspects</strong></p>
                                <ListGroup className="list-style1">
                                    <ListGroup.Item><BsCheck2Circle /> Factory layout, Machinery layout, Process planning</ListGroup.Item>
                                    <ListGroup.Item><BsCheck2Circle /> Designing of tools, JIGS and fixtures</ListGroup.Item>
                                    <ListGroup.Item><BsCheck2Circle /> Redesigning conventional machines into special purpose machines for mass production</ListGroup.Item>
                                    <ListGroup.Item><BsCheck2Circle /> Preparation of manufacturing drawings</ListGroup.Item>
                                    <ListGroup.Item><BsCheck2Circle /> Training for detailed costing</ListGroup.Item>
                                    <ListGroup.Item><BsCheck2Circle /> On job training in all departments</ListGroup.Item>
                                </ListGroup>
                            </Tab>
                            <Tab eventKey="material" title="Material">
                                <p>Raw material is the basic component of a finished product and the main resource of any factory. We help our clients in sourcing these raw materials to their destinations.</p>  
                            </Tab>
                            <Tab eventKey="manpower" title="Man Power">
                                <p>The success of a company depends upon the Employees contribution. Hence one needs to train & motivate them to produce more in an efficient manner.</p>
                                <p>The employees undergo immense training to gain knowledge and skill in furniture manufacturing. A 3 month training programme will be given for a maximum of 20 employees with free accommodation. Skilled carpenters, Entrepreneurs, Skilled and Interested students can join the training. It will assure the successful implementation of new techniques.</p>
                                <p>Seminars also help in the training of employees. The seminars are customized to your needs and will motivate your staff to take the company to desired level.</p>
                            </Tab>
                            <Tab eventKey="money" title="Money">
                                <p>We assure being your Game Changer. We undertake the responsibility of providing the required guidance for consistent money management as it has been the most known factor involved in the upliftment of enterprises in history.</p>  
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