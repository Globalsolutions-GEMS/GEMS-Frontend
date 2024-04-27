"use client";
// import node module libraries
import { Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const SubjectWiseAttandanceReport = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Subject Wise Attandance Report" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Attandance</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Attandance Report</Breadcrumb.Item>
        <Breadcrumb.Item active>Subject Wise Attandance Report</Breadcrumb.Item>
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
                        Subject Type<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" id="degreediploma" required />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Attendance Type<span className="text-danger">*</span>
                      </Form.Label>
                      <Col
                        sm={4}
                        className="mb-3 mb-lg-0 d-flex align-items-center"
                      >
                        <Form.Check
                          className="mt-2"
                          inline
                          label="Date-Wise Consolidated Attendance"
                          name="group1"
                          type="radio"
                          id="ch1"
                        />
                        <Form.Check
                          inline
                          label="Subject Wise Sheet"
                          name="group1"
                          type="radio"
                          id="ch1"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Theory Batch<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="date" id="degreediploma" required />
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
                        Order By<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Check
                          className="mt-2"
                          inline
                          label="Roll Number"
                          name="group2"
                          type="radio"
                          id="ch1"
                        />
                        <Form.Check
                          inline
                          label="Name"
                          name="group2"
                          type="radio"
                          id="ch1"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center mt-4">
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

export default SubjectWiseAttandanceReport;
