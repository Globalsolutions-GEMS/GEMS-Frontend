"use client";
// import node module libraries
import { Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const GeneralFineCollection = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="General Fine Collection" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Other Fees</Breadcrumb.Item>
        <Breadcrumb.Item active>General Fine Collection</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <Container fluid className="p-3">
                <Row>
                  <Col>
                    <PageHeading heading="Student Details" />
                    <Row className="mb-3">
                      <Col xl={12} lg={8} md={12} xs={12}>
                        <Card>
                          <Card.Body>
                            <div>
                              {hasMounted && (
                                <Form>
                                  <Col>
                                    <Row className="mb-3">
                                      <Form.Label className="col-sm-3 col-form-label form-label">
                                        Receipt Book
                                        <span className="text-danger">*</span>
                                      </Form.Label>
                                      <Col sm={3} className="mb-3 mb-lg-0">
                                        <Form.Select
                                          type="text"
                                          id="Academic Year"
                                          required
                                        />
                                      </Col>
                                      <Form.Label className="col-sm-3 col-form-label form-label">
                                        Course
                                        <span className="text-danger">*</span>
                                      </Form.Label>
                                      <Col sm={3} className="mb-3 mb-lg-0">
                                        <Form.Select
                                          type="text"
                                          id="Academic Year"
                                          required
                                        />
                                      </Col>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Label className="col-sm-3 col-form-label form-label">
                                        Search By
                                      </Form.Label>
                                      <Col className="mt-2">
                                        <Form.Check
                                          label="Student Id."
                                          type="radio"
                                        />
                                      </Col>
                                      <Col className="mt-2">
                                        <Form.Check label="Name" type="radio" />
                                      </Col>
                                      <Col className="mt-2">
                                        <Form.Check
                                          label="Roll No"
                                          type="radio"
                                        />
                                      </Col>
                                      <Col className="mt-2">
                                        <Form.Check
                                          label="User Field"
                                          type="radio"
                                        />
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Row className="mb-3">
                                    <Form.Label
                                      className="col-sm-3 col-form-label form-label"
                                      htmlFor="fullName"
                                    >
                                      Enter Input
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Col sm={4} className="mb-3 mb-lg-0">
                                      <InputGroup>
                                        <Form.Control
                                          placeholder="Input group append..."
                                          aria-label="Input group append..."
                                          aria-describedby="basic-addon2"
                                        />
                                        <Button
                                          variant="outline-secondary"
                                          id="button-addon2"
                                        >
                                          <FontAwesomeIcon icon={faSearch} />
                                        </Button>
                                      </InputGroup>
                                    </Col>
                                  </Row>
                                  <Row className="mb-3">
                                    <Form.Label
                                      className="col-sm-3 col-form-label form-label"
                                      htmlFor="fullName"
                                    >
                                      Title
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Select
                                        type="text"
                                        id="Academic Year"
                                        required
                                      />
                                    </Col>
                                    <Form.Label className="col-sm-3 col-form-label form-label">
                                      Last Name/Surname
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        type="text"
                                        id="Academic Year"
                                        required
                                      />
                                    </Col>
                                  </Row>
                                  <Row className="mb-3">
                                    <Form.Label className="col-sm-3 col-form-label form-label">
                                      First Name
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        type="text"
                                        id="Academic Year"
                                        required
                                      />
                                    </Col>
                                    <Form.Label className="col-sm-3 col-form-label form-label">
                                      Middle Name
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        type="text"
                                        id="Academic Year"
                                        required
                                      />
                                    </Col>
                                  </Row>
                                  <Row className="mb-3">
                                    <Form.Label className="col-sm-3 col-form-label form-label">
                                      Total Amount
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        type="text"
                                        disabled
                                        id="Academic Year"
                                        required
                                      />
                                    </Col>
                                    <Form.Label className="col-sm-3 col-form-label form-label">
                                      Remark
                                    </Form.Label>
                                    <Col sm={3} className="mb-3 mb-lg-0">
                                      <Form.Control
                                        type="text"
                                        id="Academic Year"
                                        required
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
                  </Col>
                </Row>
              </Container>

              <div>
                {hasMounted && (
                  <Form>
                    <Container fluid className="p-3">
                      <Row>
                        <Col>
                          <PageHeading heading="Payment" />
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
                                            Payment Mode
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Select
                                              type="text"
                                              id="Course/Standard"
                                            />
                                          </Col>
                                          <Form.Label
                                            className="col-sm-2 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Amount
                                          </Form.Label>
                                          <Col sm={3} className="mb-3 mb-lg-0">
                                            <Form.Control
                                              type="text"
                                              id="Course/Standard"
                                            />
                                          </Col>
                                          <Col>
                                            <Button
                                              variant="primary"
                                              type="submit"
                                            >
                                              Add
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
                        </Col>
                      </Row>
                    </Container>

                    <Row className="align-items-center">
                      <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center"
                      >
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

export default GeneralFineCollection;
