'use client'
import React from 'react';
import { Container, Col, Row, Form, Card, Button } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import useMounted from 'hooks/useMounted';

const Title = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">
            <PageHeading heading="Title" />
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted && (
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Title<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Title" id="title" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label">
                                                Active
                                            </Form.Label>
                                            <Col style={{ marginBottom: '20px' }}>
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
                                                <Button variant="secondary" type="" style={{ marginLeft: '10px' }}>
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

export default Title;
