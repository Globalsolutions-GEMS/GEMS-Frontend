'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createReligion,getReligion,updateReligion } from 'app/api/religion';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Relegion = () => {
    const hasMounted = useMounted();
    const [religionData, setReligionData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        religion: '',
        checkIfActive: false,
        checkIfMinority: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingReligion, setEditingReligion] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingReligion) {
                await updateReligion(editingReligion.id, formData); 
                setEditingReligion(null); 
                update()
            } else {
                await createReligion(formData); 
                success()
            }
            refreshReligion();
            setFormData({ 
                religion: '',
                checkIfActive: false,
                checkIfMinority: false
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
            checkIfMinority : id === 'checkIfMinority' ? checked : prevFormData.checkIfMinority,
        }));
    };

    const refreshReligion = async () => {
        try {
            const response = await getReligion();
            setReligionData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshReligion();
    }, []);

    const editRow = (index) => {
        const editedReligion = religionData[index];
    
        setFormData({
            nationality : editedReligion.religion,
            checkIfActive: editedReligion.checkIfActive,
            checkIfMinority: editedReligion.checkIfMinority,
        });
        setFormData(editedReligion);
        setEditingReligion(editedReligion);
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
        religion: '',
        checkIfActive: false,
        checkIfMinority: false
        });
        setEditingReligion(null);
    };
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = religionData.slice(indexOfFirstItem, indexOfLastItem);
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Relegion" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Relegion</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Relegion<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Relegion" id="religion" value={formData.religion} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        


                                        <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Minority</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="checkIfMinority" value={formData.checkIfMinority} onChange={handleInputChange} >
                                                    <Form.Check.Input type="checkbox" id="checkIfMinority" checked={formData.checkIfMinority} onChange={handleInputChange} />
                                                    <Form.Check.Label >Check If Minority</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Row>
                                      
                                        <Row className='mb-3'>
                                        <Form.Label className="col-sm-3 col-form-label form-label">
                        Active
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="active"
                          label="Check If Active"
                          checked={formData.active}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                                        </Row>
                                        <Row className="align-items-center">

                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                            <Button variant="primary" type="submit">
                                                    {editingReligion ? "Update" : "Submit"}
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
                        <th><b>Religion</b></th>
                            <th><b>Active</b></th>
                            <th><b>Is Minor</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((religion, index) => (
                            <tr key={religion.id}>
                                <td>{religion.religion}</td>
                                <td>{religion.checkIfActive ? 'Active' : 'Deactive'}</td>
                                <td>{religion.checkIfMinority ? 'Minor' : 'Not a Minor'}</td>
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
                    {[...Array(Math.ceil(religionData.length / itemsPerPage))].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(religionData.length / itemsPerPage)} />
                </Pagination>

            </>
        </Container>
    )
}

export default Relegion