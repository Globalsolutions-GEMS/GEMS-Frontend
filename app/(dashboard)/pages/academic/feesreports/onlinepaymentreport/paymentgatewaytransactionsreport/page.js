"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const PaymentGatewayTransactionsReport = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Payment Gateway Transactions Report" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Reports</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Online Payment Report</Breadcrumb.Item>
        <Breadcrumb.Item active>Payment Gateway Transactions Report</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Search Criteria<span className="text-danger">*</span>
                      </Form.Label>
                      <Col>
                        <Form.Check label="Name" type="radio" />
                      </Col>
                      <Col>
                        <Form.Check label="Student Id" type="radio" />
                      </Col>
                      <Col>
                        <Form.Check label="STransaction Id" type="radio" />
                      </Col>
                      
                    </Row>
                    <Row>
                      <Form.Check
                        className="col-sm-3 col-form-label form-label"
                        type="checkbox"
                        id="active"
                      >
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label>Export To Excel</Form.Check.Label>
                      </Form.Check>
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

export default PaymentGatewayTransactionsReport;
