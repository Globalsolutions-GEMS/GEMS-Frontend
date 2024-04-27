"use client";
// import node module libraries
import { Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const SubkectCategoryReportStudentWise = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Subkect Category Report - Student Wise" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">NEP</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Report</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Reports</Breadcrumb.Item>
        <Breadcrumb.Item active>
          Subkect Category Report - Student Wise
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Form>
            <Card>
              <Card.Body>
                <div>
                  {hasMounted && (
                    <Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Session
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select
                            type="text"
                            id="Academic Year"
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Programme
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select
                            type="text"
                            id="Academic Year"
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Course/Year
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select type="text" id="Academic Year" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Major Discipline
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select type="text" id="Academic Year" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Subject Category
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select type="text" id="Academic Year" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Caste Category
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select type="text" id="Academic Year" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Report Type
                        </Form.Label>
                        <Col sm={4} className="mb-lg-0">
                          <Form.Check
                          className="mt-3"
                            inline
                            label="With Cancel"
                            name="group1"
                            type="radio"
                            id="radio"
                          />
                          <Form.Check
                            inline
                            label="Without Cancel"
                            name="group1"
                            type="radio"
                            id="radio"
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

export default SubkectCategoryReportStudentWise;
