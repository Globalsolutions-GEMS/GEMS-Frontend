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

const BlankAttendanceSheet = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Blank Attendance Sheet" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Student Report</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
        <Breadcrumb.Item active>Blank Attendance Sheet</Breadcrumb.Item>
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
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Session<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Select
                              id="session    "
                              required
                            ></Form.Select>
                          </Col>
                          <Form.Label
                            className="col-sm-2 col-form-label form-label"
                            htmlFor="email"
                          >
                            Programme<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Select
                              type="text"
                              id="headDescription"
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Course
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Select type="text" required />
                          </Col>
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Section
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Select type="text" />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Admission From
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Control type="date" />
                          </Col>
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Admission To
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Control type="date" />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Medium
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Select type="text" />
                          </Col>
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Subject
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Select type="text" />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Month<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Select type="text" required />
                          </Col>
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Report Format<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Select type="text" required />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Name Type<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={3} className="mb-3 mb-lg-0">
                            <Form.Check
                              label="FName +MName+LName"
                              name="nameType"
                              type="radio"
                            />
                          </Col>
                          <Form.Label className="col-sm-2 col-form-label form-label"></Form.Label>
                          <Col sm={3} className="mb-3 mb-lg-0">
                            <Form.Check
                              label="LName+FName+MName"
                              name="nameType"
                              type="radio"
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Sort By<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Check
                              label="First Name"
                              name="sortName"
                              type="radio"
                            />
                          </Col>
                          <Form.Label className="col-sm-2 col-form-label form-label"></Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Check
                              label="Last Name"
                              name="sortName"
                              type="radio"
                            />
                          </Col>
                          <Form.Label className="col-sm-2 col-form-label form-label"></Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Check
                              label="Roll No"
                              name="sortName"
                              type="radio"
                            />
                          </Col>
                          <Form.Label className="col-sm-2 col-form-label form-label"></Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Check
                              label="Section"
                              name="sortName"
                              type="radio"
                            />
                          </Col>
                          <Form.Label className="col-sm-2 col-form-label form-label"></Form.Label>
                          <Col sm={4} className="mb-3 mb-lg-0">
                            <Form.Check
                              label="Admission Date"
                              name="sortName"
                              type="radio"
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Check
                            className="ms-3 col-sm-3 col-form-label form-label"
                            type="checkbox"
                            id="active"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Excel Export</Form.Check.Label>
                          </Form.Check>
                        </Row>
                        <Row className="mb-3">
                          <Form.Check
                            className="ms-3 col-sm-3 col-form-label form-label"
                            type="checkbox"
                            id="active"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Excel Export Subject Wise
                            </Form.Check.Label>
                          </Form.Check>
                        </Row>
                        <Row className="mb-3">
                          <Form.Check
                            className="ms-3 col-sm-3 col-form-label form-label"
                            type="checkbox"
                            id="active"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Sign Report</Form.Check.Label>
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
                      {/* <Col>
                        <Table striped bordered hover>
                          <thead>
                            <tr></tr>
                          </thead>
                          <tbody></tbody>
                        </Table>
                      </Col> */}
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

export default BlankAttendanceSheet;
