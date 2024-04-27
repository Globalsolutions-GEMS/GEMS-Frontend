"use client";
// import node module libraries

import { Accordion,Container } from "react-bootstrap";
import { Col, Row, Form, Card, } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";
import TCFor from './tcfor/page'
import StudentDetails from './studentdetails/particularstudent'
import TCFormat from './tcformat/page'


// import sub components
import useMounted from "hooks/useMounted";

const TransferAndLeavingCertificate = () => {
  const hasMounted = useMounted();
  return (
    <Container fluid >
      <Row>
        <Col >
              <div>
              <h3 className="mb-4 mt-4" >Transfer/Leaving Certificate</h3>
                {hasMounted && (
                  <Form>
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>TC For</Accordion.Header>
                        <Accordion.Body>
                          <TCFor />
                        </Accordion.Body>
                      </Accordion.Item>
                      
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>TC Format</Accordion.Header>
                        <Accordion.Body>
                          <TCFormat/>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Form>
                )}
              </div>
            
        </Col>
      </Row>
    </Container>
  );
};

export default TransferAndLeavingCertificate;
