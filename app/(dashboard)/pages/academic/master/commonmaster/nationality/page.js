'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createNationality,getNationality,updateNationality } from 'app/api/nationality';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Nationality = () => {
    const hasMounted = useMounted();
    const [nationalityData, setNationalityData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        nationality: '',
        checkIfActive: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingNationality, setEditingNationality] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingNationality) {
                await updateNationality(editingNationality.id, formData); 
                setEditingNationality(null); 
                update()
            } else {
                await createNationality(formData); 
                success()
            }
            refreshNationality();
            setFormData({ 
                nationality: '',
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
            checkIfActive: id === 'checkIfActive' ? checked : prevFormData.checkIfActive
        }));
    };

    const refreshNationality = async () => {
        try {
            const response = await getNationality();
            setNationalityData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshNationality();
    }, []);

    const editRow = (index) => {
        const editedNationality = nationalityData[index];
    
        setFormData({
            nationality : editedNationality.nationality,
            checkIfActive: editedNationality.checkIfActive,
        });
        setFormData(editedNationality);
        setEditingNationality(editedNationality);
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
            nationality: '',
            checkIfActive: false
        });
        setEditingNationality(null);
    };
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = nationalityData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Nationality" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Nationality</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Nationality<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Nationality" id="nationality" value={formData.nationality} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                       
                                        <Row className="mb-3">
                                      <Form.Label className="col-sm-3 col-form-label form-label">Check if Active</Form.Label>
                                      <Col md={9} xs={12}>
                                        <Form.Check type="switch" id="checkIfActive" label="Check If Active" checked={formData.active} onChange={handleInputChange} defaultChecked/> 
                                        </Col>
                                    </Row>
                                      
                                        <Row className="align-items-center">

                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                            <Button variant="primary" type="submit">
                                                    {editingNationality ? "Update" : "Submit"}
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
                        <th><b>Nationality</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((nationality, index) => (
                            <tr key={nationality.id}>
                                <td>{nationality.nationality}</td>
                                <td>{nationality.checkIfActive ? 'Active' : 'Deactive'}</td>
                                <td className="d-flex justify-content-center align-items-center">
                                    <Button variant='secondary' onClick={() => editRow(index)} >
                                        <i className="bi bi-pencil-fill me-2" /> Edit
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


            </>
        </Container>
    )
}

export default Nationality