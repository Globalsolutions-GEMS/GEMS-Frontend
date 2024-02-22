"use client";
// import node module libraries
import { Alert, Badge,Breadcrumb,Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

import React, { useState } from "react";

const CreateOtherFeesBulk = () => {
    const hasMounted = useMounted();
    const [isSubjectGroup, setIsSubjectGroup] = useState(false);

    const handleRadioChange = (e) => {
        setIsSubjectGroup(e.target.value === "Subject Group");
    };

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Create Other Fees - Bulk" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Admission Fees</Breadcrumb.Item>
                <Breadcrumb.Item active>Create Other Fees - Bulk</Breadcrumb.Item>
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
                                                Receipt Book<span className="text-danger">*</span>
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
                                                Programme<span className="text-danger">*</span>
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
                                                Course/Year<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter "
                                                    id="session"
                                                    required
                                                />
                                            </Col>

                                            <Col>

                                            </Col>

                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Section
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter Unicode Name"
                                                    id="session"
                                                    required
                                                />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Col sm={3}>
                                                <Form.Check
                                                    label="Subject"
                                                    type="radio"
                                                    value="Subject"
                                                    onChange={handleRadioChange}
                                                    checked={!isSubjectGroup}
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Check
                                                    label="Subject Group"
                                                    type="radio"
                                                    value="Subject Group"
                                                    onChange={handleRadioChange}
                                                    checked={isSubjectGroup}
                                                />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Medium
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter Unicode Name"
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
                                                {isSubjectGroup ? "Subject Group" : "Subject"}
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder={`Please Enter ${isSubjectGroup ? "Subject Group" : "Subject"
                                                        }`}
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
                                                Admission Status
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter Unicode Name"
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
                                                Gender
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter Unicode Name"
                                                    id="session"
                                                    required
                                                />
                                            </Col>

                                        </Row>
                                        
                                        <Row className="align-items-center">
                                            <Col xs={12} className="d-flex align-items-center justify-content-center">
                                                
                                                <Button
                                                    variant="primary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
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

export default CreateOtherFeesBulk;
