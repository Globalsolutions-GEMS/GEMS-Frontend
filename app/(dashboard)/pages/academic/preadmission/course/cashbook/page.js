'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';
import { CheckCircleFill } from 'react-bootstrap-icons';


const Cashbook = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Cashbook" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Course</Breadcrumb.Item>
                <Breadcrumb.Item active>Cashbook</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Receipt Book Code<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Receipt Book Code" id="certificatecode" required />
                                            </Col>
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">Receipt Book Name<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control type="email" placeholder="Please Enter Receipt Book Name" id="certificatename" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Cash Receipt No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Cash Receipt No." id="certificatecode" required />
                                            </Col>
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">Bank Rececipt No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control type="email" placeholder="Please Enter Bank Rececipt No." id="certificatename" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Document Receipt No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Document Receipt No." id="certificatecode" required />
                                            </Col>
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">HSN/ SAC Number<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control type="email" placeholder="Please Enter HSN/ SAC Number" id="certificatename" required />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Bank Name<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Receipt Book Code" id="certificatecode" required />
                                            </Col>
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">Bank A/c No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="email" placeholder="Please Enter Receipt Book Name" id="certificatename" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">Receipt Book Type<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Select type="email" placeholder="Please Enter Receipt Book Name" id="certificatename" required />
                                            </Col>
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">Sr. No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={3} className="mb-3 mb-lg-0">
                                                <Form.Control type="email" placeholder="Please Enter Sr. No." id="certificatename" required />
                                            </Col>
                                        </Row>
                                        <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >GST Applicable</Form.Check.Label>
                                            <Col  sm={3}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="document">
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label >Check If GST Applicable</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Active</Form.Check.Label>
                                            <Col  sm={3}>
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

export default Cashbook