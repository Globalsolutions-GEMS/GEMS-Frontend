'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createMotherTongue,getMotherTongue,updateMotherTongue } from 'app/api/mothertongue';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MotherTongue = () => {
    const hasMounted = useMounted();
    const [mothertongueData, setMotherTongueData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        motherTongue: '',
        checkIfActive: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingMotherTongue, setEditingMotherTongue] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingMotherTongue) {
                await updateMotherTongue(editingMotherTongue.id, formData); 
                setEditingMotherTongue(null); 
                update()
            } else {
                await createMotherTongue(formData); 
                success()
            }
            refreshMotherTongue();
            setFormData({ 
                motherTongue: '',
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

    const refreshMotherTongue = async () => {
        try {
            const response = await getMotherTongue();
            setMotherTongueData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshMotherTongue();
    }, []);

const editRow = (index) => {
    const editedMotherTongue = mothertongueData[index];

    setFormData({
        motherTongue: editedMotherTongue.motherTongue,
        checkIfActive : editedMotherTongue.checkIfActive,
    });
    setFormData(editedMotherTongue);
    setEditingMotherTongue(editedMotherTongue);
    setEditingRowIndex(index);
};

const handleCancel = () => {
    setFormData({
        motherTongue: '',
        checkIfActive: false
    });
    setEditingMotherTongue(null);
};

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mothertongueData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Mother Tongue" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Mother Tongue</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Mother Tongue<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Mother Tongue" id="motherTongue" value={formData.motherTongue} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                       
                                        
                                        <Row className="mb-3">
                                      <Form.Label className="col-sm-3 col-form-label form-label">If Active</Form.Label>
                                      <Col md={9} xs={12}>
                                        <Form.Check type="switch" id="checkIfActive" label="If Active" checked={formData.active} onChange={handleInputChange} defaultChecked/> 
                                        </Col>
                                    </Row>


                                        <Row className="align-items-center">

                                            <Col className="mt-4 d-flex align-items-center justify-content-center">
                                            <Button variant="primary" type="submit">
                                                    {editingMotherTongue ? "Update" : "Submit"}
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
                            <th><b>Mother Tongue</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((mothertongue, index) => (
                            <tr key={mothertongue.id}>
                                <td>{mothertongue.motherTongue}</td>
                                <td>{mothertongue.checkIfActive ? 'Active' : 'Deactive'}</td>
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

export default MotherTongue