'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const ScholarshipDataEntry = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Sanctioned Scholarship Entry" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Administrative Work</Breadcrumb.Item>
                <Breadcrumb.Item active>Sanctioned Scholarship Entry</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Academic Year<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="Academic Year" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Programme<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Course<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Caste Category</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Order By</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className='mb-3 ms-1'>
                                            <Form.Check
                                                label="Export To Excel"
                                                type="radio"
                                                name="search"
                                            />
                                        </Row>
                                        <Row className='mb-3 ms-1'>
                                            <Form.Check
                                                label="Statistics Format Report"
                                                type="radio"
                                                name="search"
                                            />
                                        </Row>
                                        <Row >
                                            <Col className="d-flex align-items-center justify-content-center mb-3">
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                                <Button variant="primary" type="" style={{ marginLeft: "10px" }} >
                                                    Cancel
                                                </Button>
                                                <Button variant="secondary" type="" style={{ marginLeft: "10px" }} >
                                                    Report
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

export default ScholarshipDataEntry