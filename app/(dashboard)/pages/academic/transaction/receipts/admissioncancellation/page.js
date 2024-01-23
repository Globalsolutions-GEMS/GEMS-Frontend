'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';
import { CheckCircleFill } from 'react-bootstrap-icons';


const AdmissionCancellation = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Admission Cancellation" />
            <Breadcrumb>
            <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transactionn</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Receipts</Breadcrumb.Item>
                <Breadcrumb.Item active>Admission Cancellation</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Session<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Basic Course<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                           
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Course<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                           
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Search By<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                           
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Enter Input<span className="text-danger">*</span></Form.Label>
                                            <Col sm={2} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Col sm={2}>
                                            <Button variant="primary" type="submit" >
                                                    Show Balance
                                            </Button>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Reason</Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control type="text"id="course" required />
                                            </Col>
                                           
                                        </Row>
                                        <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Admission Date</Form.Label><br/>
                                        <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Fee Type</Form.Label><br/>
                                        <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Student Type</Form.Label><br/>
                                        <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Status</Form.Label>

                                        <Row className='mb-3'>
                                            <Col></Col>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="switch" id="active">
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label >Cancelled Admission</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Row>
                                        <Row className='mb-3'>
                                            <Col></Col>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="switch" id="active">
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label >Clear All Receipts</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
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

export default AdmissionCancellation