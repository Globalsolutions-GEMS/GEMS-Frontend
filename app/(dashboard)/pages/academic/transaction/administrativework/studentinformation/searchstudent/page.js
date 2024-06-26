"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchStudent = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid >
            

            <Row className="mb-1">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted && (
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-2 col-form-label form-label"
                                             
                                            >
                                                Academis Academic Year<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Select"
                                                    id="Academic Year"
                                                    required
                                                />
                                            </Col>
                                            <Form.Label
                                                className="col-sm-2 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Programme<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Select"
                                                    id="Academic Year"
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-2 col-form-label form-label"
                                            >
                                                Search Criteria
                                            </Form.Label>
                                           
                                            <Col className="mt-2">
                                                <Form.Check
                                                    label="Student Id."
                                                    type="radio"
                                                />
                                            </Col>
                                            <Col className="mt-2">
                                                <Form.Check
                                                    label="Name"
                                                    type="radio"
                                                />
                                            </Col>
                                            <Col className="mt-2">
                                                <Form.Check
                                                    label="Roll No."
                                                    type="radio"
                                                />
                                            </Col>
                                            <Col className="mt-2">
                                                <Form.Check
                                                    label="User Defined"
                                                    type="radio"
                                                />
                                            </Col>  
                                        </Row>
                                        <Row className="mb-3">
                                        <Form.Label
                                        className="col-sm-2 col-form-label form-label"
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
                                  
                                            <Form.Label
                                                className="col-sm-2 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Course
                                            </Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    id="certificatecode"
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
        </Container>
    );
};

export default SearchStudent;
