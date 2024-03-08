"use client";
// import node module libraries

import { Accordion,Container } from "react-bootstrap";
import { Col, Row, Form, Card, } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

import MyDetails from './mydetails/page'
import BankDetails from './bankdetails/page'
import Passport from './passport/page'
import ParentDetails from './parentdetails/page'
import OtherDetails from './otherdetails/page'

// import sub components
import useMounted from "hooks/useMounted";

const AccordionForStudent = () => {
  const hasMounted = useMounted();
  return (
    <Container fluid >
      <Row>
        <Col >
          <Card>
            <Card.Body>
              <div>
              <h3 className="mb-4" >Personal Details</h3>
                {hasMounted && (
                  <Form>
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>My Details</Accordion.Header>
                        <Accordion.Body>
                          <MyDetails />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Bank Details</Accordion.Header>
                        <Accordion.Body>
                          <BankDetails/>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Passport</Accordion.Header>
                        <Accordion.Body>
                          <Passport/>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Parent Details</Accordion.Header>
                        <Accordion.Body>
                          <ParentDetails/>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Other Details</Accordion.Header>
                        <Accordion.Body>
                          <OtherDetails/>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccordionForStudent;
