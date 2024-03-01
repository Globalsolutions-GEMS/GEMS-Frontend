"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { useState } from "react";
import { creteCertifcate } from "app/api/certificate";

const Certificate = () => {
  const hasMounted = useMounted();

  const [formData, setFormData] = useState({
    certificateCode: "",
    certificateName: "",
    originalCertificate: "",
    xeroxCertificate: "",
    active: false,
    document: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await creteCertifcate(formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Certificate" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
        <Breadcrumb.Item active>Certificate</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Certificate Code<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Certificate Code"
                          id="certificateCode"
                          value={formData.certificateCode}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Certificate Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={9} xs={12}>
                        <Form.Control
                          placeholder="Please Enter Certificate Name"
                          id="certificateName"
                          value={formData.certificateName}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Original Certificate
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={9} xs={12}>
                        <Form.Control
                          placeholder="1"
                          id="originalcertificate"
                          disabled
                          readonly
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Xerox Certificate<span className="text-danger">*</span>
                      </Form.Label>
                      <Col md={9} xs={12}>
                        <Form.Control
                          placeholder="Please Enter Xerox Certificate"
                          id="xeroxcertificate"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Check.Label className="col-sm-3 col-form-label form-label">
                        Document
                      </Form.Check.Label>
                      <Col md={9} xs={12}>
                        <Form.Check
                          className="col-sm-3 col-form-label form-label"
                          type="checkbox"
                          id="document"
                        >
                          <Form.Check.Input type="checkbox" />
                          <Form.Check.Label>Check If Document</Form.Check.Label>
                        </Form.Check>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Active
                      </Form.Label>
                      <Col className='mt-2'>
                        <Form.Check
                          type="switch"
                          id="checkIfActive"
                          label="Check If Active"
                          defaultChecked
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                        <Button variant="primary" type="submit">
                          Submit
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

export default Certificate;
