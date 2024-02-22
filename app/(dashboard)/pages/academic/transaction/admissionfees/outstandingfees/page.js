"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Link } from "react-feather";

const OutstandingFees = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Outstanding Fees" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Admission Fees</Breadcrumb.Item>
                <Breadcrumb.Item active>Outstanding Fees</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted && (
                                    <Form>
                                        <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Programme<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Select type="text" placeholder="Please Enter " id="mothertongue" />
                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Course/Year<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Select type="text" placeholder="Please Enter " id="mothertongue" />
                                                    </Col>
                                                </Row>
                                        <Row >
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"

                                            >
                                                Search Crieteria<span className="text-danger">*</span>
                                            </Form.Label>
                                           
                                            <Col >
                                                <Form.Check
                                                    label="Student Id."
                                                    type="radio"
                                                    name="radio"
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Check
                                                    label="Name"
                                                    type="radio"
                                                    name="radio"
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Check
                                                    label="Roll No"
                                                    type="radio"
                                                    name="radio"
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Check
                                                    label="User Field"
                                                    type="radio"
                                                    name="radio"
                                                />
                                            </Col>  
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Search Text<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="certificatecode"
                                                    required
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Student Name
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="Course/Standard"
                                                    disabled
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Fee Category
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="Course/Standard"
                                                    disabled
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Mobile No.
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="Course/Standard"
                                                    disabled
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Total Fees
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="Course/Standard"
                                                    disabled
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Paid /Concession /Adjusted Fee
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="Course/Standard"
                                                    disabled
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Payable Fees.
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="Course/Standard"
                                                    disabled
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Payment Remark
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="Course/Standard"
                                                    disabled
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-3 col-form-label form-label"
                                                htmlFor="fullName"
                                            >
                                                Student Remark
                                            </Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control
                                                    type="text"
                                                    id="Course/Standard"
                                                    
                                                />
                                            </Col>
                                        </Row>

                                       

                                       
                                        <Link /><a href=""> Click here for fees Concession</a><br />
                                            <Link /><a href=""> Click here for get fees details</a><br />
                                            <Link /><a href=""> Click here for get Installments Details</a>
                                        <Container fluid className="p-3">
                                            <Row>
                                                <Col>
                                                    <PageHeading heading="Payment Information" />
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
                                                                                        Receipt Mode
                                                                                    </Form.Label>
                                                                                    <Col sm={9} className="mb-3 mb-lg-0">
                                                                                        <Form.Select
                                                                                            type="text"
                                                                                            id="Course/Standard"
                                                                                        />
                                                                                    </Col>
                                                                                </Row>
                                                                                <Row className="mb-3">
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Payment Mode
                                                                                    </Form.Label>
                                                                                    <Col sm={9} className="mb-3 mb-lg-0">
                                                                                        <Form.Select
                                                                                            type="text"
                                                                                            id="Course/Standard"
                                                                                        />
                                                                                    </Col>
                                                                                </Row>
                                                                                <Row className="mb-3">
                                                                                    <Form.Label
                                                                                        className="col-sm-3 col-form-label form-label"
                                                                                        htmlFor="fullName"
                                                                                    >
                                                                                        Amount
                                                                                    </Form.Label>
                                                                                    <Col sm={6} className="mb-3 mb-lg-0">
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            id="Course/Standard"
                                                                                        />
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Button variant="primary" type="submit">
                                                                                            Add
                                                                                        </Button></Col>
                                                                                </Row>

                                                                                <Row >
                                            <Col className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Adjust
                                                </Button>
                                            </Col>
                                            <Col></Col>
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

export default OutstandingFees;
