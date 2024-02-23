'use client'
// import node module libraries
import { Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const AdmissionPositionReport = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Admission Position Report" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Student Report</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
                <Breadcrumb.Item active>Admission Position Report</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-2 col-form-label form-label" >From Date</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="date" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Receipt Type</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >To Date</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="date" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Programme</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Student Status</Form.Label>
                                            <Col sm={2}>
                                                <Form.Check
                                                    label="Admission"
                                                    type="radio"
                                                    name="name"
                                                />
                                            </Col>
                                            <Col sm={2}>
                                                <Form.Check
                                                    label="Provisional Admission"
                                                    type="radio"
                                                    name="name"
                                                />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Course</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Report Format</Form.Label>
                                            <Col sm={2}>
                                                <Form.Check
                                                    label="Format 1"
                                                    type="radio"
                                                    name="name"
                                                />
                                            </Col>
                                            <Col sm={2}>
                                                <Form.Check
                                                    label="Format 2"
                                                    type="radio"
                                                    name="name"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Section</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Mother Tongue" id="mothertongue" required/>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Report Type</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Mother Tongue" id="mothertongue" required/>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                       
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Export To Excel</Form.Label>
                                            <Col sm={4} className="mb-3 mt-2 mb-lg-0">
                                                <Form.Check type="checkbox" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                        </Row >
                                        <Row className="mb-3">
                                            <Col className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Report
                                                </Button>
                                               
                                                <Button
                                                    variant="secondary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
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

export default AdmissionPositionReport


