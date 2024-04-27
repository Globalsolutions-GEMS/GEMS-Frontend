"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Table,
  Pagination,
  Breadcrumb,
} from "react-bootstrap";
import { PageHeading } from "widgets";
import { createCashBook, getCashBook, updateCashBook } from "app/api/cashbook";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SlotAllotment = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Slot Allotment" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Attendance</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
        <Breadcrumb.Item active>Slot Allotment</Breadcrumb.Item>
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
                        Academic Session<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter Slot Name"
                          id="receiptBookCode"
                          required
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Slot Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter Receipt Book Name"
                          id="receiptBookName"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Basic Course<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter Short Name"
                          id="cashReceiptNo"
                          required
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Active
                      </Form.Label>
                      <Col className="mt-2 col-sm-4">
                        <Form.Check
                          type="switch"
                          id="checkIfActive"
                          label="If Active"
                          defaultChecked
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Course
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter Slot Sequence Number"
                          id="documentReceiptNo"
                          required
                        />
                      </Col>
                     
                    </Row>
                    <Row className="mb-3">
                      <Col></Col>
                      
                    </Row>
                    <Row className="align-items-center">
                      <Col className="mt-4 d-flex align-items-center justify-content-center">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <ToastContainer style={{ marginTop: "40px" }} />
                        <Button
                          variant="secondary"
                          type="reset"
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
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <b>Course Name</b>
              </th>
              <th>
                <b>Slot No.</b>
              </th>
              <th>
                <b>Slot Name</b>
              </th>
              <th>
                <b>Time From</b>
              </th>
              <th>
                <b>Time To</b>
              </th>
              <th>
                <b>Slot Belog In</b>
              </th>
              <th className="col-2">
                <b>Action</b>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </>
    </Container>
  );
};

export default SlotAllotment;
