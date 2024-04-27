'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const DemandReport = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Demand Report " />
            <Breadcrumb>
            <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Finance Reports</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Fees Report</Breadcrumb.Item>
                <Breadcrumb.Item active>Demand Report</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">From Date<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="date" placeholder="Please Enter From Date" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">To Date<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="date" placeholder="Please Enter To Date" id="course" required />
                                            </Col>
                                           
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Report Format<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Demand With Fees Details" id="course" required />
                                            </Col>
                                           
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label
                                                className="col-sm-2 col-form-label form-label"

                                            >
                                                Student Status
                                            </Form.Label>
                                           
                                            <Col sm={2} className="mt-2">
                                                <Form.Check
                                                    label="With Canceled"
                                                    type="radio"
                                                    name="radio"
                                                />
                                            </Col>
                                            <Col sm={2} className="mt-2">
                                                <Form.Check
                                                    label="Without Canceled"
                                                    type="radio"
                                                    name="radio"
                                                />
                                            </Col>
                                            
                                        </Row>
                                        <Row >
                                            <Col className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Report
                                                </Button>
                                               
                                                <Button
                                                    variant="secondary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Cancel
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

export default DemandReport