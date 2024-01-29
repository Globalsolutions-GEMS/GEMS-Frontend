'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import useMounted from 'hooks/useMounted';

const MAX_IMAGE_SIZE_KB = 500; // Maximum image size in kilobytes

const FeesDetails = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid>
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted && (
                                    <Form>
                                        <Row className="mb-3">
                                            <Col>
                                                <Container fluid>
                                                    <PageHeading heading="Admission Fees Details" />
                                                    <Row className="mb-8">
                                                        <Col xl={12} lg={8} md={12} xs={12}>
                                                            <Card>
                                                                <Card.Body>

                                                                    {/* Table will go here  */}

                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col>
                                                <Container fluid>
                                                    <PageHeading heading="Receipt Details" />
                                                    <Row className="mb-8">
                                                        <Col xl={12} lg={8} md={12} xs={12}>
                                                            <Card>
                                                                <Card.Body>

                                                                    <Row className="mb-3 d-flex align-item-center justify-content-center">
                                                                        <Form.Label className="col-sm-2 col-form-label form-label" >Receipt Type<span className="text-danger">*</span></Form.Label>
                                                                        <Col sm={4} className="mb-3 mb-lg-0">
                                                                            <Form.Select type="text" placeholder="Please Enter Exam Name" id="session" required />
                                                                        </Col>
                                                                    </Row>

                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </Container>
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

export default FeesDetails;
