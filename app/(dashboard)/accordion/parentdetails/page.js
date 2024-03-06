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
                    <Form.Label htmlFor="inputPassword5">Parent Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Mother Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Mother Mobile No.</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3 mt-2">
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Mother Occupation</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Mother Organisation</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Mother Organisation Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                    Father Organisation 
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                    Father Organisation Address
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                    Father Organisation Phone No.
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                    Mother Organisation Phone No. 
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Father Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Father Occupation
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
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
