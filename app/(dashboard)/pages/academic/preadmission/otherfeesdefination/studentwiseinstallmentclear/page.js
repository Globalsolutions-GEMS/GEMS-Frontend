'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';
import { CheckCircleFill } from 'react-bootstrap-icons';


const StudentwiseInstallmentFees = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Studentwise Installment Fees" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Other Fees Definition</Breadcrumb.Item>
                <Breadcrumb.Item active>Studentwise Installment Fees</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Session<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Course<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                           
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Fee Type<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Fee Type" id="feetype" required />
                                            </Col>
                                           
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Student Type<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Student Type" id="studenttype" required />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Fee Head<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Fee Head" id="studenttype" required />
                                            </Col>
                                        </Row>
                                       
                                        <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Active</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="active">
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label >Check If Active</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Row>

                                        <Row className="align-items-center">
                                            <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                                                <Button variant="primary" type="submit" >
                                                    Submit
                                                </Button>
                                                <Button variant="secondary" type="" style={{ marginLeft: '10px' }}>
                                                    Cancel
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

export default StudentwiseInstallmentFees