'use client'
import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Form, Card, Button } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import useMounted from 'hooks/useMounted';
import { getTitles } from '../../../../../../api/studentdetails';

const Title = () => {
    const hasMounted = useMounted();
    const [titles, setTitles] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState('');

    useEffect(() => {
        // Fetch titles data from the API when the component mounts
        if (hasMounted) {
            getTitles()
                .then(response => {
                    const data = response.data; // Access data from the response
                    setTitles(data);
                })
                .catch(error => console.error('Error fetching titles:', error));
        }
    }, [hasMounted]);

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
                                        <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label">Active</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="active">
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label>Check If Active</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label">Title<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Select value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)}>
                                                    <option value="" disabled>Please Select a Title</option>
                                                    {titles.map(title => (
                                                        <option key={title.id} value={title.nametitle}>{title.nametitle}</option>
                                                    ))}
                                                </Form.Select>
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
