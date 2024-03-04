"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";

const CancelAdmission = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Cancel Admission" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">NEP</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Masters</Breadcrumb.Item>
        <Breadcrumb.Item active>Cancel Admission</Breadcrumb.Item>
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
                        htmlFor="email"
                      >
                        Bank<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Select
                          type="year"
                          placeholder="Please Select"
                          id="shortname"
                          required
                        />
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="email"
                      >
                        IFSC Code<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Control
                          type="year"
                          placeholder="Please Enter IFSC Code"
                          id="shortname"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="email"
                      >
                        Bank Location<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Select
                          type="year"
                          placeholder="Please Select"
                          id="shortname"
                          required
                        />
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="email"
                      >
                        MICR Number<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Control
                          type="year"
                          placeholder="Please Enter MICR Number"
                          id="shortname"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="email"
                      >
                        Account Number<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Control
                          type="year"
                          placeholder="Please Select Account Number"
                          id="shortname"
                          required
                        />
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="email"
                      >
                        Account Holder Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Control
                          type="year"
                          placeholder="Please Enter Account Holder Name"
                          id="shortname"
                          required
                        />
                      </Col>
                    </Row>
                    
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="email"
                      >
                        Cancel Reason<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Control as="textarea" aria-label=""/>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="primary" type="submit">
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

export default CancelAdmission;
