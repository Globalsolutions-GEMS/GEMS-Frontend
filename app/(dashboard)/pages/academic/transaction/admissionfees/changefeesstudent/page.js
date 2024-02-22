"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";

const ChangeFeesStudent = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Change Fees - Student" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transactionn</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Admission Fees</Breadcrumb.Item>
        <Breadcrumb.Item active>Change Fees - Student</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Session<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="session"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Programme<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Basic Course"
                          id="basiccourse"
                          required
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Course/Year/Standard
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Course"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>

                    <Container fluid className="p-3">
                      <Row>
                        <Col>
                          <PageHeading heading="Search Student" />

                          <Row className="mb-8">
                            <Col xl={12} lg={8} md={12} xs={12}>
                              <Card>
                                <Card.Body>
                                  <div>
                                    {hasMounted && (
                                      <Form>
                                        <Row className="mb-3">
                                          <Row className="mb-3">
                                            <Form.Label
                                              className="col-sm-4 col-form-label form-label"
                                              htmlFor="fullName"
                                            >
                                              Search Criteria
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col className="mb-3 mb-lg-0">
                                              <Form.Select
                                                type="text"
                                                placeholder="Please Select Course"
                                                id="course"
                                                required
                                              />
                                            </Col>
                                          </Row>
                                          <Row className="mb-3">
                                            <Form.Label
                                              className="col-sm-4 col-form-label form-label"
                                              htmlFor="fullName"
                                            >
                                              Search Text
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col className="mb-3 mb-lg-0">
                                              <Form.Control
                                                type="text"
                                                placeholder="Student ID Number"
                                                id="course"
                                                required
                                              />
                                            </Col>
                                          </Row>
                                        </Row>
                                      </Form>
                                    )}
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Col>
                        <Col></Col>
                      </Row>
                    </Container>

                    <Row >
                      <Col sm={6} className="d-flex align-items-center justify-content-center">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <Button
                          variant="secondary"
                          type="submit"
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </Button>
                      </Col>
                    </Row>
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

export default ChangeFeesStudent;
