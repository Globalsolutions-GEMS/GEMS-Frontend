'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const DCRReport = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Demand Report " />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Fees Reports</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Fees Report</Breadcrumb.Item>
                <Breadcrumb.Item active>DCR Report</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className='mb-3'>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Report Format<span className="text-danger">*</span></Form.Label>
                                            <Col sm={2}>
                                                <Form.Check
                                                    label="With Canceled"
                                                    type="radio"
                                                />
                                            </Col>
                                            <Col sm={2}>
                                                <Form.Check
                                                    label="Without Canceled"
                                                    type="radio"
                                                />
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

export default DCRReport