"use client";
// import node module libraries
import { Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const StudentDocumentReceipt = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Student Document Receipt" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Data Entry</Breadcrumb.Item>
        <Breadcrumb.Item active>Student Document Receipt</Breadcrumb.Item>
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
                          placeholder="Please Enter "
                          id="mothertongue"
                          required
                        />
                      </Col>

                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Search Criteria<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm>
                        <Form.Check
                          label="Student Id"
                          type="radio"
                          name="radio"
                        />
                      </Col>
                      <Col>
                        <Form.Check label="Name" type="radio" name="radio" />
                      </Col>
                      <Col>
                        <Form.Check
                          label="User Defined Field"
                          type="radio"
                          name="radio"
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
                          placeholder="Please Enter "
                          id="mothertongue"
                          required
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Student<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="mothertongue"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Course<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select id="session    " required></Form.Select>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col className="d-flex align-items-center justify-content-center">
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
                        <Button
                          variant="secondary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Report
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

export default StudentDocumentReceipt;
