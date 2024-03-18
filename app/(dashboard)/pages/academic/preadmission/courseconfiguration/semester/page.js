'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';
import { CheckCircleFill } from 'react-bootstrap-icons';


const Semester = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Semester" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Course Configuration</Breadcrumb.Item>
                <Breadcrumb.Item active>Semester</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Year<span className="text-danger">*</span></Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Select type="year" placeholder="Please Select" id="shortname" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Semester No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Semester No" id="semesternumber" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Semester Description<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Semester Description" id="semesternumber" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label">
                                                Active
                                            </Form.Label>
                                            <Col className='mt-2'>
                                                <Form.Check
                                                    type="switch"
                                                    id="checkIfActive"
                                                    label="If Active"
                                                    defaultChecked
                                                />
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

export default Semester