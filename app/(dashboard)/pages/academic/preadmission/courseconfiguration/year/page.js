'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createYear , getYear , updateYear } from 'app/api/year';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Year = () => {
    const hasMounted = useMounted();
    const [yearData, setYearData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        year: '',
        yourDefination: '',
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingYear, setEditingYear] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingYear) {
                await updateYear(editingYear.id, formData); 
                setEditingYear(null); 
                update()
            } else {
                await createYear(formData); 
                success()
            }
            refreshYear();
            setFormData({ 
                year: '',
                yourDefination: '',
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

    // const handleInputChange = (event) => {
    //     const { id, type, value, checked } = event.target;
    
    //     // If the input type is dropdown, use the value directly
    //     const inputValue = type === 'select-one' ? value : (type === 'checkbox' ? checked : value);
    
    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         [id]: inputValue,
    //     }));
    // };
    

    const refreshYear = async () => {
        try {
            const response = await getYear();
            setYearData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshYear();
    }, []);

    const editRow = (index) => {
        const editedYear = yearData[index];
    
        setFormData({
            year: editedYear.year,
            yourDefination: editedYear.yourDefination,
        });
        setFormData(editedYear);
        setEditingYear(editedYear);
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
            year: '',
            yourDefination: '',
        });
        setEditingYear(null);
    };
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = yearData.slice(indexOfFirstItem, indexOfLastItem);
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Year" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Course</Breadcrumb.Item>
                <Breadcrumb.Item active>Year</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Year<span className="text-danger">*</span></Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Select type="year" placeholder="Please Select" id="year" value={formData.year} onChange={handleInputChange} required >
                                                <option value="">Select Year</option>
                                                <option value="First Year">First Year</option>
                                                <option value="Second Year">Second Year</option>
                                                <option value="Third Year">Third Year</option>
                                                <option value="Fourth Year">Fourth Year</option>
                                                <option value="Fifth Year">Fifth Year</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Year Defination</Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Year Defination" id="yourDefination" value={formData.yourDefination} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>

                                        
                                        <Row className="align-items-center">
                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                            <Button variant="primary" type="submit">
                                                    {editingYear ? "Update" : "Submit"}
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
                        <th><b> Year </b></th>
                        <th><b>Year Description</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((year, index) => (
                            <tr key={year.id}>
                                <td>{year.year}</td>
                                <td>{year.yourDefination}</td>
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
                    {[...Array(Math.ceil(yearData.length / itemsPerPage))].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(yearData.length / itemsPerPage)} />
                </Pagination>

            </>
        </Container>
    )
}

export default Year