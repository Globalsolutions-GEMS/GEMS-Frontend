"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const FeesRefund = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Fees Refund" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Admission Fees</Breadcrumb.Item>
        <Breadcrumb.Item active>Fees Refund</Breadcrumb.Item>
      </Breadcrumb>
      <Col>
        <Row className="mb-8">
          <Col xl={12} lg={8} md={12} xs={12}>
            <Card>
              <Card.Body>
                <div>
                  {hasMounted && (
                    <Form>
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
                                                Programme
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
                                                Course
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
                                                Refund Type
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Form.Label>
                                              <Col className="mb-3 mb-lg-0">
                                                <Form.Select
                                                  type="text"
                                                  placeholder="Student ID Number"
                                                  id="course"
                                                  required
                                                />
                                              </Col>
                                            </Row>
                                            <Row className="mb-3">
                                              <Form.Label className="col-sm-3 col-form-label form-label">
                                                Search Crieteria
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Form.Label>
                                              <Col className="mt-2">
                                                <Form.Check
                                                  label="Student Id."
                                                  type="radio"
                                                />
                                              </Col>
                                              <Col className="mt-2">
                                                <Form.Check
                                                  label="Name"
                                                  type="radio"
                                                />
                                              </Col>
                                              <Col className="mt-2">
                                                <Form.Check
                                                  label="Roll No"
                                                  type="radio"
                                                />
                                              </Col>
                                             
                                            </Row>
                                            <Row className="mb-3">
                                              <Form.Label
                                                className="col-sm-4 col-form-label form-label"
                                                htmlFor="fullName"
                                              >
                                                Student
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
                          <Col>
                            <Container fluid>
                              <Row>
                                <Col>
                                  <PageHeading heading="Student Details" />

                                  <Row className="mb-8">
                                    <Col xl={12} lg={8} md={12} xs={12}>
                                      <Card>
                                        <Card.Body>
                                          <div>
                                            {hasMounted && (
                                              <Form>
                                                <Row className="mb-3">
                                                  <Row>
                                                    <Form.Label
                                                      className="col-sm-4 col-form-label form-label"
                                                      htmlFor="fullName"
                                                    >
                                                      Student Name
                                                    </Form.Label>
                                                  </Row>
                                                  <Row>
                                                    <Form.Label
                                                      className="col-sm-4 col-form-label form-label"
                                                      htmlFor="fullName"
                                                    >
                                                      Course
                                                    </Form.Label>
                                                  </Row>
                                                  <Row>
                                                    <Form.Label
                                                      className="col-sm-4 col-form-label form-label"
                                                      htmlFor="fullName"
                                                    >
                                                      Fee Category
                                                    </Form.Label>
                                                  </Row>
                                                  {/* <Row>
                                                    <Form.Label
                                                      className="col-sm-4 col-form-label form-label"
                                                      htmlFor="fullName"
                                                    >
                                                      Student Type
                                                    </Form.Label>
                                                  </Row> */}
                                                  <Row>
                                                    <Form.Label
                                                      className="col-sm-4 col-form-label form-label"
                                                      htmlFor="fullName"
                                                    >
                                                      Admission No.
                                                    </Form.Label>
                                                  </Row>
                                                  <Row>
                                                    <Form.Label
                                                      className="col-sm-4 col-form-label form-label"
                                                      htmlFor="fullName"
                                                    >
                                                      Mobile No.
                                                    </Form.Label>
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
                              </Row>
                            </Container>
                          </Col>
                        </Row>
                        <Container fluid>
                          <Row>
                            <Col>
                              <PageHeading heading="Payment Details" />

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
                                                Paymode
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Form.Label>
                                              <Col
                                                md={4}
                                                className="mb-3 mb-lg-0"
                                              >
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
                                                className="col-sm-2 col-form-label form-label"
                                                htmlFor="fullName"
                                              >
                                                Amount
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Form.Label>
                                              <Col
                                                md={4}
                                                className="mb-3 mb-lg-0"
                                              >
                                                <Form.Control
                                                  type="text"
                                                  id="course"
                                                  required
                                                  disabled
                                                />
                                              </Col>
                                            </Row>
                                            <Row className="mb-3">
                                              <Form.Label
                                                className="col-sm-2 col-form-label form-label"
                                                htmlFor="fullName"
                                              >
                                                Refund Amount
                                              </Form.Label>
                                              <Col
                                                md={4}
                                                className="mb-3 mb-lg-0"
                                              >
                                                <Form.Control
                                                  type="text"
                                                  id="course"
                                                  required
                                                  disabled
                                                />
                                              </Col>
                                            </Row>
                                            <Row className="mb-3">
                                              <Form.Label
                                                className="col-sm-2 col-form-label form-label"
                                                htmlFor="fullName"
                                                type="date"
                                              >
                                                Refund Date
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Form.Label>
                                              <Col
                                                md={4}
                                                className="mb-3 mb-lg-0"
                                              >
                                                <Form.Control
                                                  type="date"
                                                  placeholder="Please Select Course"
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
                                                Remark
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Form.Label>
                                              <Col
                                                md={4}
                                                className="mb-3 mb-lg-0"
                                              >
                                                <Form.Control
                                                  type="text"
                                                  placeholder="Please Enter Remark"
                                                  id="course"
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
                      </Container>
                    </Form>
                  )}
                </div>
                <Row>
                  <Col className="d-flex align-items-center justify-content-center mb-3">
                    <Button
                      variant="primary"
                      type=""
                      style={{ marginLeft: "10px" }}
                    >
                      Refund
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default FeesRefund;

{
  /* < Row >
    <Col sm={6} className="d-flex align-items-center justify-content-center">
        <Button variant="primary" type="submit">
            Refund
        </Button>
        <Button
            variant="secondary"
            type="submit"
            style={{ marginLeft: "10px" }}
        >
            Cancel
        </Button>
    </Col>
</Row > */
}
