"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const DCRReport = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Demand Report " />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Reports</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Report</Breadcrumb.Item>
        <Breadcrumb.Item active>DCR Report</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={12} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    {/* <Row className="mb-3" sm={6}>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Report Format<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={2}>
                        <Form.Check label="With Canceled" type="radio" />
                      </Col>
                      <Col sm={2}>
                        <Form.Check label="Without Canceled" type="radio" />
                      </Col>
                    </Row> */}
                    <Row>
                      <Col>
                        <Row>
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Report Format
                              <span className="text-danger">*</span>
                            </Form.Label>
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Detailed"
                              type="radio"
                              name="report"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Short"
                              type="radio"
                              name="report"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={3}></Col>
                          <Col>
                            <Form.Check
                              label="Summary"
                              type="radio"
                              name="report"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              label="Summary Tran. Wise"
                              type="radio"
                              name="report"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={3}></Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Date Wise Summary"
                              type="radio"
                              name="report"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Prev Session Detailed"
                              type="radio"
                              name="report"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={3}></Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Date Wise"
                              type="radio"
                              name="report"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Academic Session Summary"
                              type="radio"
                              name="report"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={3}></Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Summary Tran. Course Wise"
                              type="radio"
                              name="report"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Summary Tran. Basic Course Wise"
                              type="radio"
                              name="report"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={3}></Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="DCR Details Demand Wise"
                              type="radio"
                              name="report"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="DCR Details Fee Head Description Wise"
                              type="radio"
                              name="report"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={3}></Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="DCR with Scholarship"
                              type="radio"
                              name="report"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="DCR Details with GST"
                              type="radio"
                              name="report"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={3}></Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Consolidated Summary Tran. Course Wise"
                              type="radio"
                              name="report"
                            />
                          </Col>
                          <Col className="mt-2"></Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Session
                              <span className="text-danger">*</span>
                            </Form.Label>
                          </Col>
                          <Col sm={9}>
                            <Form.Select
                              type="text"
                              placeholder="Please Enter "
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Receipt Type
                              <span className="text-danger">*</span>
                            </Form.Label>
                          </Col>
                          <Col sm={9}>
                            <Form.Select
                              type="text"
                              placeholder="Please Enter "
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Receipt Book Name
                              <span className="text-danger">*</span>
                            </Form.Label>
                          </Col>
                          <Col sm={9}>
                            <Form.Select
                              type="text"
                              placeholder="Please Enter "
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Counter Type
                            </Form.Label>
                          </Col>
                          <Col sm={9}>
                            <Form.Select
                              type="text"
                              placeholder="Please Enter "
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Transaction Type
                            </Form.Label>
                          </Col>
                          <Col sm={9}>
                            <Form.Select
                              type="text"
                              placeholder="Please Enter "
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Export To Excel
                            </Form.Label>
                          </Col>
                          <Col sm={9}>
                            <Form.Check
                              className="col-form-label form-label"
                              type="checkbox"
                              id="active"
                            >
                              <Form.Check.Input type="checkbox" />
                            </Form.Check>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <Form.Label className="col-form-label form-label">
                              Counter
                            </Form.Label>
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="All"
                              type="radio"
                              name="Counter"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Selected"
                              type="radio"
                              name="Counter"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Particular"
                              type="radio"
                              name="Counter"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Label className="col-form-label form-label">
                              Courses
                            </Form.Label>
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="All"
                              type="radio"
                              name="courses"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Selected"
                              type="radio"
                              name="courses"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Basic Course"
                              type="radio"
                              name="courses"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Receipt Status
                            </Form.Label>
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="With Cancelled"
                              type="radio"
                              name="receipt"
                            />
                          </Col>
                          <Col className="mt-2">
                            <Form.Check
                              label="Without Cancelled"
                              type="radio"
                              name="receipt"
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Feeheads
                            </Form.Label>
                          </Col>
                          <Col sm={4}>
                            <Form.Select
                              type="text"
                              placeholder="Please Enter "
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Date From
                              <span className="text-danger">*</span>
                            </Form.Label>
                          </Col>
                          <Col sm={8}>
                            <Form.Control
                              type="date"
                              placeholder="Please Enter "
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Date To
                              <span className="text-danger">*</span>
                            </Form.Label>
                          </Col>
                          <Col sm={8}>
                            <Form.Control
                              type="date"
                              placeholder="Please Enter "
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3">
                          <Col sm={3}>
                            <Form.Label className="col-form-label form-label">
                              Format Type
                              <span className="text-danger">*</span>
                            </Form.Label>
                          </Col>
                          <Col sm={8}>
                            <Form.Select
                              type="date"
                              placeholder="Please Enter "
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="primary" type="submit">
                          Report
                        </Button>

                        <Button
                          variant="secondary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="secondary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Request Mail
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

export default DCRReport;
