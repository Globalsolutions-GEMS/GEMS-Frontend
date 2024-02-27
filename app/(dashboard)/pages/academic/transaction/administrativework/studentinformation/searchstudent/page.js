"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

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
                                                Academis Session<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Select"
                                                    id="session"
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
                                                    id="session"
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
                                            </Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="certificatecode"
                                                    placeholder="Enter Minimum 3 Letters"
                                                />
                                            </Col>
                                            <Form.Label
                                                className="col-sm-2 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Course/Year/Standard
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
