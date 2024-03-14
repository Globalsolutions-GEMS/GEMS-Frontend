'use client'
// import node module libraries
import { Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import sub components
import useMounted from 'hooks/useMounted';


const ExaminationDetails = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid >

            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Exam Name<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Exam Name" id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Roll No.</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Roll No." id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Exam Type<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Exam Type" id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Univ/School</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Univ/School" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Month</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Month" id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Grade</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Grade" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >Year</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Year" id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >Last School/College</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Last School/College" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Result</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Result" id="Academic Year" />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Last School/College Address</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Last School/College Address" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Total Marks</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Total Marks" id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Country</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Country" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Percentage(%)</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" id="Academic Year" placeholder="Please Enter Percentage(%)" disabled />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >State</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >Division</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Division" id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >District</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >Enrollment No.</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Enrollment No." id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >Taluka</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="Academic Year" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >Eligibility No.</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Eligibility No." id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >City</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter City" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >TC No.</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter TC No." id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label"  >Pincode</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Pincode" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Remark</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Remark" id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">SGPA</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter SGPA" id="Academic Year" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">CGPA</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter CGPA" id="Academic Year" />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >TC Issued Date</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter TC Issued Date" id="Academic Year" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Migration Number</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Migration Number" id="Academic Year" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">Stream</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Stream" id="Academic Year" required />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">

                                            <Form.Check className="col-sm-3 col-form-label form-label " type="switch" id="active" >
                                                <Form.Check.Input type="checkbox" />
                                                <Form.Check.Label >Is Gap</Form.Check.Label>
                                            </Form.Check>
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

export default ExaminationDetails