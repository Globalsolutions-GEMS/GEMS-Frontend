"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container, Table } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const BackdatedAttendanceConfig = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Backdated Attendance Config" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Attendance</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
        <Breadcrumb.Item active>Backdated Attendance Config</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Form>
            <Card>
              <Card.Body>
                <div>
                  {hasMounted && (
                    <Row>
                      <Col>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                          Attendance Session<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={8} className="mb-3 mb-lg-0">
                            <Form.Select
                              placeholder="Please Enter Board Of Study"
                              id="Academic Year"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                            Basic Course
                          </Form.Label>
                          <Col sm={8} className="mb-3 mb-lg-0">
                            <Form.Select
                              type="text"
                              placeholder=""
                              id="Academic Year"
                              
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                            Course
                          </Form.Label>
                          <Col sm={8} className="mb-3 mb-lg-0">
                            <Form.Select
                              type="text"
                              placeholder=""
                              id="Academic Year"
                              
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                          Number of Back Days
                          </Form.Label>
                          <Col sm={8} className="mb-3 mb-lg-0">
                            <Form.Control
                              type="text"
                              placeholder="Please Enter Number of Back Days"
                              id="Academic Year"
                            />
                          </Col>
                        </Row>
                        
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                            Active
                          </Form.Label>
                          <Col className="mt-2">
                            <Form.Check
                              type="switch"
                              id="checkIfActive"
                              label="If Active"
                              defaultChecked
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
                      <Col>
                        <Table striped border hower>
                          <thead>
                            <tr>
                              <th>
                                <b>Number of Back Days</b>
                              </th>
                            </tr>
                          </thead>
                        </Table>
                      </Col>
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

export default BackdatedAttendanceConfig;
