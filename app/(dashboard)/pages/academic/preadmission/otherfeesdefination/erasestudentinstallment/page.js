"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";

const EraseStudentInstallment = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Erase Student Installment" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Other Fees Definition</Breadcrumb.Item>
                <Breadcrumb.Item active>Erase Student Installment</Breadcrumb.Item>
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
                                                Academic Session<span className="text-danger">*</span>
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
                                                    placeholder="Please Select Programme"
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
                                                Course<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter Basic Course"
                                                    id="certificatecode"
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Container fluid className="p-3">
                                            <Row>
                                                <Col>
                                                    <PageHeading heading="Student Details" />

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
                                                                                        Search By
                                                                                    </Form.Label>
                                                                                    <Col sm={9} className="mb-3 mb-lg-0 mt-3">
                                                                                        <Row>
                                                                                            <Col>
                                                                                                <Form.Check
                                                                                                    label="Student Id"
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
                                                                                                    label="User Define"
                                                                                                    type="radio"
                                                                                                />
                                                                                            </Col>
                                                                                        </Row>

                                                                                    </Col>
                                                                                </Row>
                                                                                <Row className="mb-3">
                                                                                    <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Enter input<span className="text-danger">*</span></Form.Label>
                                                                                    <Col sm={9} className="mb-3 mb-lg-0">
                                                                                        <Form.Control type="text" placeholder="Student ID No." id="degrediplomaname" required />
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
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Installment Number<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Student ID No." id="degrediplomaname" required />
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center">
                                            <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                                                <Button variant="primary" type="submit">
                                                    Clear
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

export default EraseStudentInstallment;
