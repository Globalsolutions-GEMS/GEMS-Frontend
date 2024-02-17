'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createFeePattern , getFeePattern , updateFeePattern } from 'app/api/feepattern';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FeePattern = () => {
    const hasMounted = useMounted();
    const [feepatternData, setFeePatternData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        feePattern: '',
        feePatternName: '',
        noOfSemester: ''
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingFeePattern, setEditingFeePattern] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingFeePattern) {
                await updateFeePattern(editingFeePattern.id, formData); 
                setEditingFeePattern(null); 
                update()
            } else {
                await createFeePattern(formData); 
                success()
            }
            refreshFeePattern();
            setFormData({ 
                feePattern: '',
                feePatternName: '',
                noOfSemester: ''
            });
            setShowSuccessAlert(true);
        } catch (error) {
            console.log(error);
            errors()
        }
    }

    const handleInputChange = (event) => {
        const { id, type, checked } = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: type === 'checkbox' ? checked : event.target.value,
        }));
    };

    const refreshFeePattern = async () => {
        try {
            const response = await getFeePattern();
            setFeePatternData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshFeePattern();
    }, []);

    const editRow = (index) => {
        const editedFeePattern = feepatternData[index];
    
        setFormData({
            feePattern: editedFeePattern.feePattern,
            feePatternName: editedFeePattern.feePatternName,
            noOfSemester: editedFeePattern.noOfSemester,
        });
        setFormData(editedFeePattern);
        setEditingFeePattern(editedFeePattern);
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
        feePattern: '',
        feePatternName: '',
        noOfSemester: ''
        });
        setEditingFeePattern(null);
    };
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = feepatternData.slice(indexOfFirstItem, indexOfLastItem);
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Fee Pattern" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Course</Breadcrumb.Item>
                <Breadcrumb.Item active>Fee Pattern</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form
                                    onSubmit={handleSubmit}
                                    >
                                        
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Fee Pattern<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Fee Pattern" id="feePattern" value={formData.feePattern} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Fee Pattern Name<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Fee Pattern Name" id="feePatternName" value={formData.feePatternName} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >No. Of Semester<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select" id="noOfSemester" value={formData.noOfSemester} onChange={handleInputChange} required >
                                                <option value="Please Select">Please Select </option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                                <option value="4"> 4</option>
                                                <option value="5"> 5</option>
                                                <option value="6"> 6</option>
                                                <option value="7"> 7</option>
                                                <option value="8"> 8</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                        
                                        
                                        <Row className="align-items-center">

                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                            <Button variant="primary" type="submit">
                                                    {editingFeePattern ? "Update" : "Submit"}
                                                </Button>
                                                <ToastContainer style={{ marginTop: '40px' }} />
                                                <Button variant="secondary" type="reset" style={{ marginLeft: '10px' }} onClick={handleCancel} >
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
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th><b>Fee Pattern</b></th>
                            <th><b>Fee Pattern Name</b></th>
                            <th><b>No. Of Semester</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((feePattern, index) => (
                            <tr key={feePattern.id}>
                                <td>{feePattern.feePattern}</td>
                                <td>{feePattern.feePatternName}</td>
                                <td>{feePattern.noOfSemester}</td>
                                <td className="d-flex justify-content-center align-items-center">
                                    <Button variant='secondary' onClick={() => editRow(index)} >
                                        <i className="bi bi-pencil-fill me-2" /> Edit
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Pagination className="justify-content-end">
                    <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(Math.ceil(feepatternData.length / itemsPerPage))].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(feepatternData.length / itemsPerPage)} />
                </Pagination>

            </>
        </Container>
    )
}

export default FeePattern