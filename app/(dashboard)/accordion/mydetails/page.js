"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const MyDetails = () => {
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
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      //placeholder="Please Enter Title"

                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <span className="text-danger">*</span>
                    <Form.Label>Last Name/Surname</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <span className="text-danger">*</span>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Parent Email</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <span className="text-danger">*</span>
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Place Of Birth</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Label>Mother Tongue</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <span className="text-danger">*</span>
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className="text-danger">*</span>
                    <Form.Label>Aadhar Number</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label>Pan Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <span className="text-danger">*</span>
                    <Form.Label>Nationality</Form.Label>
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

export default MyDetails;
