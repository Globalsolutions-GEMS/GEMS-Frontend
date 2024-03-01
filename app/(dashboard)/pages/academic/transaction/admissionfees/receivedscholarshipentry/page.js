"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { Link } from "react-feather";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const ReceivedScholarshipEntry = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Received Scholarship Entry" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Admission Fees</Breadcrumb.Item>
        <Breadcrumb.Item active>Received Scholarship Entry</Breadcrumb.Item>
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
                        Programme<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="mothertongue"
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Course<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="mothertongue"
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Search Crieteria<span className="text-danger">*</span>
                      </Form.Label>

                      <Col className="mt-2">
                        <Form.Check label="Student Id." type="radio" />
                      </Col>
                      <Col className="mt-2">
                        <Form.Check label="Name" type="radio" />
                      </Col>
                      <Col className="mt-2">
                        <Form.Check label="User Field" type="radio" />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Search Text
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
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
                        Student Name
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          id="Course/Standard"
                          disabled
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Fee Category
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          id="Course/Standard"
                          disabled
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Mobile No.
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          id="Course/Standard"
                          disabled
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Total Fees
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          id="Course/Standard"
                          disabled
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Paid /Concession Fees
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          id="Course/Standard"
                          disabled
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Payable Fees.
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          id="Course/Standard"
                          disabled
                        />
                      </Col>
                    </Row>

                    <Row>
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
                      </Col>
                      <Col></Col>
                    </Row>

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
                                            Receipt Mode
                                          </Form.Label>
                                          <Col sm={9} className="mb-3 mb-lg-0">
                                            <Form.Select
                                              type="text"
                                              id="Course/Standard"
                                            />
                                          </Col>
                                        </Row>
                                        <Row className="mb-3">
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Payment Mode
                                          </Form.Label>
                                          <Col sm={9} className="mb-3 mb-lg-0">
                                            <Form.Select
                                              type="text"
                                              id="Course/Standard"
                                            />
                                          </Col>
                                        </Row>
                                        <Row className="mb-3">
                                          <Form.Label
                                            className="col-sm-3 col-form-label form-label"
                                            htmlFor="fullName"
                                          >
                                            Amount
                                          </Form.Label>
                                          <Col sm={6} className="mb-3 mb-lg-0">
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
                        <Col></Col>
                      </Row>
                    </Container>
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

export default ReceivedScholarshipEntry;
