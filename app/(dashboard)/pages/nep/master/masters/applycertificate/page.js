"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";

const ApplyCertificate = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Apply Certificate" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">NEP</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Masters</Breadcrumb.Item>
        <Breadcrumb.Item active>Apply Certificate</Breadcrumb.Item>
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
                        
                      >
                        Certificate<span className="text-danger">*</span>
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
                        
                      >
                        Fees<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Control
                          type="year"
                          placeholder="Please Select"
                          id="shortname"
                          disabled
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        
                      >
                        No. Of Copies<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Select aria-label="">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="2">4</option>
                          <option value="3">5</option>
                        </Form.Select>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="primary" type="submit">
                          Apply
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
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        
                      >
                        Reason<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={4} xs={12}>
                        <Form.Control as="textarea" aria-label=""/>
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

export default ApplyCertificate;
