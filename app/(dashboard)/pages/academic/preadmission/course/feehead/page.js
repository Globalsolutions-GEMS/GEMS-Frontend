'use client'
// import node module libraries
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Container, Table } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { getCashbook, createFeehead, getAllFeehead } from '../../../../../../api/feehead'

const FeeHead = () => {
    const hasMounted = useMounted();

    // const [feeheadData, setFeeheadData] = useState([]);
    // const [cashbooks, setCashbooks] = useState([]);
    // const [selectedCashbook, setSelectedCashbook] = useState('');

    const [feeheadData, setFeeheadData] = useState([]);
    const [filteredFeeheadData, setFilteredFeeheadData] = useState([]);
    const [cashbooks, setCashbooks] = useState([]);
    const [selectedCashbook, setSelectedCashbook] = useState('');

    const [formData, setFormData] = useState({
        receiptBook: '',
        headDescription: '',
        shortName: '',
        otherFeeHead: '',
        installmentFeeHead: '',
        excessFee: '',
        goiScholarship: '',
        serialNo: '',
        gstApplicable: '',
        active: ''
    })

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleInputChange = event => {
        const { id, value, checked, type } = event.target;

        // Check the type of the input (text, checkbox, etc.)
        // Update the state accordingly
        if (type === 'checkbox') {
            setFormData(prevFormData => ({
                ...prevFormData,
                [id]: checked // Use checked value for checkbox inputs
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [id]: value // Use value for other input types (text, select, etc.)
            }));
        }

        // If the input is the cashbook select, filter the feeheads
        if (id === 'cashbook') {
            setSelectedCashbook(value);
            filterFeeheads(value);
        }
    };
    

    const hasExcessFee = () => {
        // Check if there is an existing excess fee for the selected cashbook
        const existingFeeheadWithExcessFee = feeheadData.find(feehead => {
            return feehead.cashbook && feehead.cashbook.id === parseInt(selectedCashbook) && feehead.excessFee;
        });
    
        // Check if the excess fee checkbox is checked in the form data
        const formDataHasExcessFee = formData.excessFee === 'true';
    
        // Disable the checkbox if there is an existing excess fee or if the excess fee checkbox is checked in the form data
        return existingFeeheadWithExcessFee || formDataHasExcessFee;
    };

    useEffect(() => {
        getAllFeehead()
            .then(response => {
                setFeeheadData(response.data);
                setFilteredFeeheadData(response.data);
            })
            .catch(error => console.error('Error fetching Feeheads:', error));

        getCashbook()
            .then(response => {
                setCashbooks(response.data);
            })
            .catch(error => console.error('Error fetching Cashbooks:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        createFeehead(formData)
            .then(() => {
                toast.success("Data Submitted Successfully!!!");
                // Clear form fields after successful submission if needed
                refreshFeehead()
                setFormData({
                    receiptBook: '',
                    headDescription: '',
                    shortName: '',
                    otherFeeHead: '',
                    installmentFeeHead: '',
                    excessFee: '',
                    goiScholarship: '',
                    serialNo: '',
                    gstApplicable: '',
                    active: ''
                });
            })
            .catch(() => {
                toast.error("Ooops!!! Something went wrong");
            });
    };

    const refreshFeehead = async () => {
        try {
            const response = await getAllFeehead();
            setFeeheadData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        refreshFeehead();
    }, []);

    const filterFeeheads = (cashbookId) => {
        if (!cashbookId) {
            // If cashbookId is not provided, set filteredFeeheadData to the entire feeheadData
            setFilteredFeeheadData(feeheadData);
        } else {
            const filteredFeeheads = feeheadData.filter(feehead => {
                // Check if feehead and feehead.cashbook are not null before accessing their properties
                return feehead.cashbook && feehead.cashbook.id === parseInt(cashbookId);
            });
            setFilteredFeeheadData(filteredFeeheads);
        }
    };

    useEffect(() => {
        // Fetch titles data from the API when the component mounts
        if (hasMounted) {
            getCashbook()
                .then(response => {
                    const data = response.data; // Access data from the response
                    setCashbooks(data);
                })
                .catch(error => console.error('Error fetching Titles:', error));
        }
    }, [hasMounted]);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Fee Head" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Course</Breadcrumb.Item>
                <Breadcrumb.Item active>Fee Head</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-4 col-form-label form-label" >Receipt Book <span className="text-danger">*</span></Form.Label>
                                                    <Col sm={8} className="mb-3 mb-lg-0">
                                                        <Form.Select id='cashbook' value={selectedCashbook} onChange={handleInputChange} required >
                                                            <option value="" disabled>Please Select a Cashbook</option>
                                                            {cashbooks.map(cashbook => (
                                                                <option key={cashbook.id} value={cashbook.id}>{cashbook.receiptBookName}</option>
                                                            ))}
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Head Description<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={8} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Fee Head Description" id="headDescription" value={formData.headDescription} onChange={handleInputChange} required />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-4 col-form-label form-label" >Short Name<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={8} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Fee Head Short Name" id="shortName" value={formData.shortName} onChange={handleInputChange} required />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-4 col-form-label form-label" >Serial No.<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={8} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Serial No." id="serialNo" value={formData.serialNo} onChange={handleInputChange} required />
                                                    </Col>
                                                </Row>
                                                <Row className='mb-3'>
                                                    <Form.Check.Label className="col-sm-4 col-form-label form-label" >Other Fee Head</Form.Check.Label>
                                                    <Col md={8} xs={12}>
                                                        <Form.Check className="col-form-label form-label" type="checkbox" id="otherFeeHead" value={formData.otherFeeHead} onChange={handleInputChange}>
                                                            <Form.Check.Input type="checkbox" value={formData.otherFeeHead} onChange={handleInputChange} />
                                                            <Form.Check.Label >Check If Other Fee Head</Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Row>
                                                <Row className='mb-3'>
                                                    <Form.Check.Label className="col-sm-4 col-form-label form-label" >Installment Fee Head</Form.Check.Label>
                                                    <Col md={8} xs={12}>
                                                        <Form.Check className=" col-form-label form-label" type="checkbox" id="installmentFeeHead" value={formData.installmentFeeHead} onChange={handleInputChange}>
                                                            <Form.Check.Input type="checkbox" value={formData.installmentFeeHead} onChange={handleInputChange} />
                                                            <Form.Check.Label >Check If Installment Fee Head</Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Row>
                                                {/* <Row className='mb-3'>
                                                    <Form.Check.Label className="col-sm-4 col-form-label form-label" >Excess Fee</Form.Check.Label>
                                                    <Col md={8} xs={12}>
                                                        <Form.Check className=" col-form-label form-label" type="checkbox" id="excessFee" value={formData.excessFee} onChange={handleInputChange}>
                                                            <Form.Check.Input type="checkbox" value={formData.excessFee} onChange={handleInputChange} />
                                                            <Form.Check.Label >Check If Excess Fee</Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Row> */}
                                                <Row className='mb-3'>
                                                    <Form.Check.Label className="col-sm-4 col-form-label form-label" >Excess Fee</Form.Check.Label>
                                                    <Col md={8} xs={12}>
                                                        <Form.Check className="col-form-label form-label" >
                                                        
                                                            <Form.Check.Input
                                                                type="checkbox"
                                                                id='excessFee'
                                                                value={formData.excessFee}
                                                                onChange={handleInputChange}
                                                                disabled={hasExcessFee()} 
                                                            />
                                                            <Form.Check.Label>Check If Excess Fee</Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Row>

                                                <Row className='mb-3'>
                                                    <Form.Check.Label className="col-sm-4 col-form-label form-label" >GOI Scholarship</Form.Check.Label>
                                                    <Col md={8} xs={12}>
                                                        <Form.Check className=" col-form-label form-label" type="checkbox" id="goiScholarship" value={formData.goiScholarship} onChange={handleInputChange}>
                                                            <Form.Check.Input type="checkbox" value={formData.goiScholarship} onChange={handleInputChange} />
                                                            <Form.Check.Label >Check If GOI Scholarship</Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Row>
                                                <Row className='mb-3'>
                                                    <Form.Check.Label className="col-sm-4 col-form-label form-label" >GST Applicable</Form.Check.Label>
                                                    <Col md={8} xs={12}>
                                                        <Form.Check className=" col-form-label form-label" type="checkbox" id="gstApplicable" value={formData.gstApplicable} onChange={handleInputChange}>
                                                            <Form.Check.Input type="checkbox" value={formData.gstApplicable} onChange={handleInputChange} />
                                                            <Form.Check.Label >Check If GST Applicable</Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Row>
                                                <Row className='mb-3'>
                                                    <Form.Check.Label className="col-sm-4 col-form-label form-label" >Active</Form.Check.Label>
                                                    <Col md={8} xs={12}>
                                                        <Form.Check className=" col-form-label form-label" type="checkbox" id="active" value={formData.active} onChange={handleInputChange}>
                                                            <Form.Check.Input type="checkbox" value={formData.active} onChange={handleInputChange} />
                                                            <Form.Check.Label >Check If Active</Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col className="d-flex align-items-center justify-content-center">
                                                        <ToastContainer style={{ marginTop: '40px' }} />
                                                        <Button variant="primary" type="submit">
                                                            Submit
                                                        </Button>
                                                        <Button variant="secondary" type="" style={{ marginLeft: "10px" }}>
                                                            Cancel
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col>
                                                {selectedCashbook &&
                                                    <Table striped bordered hover>
                                                        <thead>
                                                            <tr>
                                                                <th className="col-1"><b>Sr.No.</b></th>
                                                                <th><b>Short Name</b></th>
                                                                <th><b>Description</b></th>
                                                                <th className="col-2"><b>Action</b></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {filteredFeeheadData.map((feehead, index) => (
                                                                <tr key={feehead.id}>
                                                                    <td>{feehead.serialNo}</td>
                                                                    <td>{feehead.shortName}</td>
                                                                    <td>{feehead.headDescription}</td>
                                                                    <td className="d-flex justify-content-center align-items-center">
                                                                        <Button variant='secondary' onClick={() => editRow(index)}>
                                                                            Edit
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>
                                                }
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

export default FeeHead