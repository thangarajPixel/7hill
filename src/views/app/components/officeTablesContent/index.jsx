import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { RiArrowRightSLine } from "react-icons/ri";

const OfficeTablesContent = () => {
  const { inst_sub_furn } = useParams();
  let subCat = inst_sub_furn.split("-");
  subCat = subCat.join(" ");
  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={9}>
              <h1 className="heading2 mar-bot-20 text-center capitalize">
                {subCat}
              </h1>
              <Breadcrumb>
                <ul>
                  <li>
                    <Link to="/institutional-furniture/">
                      Institutional Furniture
                    </Link>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                  </li>
                  <li className="capitalize">{subCat}</li>
                </ul>
              </Breadcrumb>
              <p className="text-center mar-bot-20">
                Our carefully designed {subCat} meets the ergonomics standards
                in order to provide maximum comfort for you & your employees. We
                at 7Hill aim to create a practical yet inviting environment for
                employees to use, that enhance productivity and wellness within
                the workplace.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OfficeTablesContent;
