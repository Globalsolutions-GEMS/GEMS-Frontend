"use client";
// import node module libraries
import { Alert, Badge,  Breadcrumb,  Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const CreateFeesRegisteredPromoted = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Create Fees - Registered/Promoted" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Admission Fees</Breadcrumb.Item>
                <Breadcrumb.Item active>Create Fees - Registered/Promoted</Breadcrumb.Item>
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
                                                Academic Year<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Select"
                                                    id="Academic Year"
                                                    required
                                                />
                                            </Col>
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Caste Category
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Enter Mother's Name"
                                                    id="Academic Year"
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
                                                    placeholder="Please Enter Last Name/Surname"
                                                    id="Academic Year"
                                                    required
                                                />
                                            </Col>
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Course<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter First Name"
                                                    id="Academic Year"
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Student Status<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter Middle Name"
                                                    id="Academic Year"
                                                    required
                                                />
                                            </Col>
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Gender
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter Unicode Father's Name"
                                                    id="Academic Year"
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col>

                                            </Col>
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Order By
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter Unicode Name"
                                                    id="Academic Year"
                                                    required
                                                />
                                            </Col>


                                        </Row>


                                        <Row className="align-items-center">
                                            <Col xs={12} className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Show
                                                </Button>
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

export default CreateFeesRegisteredPromoted;
