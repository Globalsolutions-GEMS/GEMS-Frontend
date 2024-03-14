"use client";
// import node module libraries
import { Card, Container } from "react-bootstrap";
import { Col, Row, Form } from "react-bootstrap";
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const AcademicDetails = () => {
  const hasMounted = useMounted();

  return (
    <Container>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <Form>
                <Card className="mb-5">
                  <Card.Body>
                    <PageHeading heading="Academic Details" />
                    <Row className="mb-3 ">
                      <Col>
                        <Form.Label>Name:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Academic Year:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Course:</Form.Label>
                      </Col>
                    </Row>
                    <Row className="mb-3 ">
                      <Col>
                        <Form.Label>Student ID:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Registration No:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Roll No:</Form.Label>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <Form.Label>Medium:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Registration No:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Serial No:</Form.Label>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <PageHeading heading="Payment Details" />
                    <Row className="mb-3">
                      <Col>
                        <Form.Label>Fee type:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Student type:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Admission Date:</Form.Label>
                      </Col>
                    </Row>

                    <Row className="mb-3 ">
                      <Col>
                        <Form.Label>Admission Cancel</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Admission No:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Admission Status:</Form.Label>
                      </Col>
                    </Row>
                    <Row className="mb-3 ">
                      <Col>
                        <Form.Label>Cancel Date:</Form.Label>
                      </Col>
                    </Row>
                    <Row className="mb-3 m">
                      <Col>
                        <Form.Label>Current Academic Year:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Previous Academic Year:</Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>Concession:</Form.Label>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AcademicDetails;
