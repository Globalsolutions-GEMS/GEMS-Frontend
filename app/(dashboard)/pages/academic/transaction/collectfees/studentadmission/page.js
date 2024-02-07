"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const StudentAdmission = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Student Admission" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transactionn</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Collect Fees</Breadcrumb.Item>
                <Breadcrumb.Item active>Student Admission</Breadcrumb.Item>
            </Breadcrumb>
                {/* <Row className="mb-8">
                    <Col xl={12} lg={8} md={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Container fluid className="p-3">
                                    <Row>
                                        <Col>
                                            <PageHeading heading="Course Details" />
                                            <Row className="mb-3">
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
                                                                                Basic Course<span className="text-danger">*</span>
                                                                            </Form.Label>
                                                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                                                <Form.Select
                                                                                    type="text"
                                                                                    placeholder="Please Select"
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                            htmlFor="fullName"
                                                                        >
                                                                            Fee Type<span className="text-danger">*</span>
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
                                                                            Course<span className="text-danger">*</span>
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Select
                                                                                type="text"
                                                                                placeholder="Please Select"
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                            htmlFor="fullName"
                                                                        >
                                                                            Student Type<span className="text-danger">*</span>
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
                                                                            Standard Fee
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                placeholder="Standard Fee"
                                                                                id="session"
                                                                                required
                                                                                disabled
                                                                            />
                                                                        </Col>
                                                                        <Col className="d-flex align-items-center justify-content-center">
                                                                            <Button variant="primary" type="submit">
                                                                                Search Student
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
                                    </Col>
                                </Row>
                            </Container>

                            <div>
                                {hasMounted && (
                                    <Form>
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
                                                                                        Title<span className="text-danger">*</span>
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Select
                                                                                            type="text"
                                                                                            placeholder="Please Select"
                                                                                            id="session"
                                                                                            required
                                                                                        />
                                                                                    </Col>
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Mother Name
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Enter Mother's Name"
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
                                                                                        Last Name/Surname<span className="text-danger">*</span>
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter Last Name/Surname"
                                                                                            id="session"
                                                                                            required
                                                                                        />
                                                                                    </Col>
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Unicode Mother Name
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter Unicode Mother Name"
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
                                                                                        First Name
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter First Name"
                                                                                            id="session"
                                                                                            required
                                                                                        />
                                                                                    </Col>
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Father Name
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter Father's Name"
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
                                                                                        Middle Name
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter Middle Name"
                                                                                            id="session"
                                                                                            required
                                                                                        />
                                                                                    </Col>
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Unicode Father Name
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter Unicode Father's Name"
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
                                                                                        Unicode Name
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter Unicode Name"
                                                                                            id="session"
                                                                                            required
                                                                                        />
                                                                                    </Col>
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Enrollment Number
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter Enrollment Number"
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
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Mobile
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Enter 10 digit Mobile Number"
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
                                                                                        Caste Category
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Select
                                                                                            type="text"
                                                                                            placeholder="Please Enter Unicode Name"
                                                                                            id="session"
                                                                                            required
                                                                                        />
                                                                                    </Col>
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Email
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter Email"
                                                                                            id="session"
                                                                                            required
                                                                                        />
                                                                                    </Col>
                                                                                </Row>
                                                                                <Row className="mb-3">
                                                                                    <Col></Col>
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Adm Through
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Select
                                                                                            type="text"
                                                                                            placeholder="Please Enter Email"
                                                                                            id="session"
                                                                                            required
                                                                                        />
                                                                                    </Col>
                                                                                </Row>
                                                                                <Row className="mb-3">
                                                                                    <Col></Col>
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Remark
                                                                                    </Form.Label>
                                                                                    <Col sm={3} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Please Enter Remark"
                                                                                            id="session"
                                                                                            required
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
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container fluid className="p-3">
                                            <Row>
                                                <Col>
                                                    <PageHeading heading="Subject Details" />
                                                    <Row className="mb-3">
                                                        <Col xl={12} lg={8} md={12} xs={12}>
                                                            <Card>
                                                                <Card.Body>
                                                                    <div>
                                                                        {hasMounted && (
                                                                            <Form>
                                                                                <Col className="d-flex align-items-center justify-content-center">
                                                                                    <Button variant="primary" type="submit">
                                                                                        Add Subject
                                                                                    </Button>
                                                                                </Col>
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
                                        <Row className="align-items-center">
                                            <Col xs={12} className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Save And Pay
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
            </Row> */}
            
        </Container>
    );
};

export default StudentAdmission;
