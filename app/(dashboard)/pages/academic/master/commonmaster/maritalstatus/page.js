'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createMaritalStatus , getMaritalStatus , updateMaritalStatus } from 'app/api/maritalstatus';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MaritalStatus = () => {
    const hasMounted = useMounted();
    const [maritalstatusData, setMaritalStatusData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        maritalStatus: '',
        checkIfActive: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingMaritalStatus, setEditingMaritalStatus] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingMaritalStatus) {
                await updateMaritalStatus(editingMaritalStatus.id, formData); 
                setEditingMaritalStatus(null); 
                update()
            } else {
                await createMaritalStatus(formData); 
                success()
            }
            refreshMaritalStatus();
            setFormData({ 
                maritalStatus: '',
                checkIfActive: false
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
            checkIfActive: id === 'checkIfActive' ? checked : prevFormData.checkIfActive,
        }));
    };

    const refreshMaritalStatus = async () => {
        try {
            const response = await getMaritalStatus();
            setMaritalStatusData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshMaritalStatus();
    }, []);

const editRow = (index) => {
    const editedMaritalStatus = maritalstatusData[index];

    setFormData({
        maritalStatus: editedMaritalStatus.maritalStatus,
        checkIfActive : editedMaritalStatus.checkIfActive,
    });
    setFormData(editedMaritalStatus);
    setEditingMaritalStatus(editedMaritalStatus);
    setEditingRowIndex(index);
};

const handleCancel = () => {
    setFormData({
        maritalStatus: '',
        checkIfActive: false
    });
    setEditingMaritalStatus(null);
};

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = maritalstatusData.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Marital Status" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Marital Status</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Marital Status<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Marital Status" id="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        

                                        <Row className='mb-3'>
                                        <Form.Label className="col-sm-3 col-form-label form-label">
                        Active
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="checkIfActive"
                          label="Check If Active"
                          checked={formData.checkIfActive}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                                        </Row>

                                        
                                      
                                        <Row className="align-items-center">

                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                            <Button variant="primary" type="submit">
                                                    {editingMaritalStatus ? "Update" : "Submit"}
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
                            <th><b>Marital Status</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((maritalstatus, index) => (
                            <tr key={maritalstatus.id}>
                                <td>{maritalstatus.maritalStatus}</td>
                                <td>{maritalstatus.checkIfActive ? 'Active' : 'Deactive'}</td>
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
                    {[...Array(Math.ceil(maritalstatusData.length / itemsPerPage))].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(maritalstatusData.length / itemsPerPage)} />
                </Pagination>

            </>
        </Container>
    )
}

export default MaritalStatus