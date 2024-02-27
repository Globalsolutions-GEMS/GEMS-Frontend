"use client";
// import node module libraries
import React, { useState, useEffect } from "react";
import { Breadcrumb, Container, Table } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const StudentAdmissionCancellationRequestReport = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Student Admission Cancellation Request Report" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Student Report</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
        <Breadcrumb.Item active>
          Student Admission Cancellation Request Report
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row>
                      <Col>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                            Session<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={8} className="mb-3 mb-lg-0">
                            <Form.Select
                              id="session    "
                              required
                            ></Form.Select>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                            Programme
                          </Form.Label>
                          <Col sm={8} className="mb-3 mb-lg-0">
                            <Form.Select
                              id="session    "
                              required
                            ></Form.Select>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                            Course
                          </Form.Label>
                          <Col sm={8} className="mb-3 mb-lg-0">
                            <Form.Select
                              id="session    "
                              required
                            ></Form.Select>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                            From Date<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={8} className="mb-3 mb-lg-0">
                            <Form.Control type="date" />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                            To Date<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={8} className="mb-3 mb-lg-0">
                            <Form.Control type="date" />
                          </Col>
                        </Row>

                        <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Export To Excel
                      </Form.Label>
                      <Form.Check
                        className="col-sm-2 col-form-label form-label"
                        type="checkbox"
                        id="active"
                      >
                        <Form.Check.Input type="checkbox" />
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
                        </Row>
                      </Col>
                      <Col>
                        <Table striped bordered hover>
                          <thead>
                            <tr></tr>
                          </thead>
                          <tbody></tbody>
                        </Table>
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

export default StudentAdmissionCancellationRequestReport;
