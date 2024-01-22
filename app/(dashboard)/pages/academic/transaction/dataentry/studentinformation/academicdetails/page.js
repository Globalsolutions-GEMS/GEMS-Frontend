'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const AcademicDetails = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid >
            {/* Page Heading */}
            {/* <PageHeading heading="Academic Details" /> */}
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Name</Form.Label>
                                            
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Fee Type</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Session</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Student Type</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Admission Date</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Course</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Admission Cancel Date</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Student ID</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Admission No.</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Registration No.</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Addmission Status</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Roll No.</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Current Session</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Section</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Previous Session</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Serial No.</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Enrollment No./ University Seat No / Uni.Appl.No.</Form.Label>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Concession</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Please Enter Unicode Name"
                                                    id="session"
                                                />
                                            </Col>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Batch</Form.Label>
                                            <Form.Label className="col-sm-6 col-form-label form-label" htmlFor="fullName">Admission Type</Form.Label>

                                        </Row>
                                        <Row >
                                            <Col className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                                
                                            </Col>
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

export default AcademicDetails