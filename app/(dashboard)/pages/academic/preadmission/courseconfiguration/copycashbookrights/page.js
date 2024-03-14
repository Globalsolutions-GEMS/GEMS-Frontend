'use client'
// import node module libraries
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'
import useMounted from 'hooks/useMounted';

const CopyCashbookRights = () => {
    const hasMounted = useMounted();
    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Copy Cashbook Rights" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Course Configuration</Breadcrumb.Item>
                <Breadcrumb.Item active>Copy Cashbook Rights</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">From Academic Year<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Academic Year Name" id="Academic Yearname" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">To Academic Year<span className="text-danger">*</span></Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Select type="email" placeholder="0" id="shortname" required />
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

export default CopyCashbookRights