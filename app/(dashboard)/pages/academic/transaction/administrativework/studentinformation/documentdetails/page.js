"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { PageHeading } from "widgets";
import useMounted from "hooks/useMounted";

const MAX_IMAGE_SIZE_KB = 500; // Maximum image size in kilobytes

const DocumentDetails = () => {
  const hasMounted = useMounted();
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeKB = file.size / 1024; // Convert bytes to kilobytes
      if (fileSizeKB <= MAX_IMAGE_SIZE_KB) {
        setPhoto(URL.createObjectURL(file));
      } else {
        // Reset photo state and display error message
        setPhoto(null);
        alert("Document size exceeds 500kb limit");
      }
    } else {
      setPhoto(null);
    }
  };

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
                      <Col>
                        <Container fluid>
                          <PageHeading heading="Student Documents/Certificates" />
                          <Row className="mb-8">
                            <Col xl={12} lg={8} md={12} xs={12}>
                              <Card>
                                <Card.Body>
                                  <Row className="mt-1">
                                    <Form.Label className="col-sm-5 col-form-label form-label">
                                      Select Document/Certificate
                                    </Form.Label>
                                    <Col sm={7} className="mb-3 mb-lg-0">
                                      <Form.Select
                                        type="text"
                                        id="course"
                                        required
                                      />
                                    </Col>
                                  </Row>
                                  <Row className="mt-1">
                                    <Form.Label className="col-sm-5 col-form-label form-label">
                                      Upload Document
                                    </Form.Label>
                                    <Col sm={7} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                      />
                                      {photo && (
                                        <img
                                          src={photo}
                                          alt="Photo Preview"
                                          style={{ marginTop: "10px" }}
                                        />
                                      )}
                                    </Col>
                                  </Row>
                                  <Row className="mt-3">
                                    <Form.Label className="col-sm-5 col-form-label form-label">
                                      No. of Originals
                                    </Form.Label>
                                    <Col sm={7} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        placeholder="Please Enter No. of Originals"
                                        type="text"
                                        id="course"
                                        required
                                      />
                                    </Col>
                                  </Row>
                                  <Row className="mt-3">
                                    <Form.Label className="col-sm-5 col-form-label form-label">
                                      Document/Certificate No.
                                    </Form.Label>
                                    <Col sm={7} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        placeholder="Please Enter Document/Certificate No."
                                        type="text"
                                        id="course"
                                        required
                                      />
                                    </Col>
                                  </Row>
                                  <Row className="mt-3">
                                    <Form.Label className="col-sm-5 col-form-label form-label">
                                      Document/Certificate Date
                                    </Form.Label>
                                    <Col sm={7} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        placeholder="Please Enter Document/Certificate Date"
                                        type="text"
                                        id="course"
                                        required
                                      />
                                    </Col>
                                  </Row>
                                  <Row className="mt-3">
                                    <Form.Label className="col-sm-5 col-form-label form-label">
                                      Document/Certificate Receipt No.
                                    </Form.Label>
                                    <Col sm={7} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        placeholder="Please Enter Document/Certificate Date"
                                        type="text"
                                        id="course"
                                        disabled
                                      />
                                    </Col>
                                  </Row>
                                  <Row className="mt-3">
                                    <Form.Label className="col-sm-5 col-form-label form-label">
                                      File Type
                                    </Form.Label>
                                    <Col sm={7} className="mb-3 mb-lg-0">
                                      <Form.Select
                                        placeholder="Please Enter Document/Certificate Date"
                                        type="text"
                                        id="course"
                                      />
                                    </Col>
                                  </Row>
                                  <Row className="mt-3">
                                    <Col className="d-flex align-items-center justify-content-center mb-3">
                                      <Button
                                        variant="primary"
                                        type="submit"
                                        style={{ marginRight: "10px" }}
                                      >
                                        Submit
                                      </Button>
                                      <Button
                                        variant="secondary"
                                        type="submit"
                                        style={{ marginRight: "10px" }}
                                      >
                                        Cancel
                                      </Button>
                                      <Button variant="secondary" type="submit">
                                        Update Status
                                      </Button>
                                    </Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col>
                        <Container fluid>
                          <PageHeading heading="Document/Certificate List" />
                          <Row className="mb-8">
                            <Col xl={12} lg={8} md={12} xs={12}>
                              <Card>
                                <Card.Body>
                                  {/* Table will go here  */}
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
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

export default DocumentDetails;
