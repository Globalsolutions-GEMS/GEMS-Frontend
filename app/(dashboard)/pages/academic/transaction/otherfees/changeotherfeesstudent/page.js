"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";

const ChangeOtherFeesStudent = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Change Other Fees -Student" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Other Fees</Breadcrumb.Item>
        <Breadcrumb.Item active>Change Other Fees -Student</Breadcrumb.Item>
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
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Session<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
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
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Receipt Book
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select "
                          id="course"
                          required
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Programme<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Programme"
                          id="basiccourse"
                          required
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Course
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
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
                                            <Row className="mb-3">
                                              <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                              >
                                                Search By
                                              </Form.Label>
                                              <Col  className="mt-2">
                                                <Form.Check
                                                  label="Student Id."
                                                  type="radio"
                                                  name="search"
                                                />
                                              </Col>
                                              <Col className="mt-2">
                                                <Form.Check
                                                  label="Name"
                                                  type="radio"
                                                  name="search"
                                                />
                                              </Col>
                                              <Col className="mt-2">
                                                <Form.Check
                                                  label="Roll No"
                                                  type="radio"
                                                  name="search"
                                                />
                                              </Col>
                                              
                                            </Row>
                                          </Row>
                                          <Row className="mb-3">
                                            <Form.Label
                                              className="col-sm-3 col-form-label form-label"
                                              htmlFor="fullName"
                                            >
                                              Enter Input
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

export default ChangeOtherFeesStudent;
