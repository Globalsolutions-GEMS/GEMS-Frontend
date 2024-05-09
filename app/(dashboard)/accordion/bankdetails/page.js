"use client";
// import node module libraries
import { Container } from "react-bootstrap";
import { Col, Row, Form, } from "react-bootstrap";

// import sub components
import useMounted from "hooks/useMounted";

const BankDetails = () => {
  const hasMounted = useMounted();

  return (
    <Container>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <Form>
                <Row className="mb-3 mt-2">
                  <Col>
                    <Form.Label >Bank Name</Form.Label>
                    <Form.Control
                      type="password"
                      
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label >IFSC Code</Form.Label>
                    <Form.Control
                      type="password"
                      
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label >
                      Aadhar Linked with Bank
                    </Form.Label>
                    <Form.Check // prettier-ignore
                      type="checkbox"
                      id=""
                      label={
                        <>
                          Is your{" "}
                          <span className="text-danger">Aadhar card</span>{" "}
                          linked with your{" "}
                          <span className="text-danger">bank account</span>?
                        </>
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label >
                      Account Number
                    </Form.Label>
                    <Form.Control
                      type="password"
                      
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BankDetails;
