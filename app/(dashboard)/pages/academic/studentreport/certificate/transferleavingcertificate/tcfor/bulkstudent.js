"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import StudentDetails from "../studentdetails/bulkstudent";

const BulkStudentTC = () => {
  const hasMounted = useMounted();
  const [showStudentDetails, setShowStudentDetails] = useState(false); // State to track if "Show" button is clicked

  const handleShowDetails = () => {
    setShowStudentDetails(true);
  };
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
                    <Form.Select type="text" placeholder="" id="bankCode" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Programme<span className="text-danger">*</span>
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Select type="text" placeholder="" id="bankCode" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Course/Year/Standard
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Select type="text" id="bankCode" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Section
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Select type="text" id="bankCode" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-2 col-form-label form-label">
                    Order By
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Select type="text" id="bankCode">
                      <option value="fml">FirstName-MiddleName-LastName</option>
                      <option value="fml">LastName-FirstName-MiddleName</option>
                      <option value="fml">Roll Number</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Form.Label className="col-sm-2 col-form-label form-label"></Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Check
                      type="checkbox"
                      id="range"
                      label="Using Roll No Range"
                      required
                    />
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col className="mt-4 d-flex align-items-center justify-content-center">
                    <Button variant="primary" type="" 
                      onClick={handleShowDetails}>
                      Show
                    </Button>
                  </Col>
                </Row>
                <Row className="mt-7">{showStudentDetails && <StudentDetails />}</Row>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BulkStudentTC;
