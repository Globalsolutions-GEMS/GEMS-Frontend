"use client";
// import node module libraries
import { Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const MissingTimetable = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Missing Timetable" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Attandance</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Attandance Report</Breadcrumb.Item>
        <Breadcrumb.Item active>Missing Timetable</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Attendance Session<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" id="degreediploma" required />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Teacher<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" id="degreediploma" required />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Programme<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" id="degreediploma" required />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        From Date<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control type="date" id="degreediploma" required />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Course<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" id="degreediploma" required />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        To Date<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control type="date" id="degreediploma" required />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col></Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Report Type<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Check
                          className="mt-2"
                          inline
                          label="Day Order"
                          name="group1"
                          type="radio"
                          id="ch1"
                        />
                        <Form.Check
                          inline
                          label="Day Order Slot Wise"
                          name="group1"
                          type="radio"
                          id="ch1"
                        />
                      </Col>
                    </Row>
                   
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center mt-4">
                        <Button variant="primary" type="submit">
                          Missing Time Table Report
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

export default MissingTimetable;
