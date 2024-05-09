"use client";
import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { PageHeading } from "widgets";

const StudentDetails = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <PageHeading heading="Student Details" />
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Title<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Gr No.
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        EID No./Reg No.
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        TC Date<span className="text-danger">*</span>
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
                        First Name
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Birth Date
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
                        Middle Name
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Adm Date<span className="text-danger">*</span>
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
                        Last Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Caste Category
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Gender<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Religion
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Father Name
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Nationality
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Mother Name
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Mother Tongue
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Roll Number
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Aadhar Number
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Birth Place
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                    </Row>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <PageHeading heading="Last Exam Details" />
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Last Exam Name
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Last Exam Year
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Last School/College
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Last Exam Month
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Last Class/Year/Course
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Grade
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        First Adm Class
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Eligib. Cert. No.
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        First Adm Date
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="date"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Last Semester
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Next Course
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        University
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="" id="bankCode" />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Exam Roll/Seat Number
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                    </Row>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <PageHeading heading="Subject Studied" />
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Part I
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Part II
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Part III
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                    </Row>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <PageHeading heading="Conduct" />
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Conduct
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Result
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Progress
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Leaving Date
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
                        Studying Since
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Identity Mark 1
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Reason
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Identity Mark 2
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Further College
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder=""
                          id="bankCode"
                        />
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

export default StudentDetails;
