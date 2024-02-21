"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";

const Medium = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Medium" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
        <Breadcrumb.Item active>Medium</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Medium Code
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Medium Code"
                          id="shortname"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="email"
                      >
                        Medium Description
                      </Form.Label>
                      <Col md={9} xs={12}>
                        <Form.Control
                          type="email"
                          placeholder="Please Enter Medium Description"
                          id="concessiondescription"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Check.Label className="col-sm-3 col-form-label form-label">
                        Is Default
                      </Form.Check.Label>
                      <Col md={9} xs={12}>
                        <Form.Check
                          className="col-sm-3 col-form-label form-label"
                          type="checkbox"
                          id="active"
                        >
                          <Form.Check.Input type="checkbox" />
                          <Form.Check.Label>Check If Default</Form.Check.Label>
                        </Form.Check>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Active
                      </Form.Label>
                      <Col className='mt-3'>
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

export default Medium;
