"use client";
// import node module libraries
import { Alert, Badge,  Breadcrumb,  Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const SettlementReportCashbook = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Settlement Report-Cashbook" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Finance Reports</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Online Payment Report</Breadcrumb.Item>
        <Breadcrumb.Item active>Settlement Report-Cashbook</Breadcrumb.Item>
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
                        Academic Year<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="Academic Year"
                          required
                        />
                      </Col>

                      <Col></Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
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
                      <Col></Col>
                    </Row>
                   

                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        From Date<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="date"
                          placeholder="Please Enter "
                          id="Academic Year"
                          required
                        />
                      </Col>
                      <Col></Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        To Date<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="date"
                          placeholder="Please Enter "
                          id="Academic Year"
                          required
                        />
                      </Col>
                      <Col></Col>
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

export default SettlementReportCashbook;
