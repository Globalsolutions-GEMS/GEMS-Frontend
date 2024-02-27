"use client";
// import node module libraries
import { Alert, Badge,  Breadcrumb,  Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const InstallmentOutstandingReport = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Installment Outstanding Report " />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Reports</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Report</Breadcrumb.Item>
        <Breadcrumb.Item active>
        Installment Outstanding Report
        </Breadcrumb.Item>
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
                        Programme<span className="text-danger">*</span>
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

                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Course<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Demand With Fees Details"
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
                        Fee Category
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Demand With Fees Details"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Report Type
                      </Form.Label>

                      <Col sm={2} className="mt-2">
                        <Form.Check
                          label="All Student"
                          type="radio"
                          name="name"
                        />
                      </Col>
                      <Col sm={2} className="mt-2">
                        <Form.Check
                          label="Only Outstanding"
                          type="radio"
                          name="name"
                        />
                      </Col>
                     </Row>
                     <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Export To Excel</Form.Label>
                                            <Col sm={4} className="mb-3 mt-2 mb-lg-0">
                                                <Form.Check type="checkbox" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                        </Row >
                    <Row>
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
                      </Col>
                      <Col></Col>
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

export default InstallmentOutstandingReport;
