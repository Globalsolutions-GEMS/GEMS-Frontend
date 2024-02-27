'use client'
// import node module libraries
import { Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import sub components
import useMounted from 'hooks/useMounted';


const PersonalDetails = () => {
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
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Title<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Requery Date" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Father Name</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Father's Name" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Last Name/Surname<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Last Name/Surname" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Father Occupation</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">First Name</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter First Name" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Father Organization</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Father's Organization" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Complete Name (Local Language)</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Complete Name (Local Language)" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Caste Category</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Middle Name</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Middle Name" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Sub Caste</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Sub Caste" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Name As On Aadhar Card</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Name As On Aadhar Card" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Nationality</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Gender</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Religion</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Mobile</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Mobile" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Handicap</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Phone</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Phone" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Handicap Percentage</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Father's Name" id="session" disabled />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Email</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Email" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Aadhar No.</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Aadhar No." id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Parent Email</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Parent Email" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">PAN Card Number</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter PAN Card Number" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Official Email Id</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Official Email Id" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">Total Family Member</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Total Family Member" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Date Of Birth</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Date Of Birth" id="session"/>
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Family Income</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Father's Name" id="session"  />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Place Of Birth</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Place Of Birth" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">Account Number</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Account Number" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Marital Status</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Marital Status" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >EID/Registration Number</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter EID/Registration Number" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Mother Tongue</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Marital Status" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">Eligibility/DTE Number</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Eligibility/DTE Number" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Blood Group</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Marital Status" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Voter Id</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Voter Id" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Occupation</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Marital Status" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Board/Council</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Bank Name</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Marital Status" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">Remark</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Father's Name" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">IFSC Code</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter IFSC Code" id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">Anti Ragging Undertaking Reference No.</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Father's Name" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Father Mobile No.</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Father Mobile No." id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">Academic Bank Credit (ABC) No.</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Academic Bank Credit (ABC) No." id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">Mother Mobile No.</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Mother Mobile No." id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">Name as per the 12th marksheet</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Name as per the 12th marksheet" id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Mother Name</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Mother Name" id="session" required />
                                            </Col>
                                            <Form.Check className="col-sm-3 col-form-label form-label " type="switch" id="active" >
                                                <Form.Check.Input type="checkbox" />
                                                <Form.Check.Label >Lateral</Form.Check.Label>
                                            </Form.Check>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >PRN Number</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter PRN Number" id="session" required />
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Old Student Id</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Old Student Id" id="session" required />
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

export default PersonalDetails