"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";

const StudentDirectAdmission = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Student Direct Admission" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Admission Fees</Breadcrumb.Item>
        <Breadcrumb.Item active>Student Direct Admission</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <Container fluid className="p-3">
                <Row>
                  <Col>
                    <PageHeading heading="Course Details" />
                    <Row className="mb-3">
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
                                      Programme
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Select
                                        type="text"
                                        placeholder="Please Select"
                                        id="Academic Year"
                                        required
                                      />
                                    </Col>
                                    <Form.Label
                                      className="col-sm-3 col-form-label form-label"
                                      htmlFor="fullName"
                                    >
                                      Fee Category
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Select
                                        type="text"
                                        placeholder="Please Select"
                                        id="Academic Year"
                                        required
                                      />
                                    </Col>
                                  </Row>
                                  <Row className="mb-3">
                                    <Form.Label
                                      className="col-sm-3 col-form-label form-label"
                                      htmlFor="fullName"
                                    >
                                      Course
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Select
                                        type="text"
                                        placeholder="Please Select"
                                        id="Academic Year"
                                        required
                                      />
                                    </Col>
                                    <Form.Label
                                      className="col-sm-3 col-form-label form-label"
                                      htmlFor="fullName"
                                    >
                                      Standard Fee
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        type="text"
                                        placeholder="Standard Fee"
                                        id="Academic Year"
                                        required
                                        disabled
                                      />
                                    </Col>
                                  </Row>
                                </Form>
                              )}
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>

              <div>
                {hasMounted && (
                  <Form>
                    <Container fluid className="p-3">
                      <Row>
                        <Col>
                          <PageHeading heading="Previous Course Details" />
                          <Row className="mb-8">
                            <Col xl={12} lg={8} md={12} xs={12}>
                              <Card>
                                <Card.Body>
                                  <div>{hasMounted && <Form></Form>}</div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                    <Container fluid className="p-3">
                      <Row>
                        <Col>
                          <PageHeading heading="Subject Details" />
                          <Row className="mb-3">
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
                                            Title
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Select
                                              type="text"
                                              placeholder="Please Select"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Mother Name
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Control
                                              type="text"
                                              placeholder="Enter Mother's Name"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                        </Row>
                                        <Row className="mb-3">
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Last Name/Surname
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Control
                                              type="text"
                                              placeholder="Please Enter Last Name/Surname"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Father Name
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Control
                                              type="text"
                                              placeholder="Please Enter Father's Name"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                        </Row>
                                        <Row className="mb-3">
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            First Name
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Control
                                              type="text"
                                              placeholder="Please Enter First Name"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Mobile
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Control
                                              type="text"
                                              placeholder="Please Enter 10 Digit Mobile Number"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                        </Row>
                                        <Row className="mb-3">
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Middle Name
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Control
                                              type="text"
                                              placeholder="Please Enter Middle Name"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Email
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Control
                                              type="text"
                                              placeholder="Please Enter Email"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                        </Row>

                                        <Row className="mb-3">
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Gender
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Select
                                              type="text"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Remark
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Control
                                              type="text"
                                              placeholder="Enter Remark"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                        </Row>
                                        <Row className="mb-3">
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Caste Category
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Select
                                              type="text"
                                              placeholder="Please Enter Unicode Name"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Medium
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Select
                                              type="text"
                                              placeholder="Please Enter Email"
                                              id="Academic Year"
                                              required
                                            />
                                          </Col>
                                        </Row>
                                      </Form>
                                    )}
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                    <Row className="align-items-center">
                      <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <Button
                          variant="secondary"
                          type=""
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

export default StudentDirectAdmission;
