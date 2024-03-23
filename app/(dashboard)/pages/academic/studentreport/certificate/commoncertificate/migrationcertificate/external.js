"use client";
import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

const ExternalStudentMigration = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <Form>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Session<span className="text-danger">*</span>
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Select
                      type="text"
                      placeholder="Please Enter Bank Code"
                      id="bankCode"
                    />
                  </Col>
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Mother Name
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control
                      type="text"
                      placeholder="Please Enter Mother Name"
                      id="bankCode"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Course<span className="text-danger">*</span>
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Select
                      type="text"
                      placeholder="Please Enter Bank Code"
                      id="bankCode"
                    />
                  </Col>
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Student ID
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control
                      type="text"
                      placeholder="Please Enter Student ID"
                      id="bankCode"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Title
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Select type="text" id="bankCode" />
                  </Col>
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    TC No.
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control
                      type="text"
                      placeholder="Please Enter TC No."
                      id="bankCode"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    First Name
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control
                      type="text"
                      placeholder="Please Enter First Name"
                      id="bankCode"
                    />
                  </Col>
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Exam Year
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control
                      type="text"
                      placeholder="Please Enter Exam Year"
                      id="bankCode"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Middle Name
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control
                      type="text"
                      placeholder="Please Enter First Name"
                      id="bankCode"
                    />
                  </Col>
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Remark
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control
                      type="text"
                      placeholder="Please Enter Place of Birth"
                      id="bankCode"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Last Name
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control
                      type="text"
                      placeholder="Please Enter Middle Name"
                      id="bankCode"
                    />
                  </Col>
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Option
                  </Form.Label>
                  <Col sm={4} className=" mb-lg-0 mt-2">
                    <Row>
                      <Col>
                        <Form.Check
                          label="With Header"
                          type="radio"
                          name="radio"
                        />
                      </Col>
                      <Col>
                        <Form.Check
                          label="Without Header"
                          type="radio"
                          name="radio"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col className="mt-4 d-flex align-items-center justify-content-center">
                    <Button variant="primary" type="submit">
                      Report
                    </Button>
                    <Button
                      variant="secondary"
                      type="button"
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExternalStudentMigration;
