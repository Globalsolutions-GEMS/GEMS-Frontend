"use client";
import React from "react";
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
import { PageHeading } from "widgets"; // Assuming 'widgets' is a custom component library
import useMounted from "hooks/useMounted"; // Assuming 'hooks/useMounted' is a custom hook

const RailwayConcessionApproval = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Railway Concession Approval" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Administrative Work</Breadcrumb.Item>
        <Breadcrumb.Item active>Railway Concession Approval</Breadcrumb.Item>
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
                        <Form.Select type="text" placeholder="Select Academic Year" id="Academic Year" required />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Apply From Date
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control type="date" placeholder="Please Enter Apply From Date" id="course" required />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Apply To Date
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control type="date" placeholder="Please Enter Apply To Date" id="course" required />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Status<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="Select Academic Year" id="Academic Year" required />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Export To Excel
                      </Form.Label>
                      <Form.Check className="col-sm-8 col-form-label form-label" type="checkbox" id="active">
                        <Form.Check.Input type="checkbox" />
                      </Form.Check>
                    </Row>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center mb-3">
                        <Button variant="primary" type="submit">
                          Report
                        </Button>
                        <Button variant="primary" type="" style={{ marginLeft: "10px" }}>
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

export default RailwayConcessionApproval;
