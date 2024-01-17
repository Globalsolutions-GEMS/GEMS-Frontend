'use client'
// import node module libraries
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'
import useMounted from 'hooks/useMounted';

const AcademicSession = () => {
    const hasMounted = useMounted();
    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Academic Session" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Data</Breadcrumb.Item>
                <Breadcrumb.Item active>Academic Session</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Session name</Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Session Name" id="sessionname" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Short Name</Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Control type="email" placeholder="Please Enter Short Name" id="shortname" required />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Start Date</Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Control type="email" placeholder="Please Enter Start Date" id="shortname" required />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label">End Date</Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Control type="email" placeholder="Please Enter End Date" id="shortname" required />
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

                                        <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Old Session</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="active">
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label >Check If Old Session</Form.Check.Label>
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

export default AcademicSession