"use client";
import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

const NoObjectionCertificate = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Session<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Date Of Birth
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="date"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Course<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Remark
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        
                      >
                        Search By
                      </Form.Label>
                      <Col sm={4} className=" mb-lg-0 mt-2">
                        <Row>
                          <Col>
                            <Form.Check
                              label="Student Id"
                              type="radio"
                              name="radio"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              label="Name"
                              type="radio"
                              name="radio"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              label="User Field"
                              type="radio"
                              name="radio"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                      >
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
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                      >
                        Enter input
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          id="degrediplomaname"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Caste
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control type="text" placeholder="" id="bankCode" />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Section
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NoObjectionCertificate;
