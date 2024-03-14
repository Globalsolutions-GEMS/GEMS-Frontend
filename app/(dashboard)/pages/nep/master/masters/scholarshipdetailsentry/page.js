"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container, Table } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const ScholarshipDetailsEntry = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Scholarship Details Entry" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">NEP</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Masters</Breadcrumb.Item>
        <Breadcrumb.Item active>Scholarship Details Entry</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Form>
            <Card>
              <Card.Body>
                <div>
                  {hasMounted && (
                    <Row>
                      <Col sm={12}>
                        <Row className="mb-3">
                          <Form.Label
                            className="col-sm-3 col-form-label form-label"
                            htmlFor="fullName"
                          >
                            Scholarship Name
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={3} className="mb-3 mb-lg-0">
                            <Form.Select
                              type="text"
                              placeholder="Please Select Scholarship Name"
                              id="Academic Year"
                              required
                            />
                          </Col>
                          <Form.Label
                            className="col-sm-2 col-form-label form-label"
                            htmlFor="fullName"
                          >
                            Application Date
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Control
                              type="date"
                              placeholder="Please Enter Application Date"
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
                            Course<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={3} className="mb-3 mb-lg-0">
                            <Form.Select
                              type="text"
                              placeholder="Please Select Course"
                              id="Academic Year"
                              required
                            />
                          </Col>
                          <Form.Label
                            className="col-sm-2 col-form-label form-label"
                            htmlFor="fullName"
                          >
                            Application Number
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Control
                              type="text"
                              placeholder="Please Enter Application Number"
                              id="Academic Year"
                              required
                            />
                          </Col>
                        </Row>

                        <Row className="mb-3">
                          <Col className="d-flex align-items-center justify-content-center">
                            <Button
                              variant="primary"
                              type="submit"
                              style={{ marginLeft: "10px" }}
                            >
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
                      </Col>
                      <Col sm={4}></Col>

                      <Row>
                        <Col>
                          <Table striped border hower>
                            <thead>
                              <tr>
                                <th style={{ width: "500px" }}>
                                  <b>Student Name</b>
                                </th>
                                <th style={{ width: "500px" }}>
                                  <b>Course Name</b>
                                </th>
                                <th className="col-3">
                                  <b>Scholarship Name</b>
                                </th>
                                <th>
                                  <b>Scholarship Application No.</b>
                                </th>
                                <th>
                                  <b>Scholarship Application Date</b>
                                </th>
                                <th>
                                  <b>Is Verified</b>
                                </th>
                              </tr>
                            </thead>
                          </Table>
                        </Col>
                      </Row>
                    </Row>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ScholarshipDetailsEntry;
