'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const AddressDetails = () => {
    const hasMounted = useMounted();
    const [permanentAddress, setPermanentAddress] = useState({
        country: '',
        permanentAddress: '',
        state: '',
        houseNumber: '',
        district: '',
        grampanchayat: '',
        taluka: '',
        pinCode: '',
        cityVillage: '',
    });
    const [temporaryAddress, setTemporaryAddress] = useState({ ...permanentAddress });

    const handlePermanentAddressChange = (fieldName, value) => {
        setPermanentAddress({
            ...permanentAddress,
            [fieldName]: value,
        });

        // Update Temporary Address only if the checkbox is checked
        if (temporaryAddress.sameAsPermanent) {
            setTemporaryAddress({
                ...permanentAddress,
                sameAsPermanent: true,
            });
        }
    };

    const handleCheckboxChange = () => {
        setTemporaryAddress((prev) => ({
            ...prev,
            sameAsPermanent: !prev.sameAsPermanent,
        }));

        // If the checkbox is unchecked, update Temporary Address with Permanent Address values
        if (!temporaryAddress.sameAsPermanent) {
            setTemporaryAddress({
                ...permanentAddress,
                sameAsPermanent: true,
            });
        }
    };

    return (
        <Container fluid className="p-6">

            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Form.Label>PERMANENT ADDRESS</Form.Label>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Country<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Permanent Address</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Address" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">State<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">House Number</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Enter House No." id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">District<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Grampanchayat</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Enter Grampanchayat" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Taluka</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Pin Code</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Enter Grampanchayat" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">City/Village<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                    
                                        </Row>

                                        <br/>

                                        <Form.Label>TEMPORARY ADDRESS</Form.Label>
                                        <Row className='mb-3'>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="switch" id="active" onChange={handleCheckboxChange} checked={temporaryAddress.sameAsPermanent}>
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label >Same as Permanent Address</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Country<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Permanent Address</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Address" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">State<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">House Number</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Enter House No." id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">District<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Grampanchayat</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Enter Grampanchayat" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Taluka</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Pin Code</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Enter Grampanchayat" id="course" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">City/Village<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
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

export default AddressDetails