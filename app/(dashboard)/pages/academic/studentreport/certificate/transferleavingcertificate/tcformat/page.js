"use client";
import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

const TCFormat = () => {
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
                    TC Format<span className="text-danger">*</span>
                  </Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Select type="text" placeholder="" id="bankCode">
                      <option>Transfer Certificate</option>
                      <option>Leaving Certificate</option>
                    </Form.Select>
                  </Col>

                  <Col>
                    <Form.Check
                      label="With Institute Name"
                      type="radio"
                      name="radio"
                    />
                  </Col>
                  <Col>
                    <Form.Check label="Without Institute Name" type="radio" name="radio" />
                  </Col>
                </Row>
                
                <Row className="align-items-center">
                  <Col className="mt-4 d-flex align-items-center justify-content-center">
                    <Button variant="primary" type="submit">
                      Preview Report
                    </Button>
                    <Button className="ms-2" variant="secondary" type="">
                      Final Report
                    </Button>
                    <Button className="ms-2" variant="secondary" type="">
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

export default TCFormat;
