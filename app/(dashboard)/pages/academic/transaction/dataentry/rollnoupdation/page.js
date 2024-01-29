'use client'
// import node module libraries
import { Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const RollNoUpdation = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Roll No Updation" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Data Entry</Breadcrumb.Item>
                <Breadcrumb.Item active>Roll No Updation</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Session<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Basic Course/Branch<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Course/Year<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Medium</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">FeeType</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Section</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Gender</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Subject</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Prefix</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Prefix" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Start Range<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Start Range" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Order By</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col className="d-flex align-items-center justify-content-center mb-3">
                                                <Button variant="primary" type="submit">
                                                    Show
                                                </Button>
                                                <Button variant="primary" type="" style={{ marginLeft: "10px" }} >
                                                    Submit
                                                </Button>
                                                <Button variant="primary" type="" style={{ marginLeft: "10px" }} >
                                                    Report
                                                </Button>
                                                <Button variant="secondary" type="" style={{ marginLeft: "10px" }} >
                                                    Cancel
                                                </Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                        <Row >
                                            <Col className="d-flex align-items-center justify-content-center mb-3">
                                                <Button variant="primary" type="" style={{ marginLeft: "10px" }} >
                                                    Export to Excel
                                                </Button>
                                                <Button variant="secondary" type="" style={{ marginLeft: "10px" }}>
                                                    Lock
                                                </Button>
                                                <Button variant="secondary" type="" style={{ marginLeft: "10px" }}>
                                                    Unlock
                                                </Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                        
                                    </Form>
                                }
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default RollNoUpdation