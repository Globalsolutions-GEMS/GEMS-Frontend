"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const Address = () => {
  const hasMounted = useMounted();

  return (
    <Container>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <Form>
                <Card className="mb-5">
                  <Card.Body>
                    <PageHeading heading="Permanent Address" />
                    <Row className="mb-3 ">
                      <Col>
                        <span className="text-danger">*</span>
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <span className="text-danger">*</span>
                        <Form.Label>State</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <span className="text-danger">*</span>
                        <Form.Label>District</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3 ">
                      <Col>
                        <span className="text-danger">*</span>
                        <Form.Label>City</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>Taluka</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>Permanent Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3 mt-2">
                      <Col>
                        <Form.Label>House No</Form.Label>
                        <Form.Control
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>Grampanchayat</Form.Label>
                        <Form.Control
                          type="text"
                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control
                          type="text"
                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <PageHeading heading="Temporary Address" />
                    <Row className="mb-3 ">
                      <Row>
                        <Col>
                          <Form.Check // prettier-ignore
                            type="checkbox"
                            id=""
                            label={<>Same as Permanent Address </>}
                          />
                        </Col>
                      </Row>
                      <Col>
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>State</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>District</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3 ">
                      <Col>
                        <Form.Label>City</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>Taluka</Form.Label>
                        <Form.Select
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>Temporary Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3 mt-2">
                      <Col>
                        <Form.Label>House No</Form.Label>
                        <Form.Control
                          type="text"
                          //placeholder="Please Enter Title"

                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>Grampanchayat</Form.Label>
                        <Form.Control
                          type="text"
                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control
                          type="text"
                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                  <Col className="d-flex align-items-center justify-content-center">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
                  </Card.Body>
                </Card>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Address;
