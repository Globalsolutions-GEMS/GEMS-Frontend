'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const FeesRefundReport = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Fees Refund Report" />
            <Breadcrumb>
            <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Fees Reports</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Fees Report</Breadcrumb.Item>
                <Breadcrumb.Item active>Fees Refund Report</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Receipt Book<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Programme</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Course</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        </Row>
                                       
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >From Date<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="date" placeholder="Please Enter From Date" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >To Date<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="date" placeholder="Please Enter To Date" id="course" required />
                                            </Col>
                                           
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Report Type<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Export To Excel
                          </Form.Label>
                          <Form.Check
                            className="col-sm-8 col-form-label form-label"
                            type="checkbox"
                            id="active"
                          >
                            <Form.Check.Input type="checkbox" />
                           
                          </Form.Check>
                        </Row>
                                        <Row className="mb-3">
                                            <Col className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Report
                                                </Button>
                                                <Button
                                                    variant="primary"
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

export default FeesRefundReport