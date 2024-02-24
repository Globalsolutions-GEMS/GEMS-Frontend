'use client'
// import node module libraries
import { Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const StudentCompleteDetailsExcel = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Student Complete Details - Excel" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Student Report</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
                <Breadcrumb.Item active>Student Complete Details - Excel</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Session<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Student Filter<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Programme<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Course<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Order By<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                        </Row>
                                        <Row className='mb-3 ms-1'>
                                            <Form.Check
                                                label="PDF Report"
                                                type="radio"
                                                name="name"
                                            />
                                        </Row>
                                        <Row className='mb-3 ms-1'>
                                            <Form.Check
                                                label="Export to Excel"
                                                type="radio"
                                                name="name"
                                            />
                                        </Row>
                                        <Row className='mb-3 ms-1'>
                                            <Form.Check
                                                label="Export to Excel For OBE"
                                                type="radio"
                                                name="name"
                                            />
                                        </Row>
                                        <Row className='mb-3 ms-1'>
                                            <Form.Check
                                                label="Export to Excel For ABC ID"
                                                type="radio"
                                                name="name"
                                            />
                                            
                                        </Row>
                                        <Row className="mb-3">
                                            <Col className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Cancel
                                                </Button>
                                                
                                                <Button
                                                    variant="secondary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Show
                                                </Button>

                                                <Button
                                                    variant="secondary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Report
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

export default StudentCompleteDetailsExcel


