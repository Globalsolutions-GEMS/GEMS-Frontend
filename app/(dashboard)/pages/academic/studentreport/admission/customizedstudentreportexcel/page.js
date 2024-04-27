"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const CustomizedStudentReportExcel = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Customized Student Report - Excel" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Student Reports</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
        <Breadcrumb.Item active>
          Customized Student Report - Excel
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
                        Academic Year<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select"
                          id="Academic Year"
                          required
                        />
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Courses<span className="text-danger">*</span>
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
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Receipt Book<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="Academic Year"
                          required
                        />
                      </Col>

                      <Col sm={3}></Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Export To Excel
                      </Form.Label>
                      <Col sm={4} className="mb-3 mt-2 mb-lg-0">
                        <Form.Check
                          type="checkbox"
                          placeholder="Please Select Course"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Button
                          variant="primary"
                          type=""
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
                    </Row>
                    <Form.Label
                      className="col-sm-12 col-form-label form-label"
                      htmlFor="fullName"
                    >
                      Fields
                    </Form.Label>
                    <Form.Label
                      className="col-sm-12 col-form-label form-label"
                      htmlFor="fullName"
                    >
                      Order By
                    </Form.Label>
                    <Form.Label
                      className="col-sm-12 col-form-label form-label"
                      htmlFor="fullName"
                    >
                      Condition
                    </Form.Label>
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

export default CustomizedStudentReportExcel;
