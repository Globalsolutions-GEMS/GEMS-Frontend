"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

import React, { useState } from "react";

const OutstandingFeesRemainder = () => {
    const hasMounted = useMounted();
    const [isSubjectGroup, setIsSubjectGroup] = useState(false);

    const handleRadioChange = (e) => {
        setIsSubjectGroup(e.target.value === "Subject Group");
    };

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Outstanding Fees Remainder" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transactionn</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Data Entry</Breadcrumb.Item>
                <Breadcrumb.Item active>Outstanding Fees Remainder</Breadcrumb.Item>
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
                                                Session<span className="text-danger">*</span>
                                            </Form.Label>

                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Enter Subject"
                                                    id="session"
                                                    required
                                                />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Basic Course/Branch<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
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
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Course/Year<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter U"
                                                    id="session"
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Last Date<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter U"
                                                    id="session"
                                                    required
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Row>
                                            <Form.Label
                                                className="col-sm-12 col-form-label form-label"
                                            >
                                                Category Type<span className="text-danger">*</span>
                                            </Form.Label>
                                            </Row>
                                            <Col sm={3}></Col >
                                            <Col sm={9}>
                                                <Form.Check
                                                    label="All Students"
                                                    type="radio"
                                                />
                                            </Col>
                                            <Col sm={3}></Col >
                                            <Col sm={9}>
                                                <Form.Check
                                                    label="Admitted Students"
                                                    type="radio"
                                                />
                                            </Col>
                                            <Col sm={3}></Col >
                                            <Col>
                                                <Form.Check
                                                    label="Provisionally Admitted"
                                                    type="radio"
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Row>
                                            <Form.Label
                                                className="col-sm-12 col-form-label form-label"
                                            >
                                                Mobile No. Type<span className="text-danger">*</span>
                                            </Form.Label>
                                            </Row>
                                            <Col sm={3}></Col >
                                            <Col sm={9}>
                                                <Form.Check
                                                    label="Student Mobile No."
                                                    type="radio"
                                                />
                                            </Col>
                                            <Col sm={3}></Col >
                                            <Col sm={9}>
                                                <Form.Check
                                                    label="Parent Mobile No."
                                                    type="radio"
                                                />
                                            </Col>
                                        </Row>


                                        <Row className="align-items-center">
                                            <Col xs={6} className="d-flex align-items-center justify-content-center">

                                                <Button
                                                    variant="primary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Show
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Send SMS
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Send Email
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

export default OutstandingFeesRemainder;
