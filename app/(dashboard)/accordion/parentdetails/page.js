"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const ParentDetails = () => {
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
                    <span className="text-danger">*</span>
                    <Form.Label>Parent Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Mother Name</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Mother Mobile No.</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3 mt-2">
                  <Col>
                    <Form.Label>Mother Occupation</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Mother Organisation</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Mother Organisation Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Label>Father Organisation</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Father Organisation Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Father Organisation Phone No.</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Mother Organisation Phone No.</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Father Name</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Father Occupation</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ParentDetails;
