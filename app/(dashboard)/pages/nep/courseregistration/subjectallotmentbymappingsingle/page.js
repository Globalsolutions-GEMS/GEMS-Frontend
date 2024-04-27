"use client";
// import node module libraries
import { Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const SubjectAllotmentByMappingSingle = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Subject Allotment By Mapping - Single" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">NEP</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Course Registration</Breadcrumb.Item>
        <Breadcrumb.Item active>Subject Allotment By Mapping - Single</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Form>
            <Card>
              <Card.Body>
                <div>
                  {hasMounted && (
                    <Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Section
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select
                            type="text"
                            id="Academic Year"
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Programme
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select
                            type="text"
                            id="Academic Year"
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
                          <Form.Select
                            type="text"
                            id="Academic Year"
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Medium
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select
                            type="text"
                            id="Academic Year"
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Search By
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Select
                            type="text"
                            id="Academic Year"
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Enter Input
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={4} className="mb-3 mb-lg-0">
                          <Form.Control
                            type="text"
                            id="Academic Year"
                            required
                          />
                        </Col>
                      </Row>
                      
                      <Row className="mb-3">
                        <Col className="d-flex align-items-center justify-content-center">
                          <Button
                            variant="primary"
                            type="submit"
                            style={{ marginLeft: "10px" }}
                          >
                            Submit
                          </Button>
                          <Button
                            variant="secondart"
                            type="clear"
                            style={{ marginLeft: "10px" }}
                          >
                            Cancel
                          </Button>
                        </Col>
                        <Col></Col>
                      </Row>
                    </Row>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SubjectAllotmentByMappingSingle;
