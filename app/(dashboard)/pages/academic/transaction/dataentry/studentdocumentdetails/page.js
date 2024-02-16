"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";
import { useState } from "react";

const StudentDocumentReceipt = () => {
    const hasMounted = useMounted();
    const [photo, setPhoto] = useState(null);

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Student Document Details" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transactionn</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Data Entry</Breadcrumb.Item>
                <Breadcrumb.Item active>Student Document Details</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <Container fluid className="p-3">
                                <Row>
                                    <Col>
                                        <PageHeading heading="Search Student" />
                                        <Row className="mb-3">
                                            <Col xl={12} lg={8} md={12} xs={12}>
                                                <Card>
                                                    <Card.Body>
                                                        <div>
                                                            {hasMounted && (
                                                                <Form>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-2 col-form-label form-label"
                                                                            htmlFor="fullName"
                                                                        >
                                                                            Academic Session<span className="text-danger">*</span>
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
                                                                            Search By<span className="text-danger">*</span>
                                                                        </Form.Label>

                                                                        <Col>
                                                                            <Form.Check
                                                                                label="Student Id."
                                                                                type="radio"
                                                                            />
                                                                        </Col>
                                                                        <Col>
                                                                            <Form.Check
                                                                                label="Name"
                                                                                type="radio"
                                                                            />
                                                                        </Col>
                                                                        <Col>
                                                                            <Form.Check
                                                                                label="Roll No"
                                                                                type="radio"
                                                                            />
                                                                        </Col>

                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-2 col-form-label form-label"
                                                                            htmlFor="fullName"
                                                                        >
                                                                            Basic Course<span className="text-danger">*</span>
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
                                                                            Enter Input<span className="text-danger">*</span>
                                                                        </Form.Label>
                                                                        <Col sm={4} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                placeholder="Please Enter Student ID No."
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-2 col-form-label form-label"
                                                                            htmlFor="fullName"
                                                                        >
                                                                            Course/Year/Standard<span className="text-danger">*</span>
                                                                        </Form.Label>
                                                                        <Col sm={4} className="mb-3 mb-lg-0">
                                                                            <Form.Select
                                                                                type="text"
                                                                                placeholder="Standard Fee"
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Col className="d-flex align-items-end justify-content-end">
                                                                            <Button variant="primary" type="submit">
                                                                                Clear Search
                                                                            </Button>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Col>
                                                                            <Container fluid>
                                                                                <PageHeading heading="Student Documents" />
                                                                                <Row className="mb-8">
                                                                                    <Col xl={12} lg={8} md={12} xs={12}>
                                                                                        <Card>
                                                                                            <Card.Body>
                                                                                                <Row className='mt-1'>
                                                                                                    <Form.Label className="col-sm-5 col-form-label form-label" >Select Document</Form.Label>
                                                                                                    <Col sm={7} className="mb-3 mb-lg-0">
                                                                                                        <Form.Select type="text" id="course" required />
                                                                                                    </Col>
                                                                                                </Row>
                                                                                                <Row className='mt-1'>
                                                                                                    <Form.Label className="col-sm-5 col-form-label form-label">Upload Document</Form.Label>
                                                                                                    <Col sm={7} className="mb-3 mb-lg-0">
                                                                                                        <Form.Control type="file" accept="image/*"/>
                                                                                                        {photo && <img src={photo} alt="Photo Preview" style={{ marginTop: '10px' }} />}
                                                                                                    </Col>
                                                                                                </Row>
                                                                                                <Row className='mt-3'>
                                                                                                    <Form.Label className="col-sm-5 col-form-label form-label" >No. of Originals</Form.Label>
                                                                                                    <Col sm={7} className="mb-3 mb-lg-0">
                                                                                                        <Form.Control placeholder='Please Enter No. of Originals' type="text" id="course" required />
                                                                                                    </Col>
                                                                                                </Row>
                                                                                                <Row className='mt-3'>
                                                                                                    <Form.Label className="col-sm-5 col-form-label form-label" >Document No.</Form.Label>
                                                                                                    <Col sm={7} className="mb-3 mb-lg-0">
                                                                                                        <Form.Control placeholder='Please Enter Document/Certificate No.' type="text" id="course" required />
                                                                                                    </Col>
                                                                                                </Row>
                                                                                                <Row className='mt-3'>
                                                                                                    <Form.Label className="col-sm-5 col-form-label form-label" >Document Date</Form.Label>
                                                                                                    <Col sm={7} className="mb-3 mb-lg-0">
                                                                                                        <Form.Control placeholder='Please Enter Document/Certificate Date' type="text" id="course" required />
                                                                                                    </Col>
                                                                                                </Row>
                                                                                                <Row className='mt-3'>
                                                                                                    <Form.Label className="col-sm-5 col-form-label form-label" >Document Receipt No.</Form.Label>
                                                                                                    <Col sm={7} className="mb-3 mb-lg-0">
                                                                                                        <Form.Control placeholder='Please Enter Document/Certificate Date' type="text" id="course" disabled />
                                                                                                    </Col>
                                                                                                </Row>
                                                                                               
                                                                                                <Row className='mt-3'>
                                                                                                    <Col className="d-flex align-items-center justify-content-center mb-3">
                                                                                                        <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
                                                                                                            Submit
                                                                                                        </Button>
                                                                                                        <Button variant="secondary" type="submit" style={{ marginRight: '10px' }}>
                                                                                                            Cancel
                                                                                                        </Button>
                                                                                                        
                                                                                                    </Col>
                                                                                                </Row>
                                                                                            </Card.Body>
                                                                                        </Card>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Container>
                                                                        </Col>
                                                                        <Col>
                                                                            <Container fluid>
                                                                                <PageHeading heading="Document List" />
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

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>

    );
};

export default StudentDocumentReceipt;
