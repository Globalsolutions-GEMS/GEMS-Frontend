'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createBloodGroup , getBloodGroup , updateBloodGroup } from 'app/api/bloodgroup';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BloodGroup = () => {
    const hasMounted = useMounted();
    const [bloodgroupData, setBloodGroupData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        bloodGroup: '',
        checkIfActive: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingBloodGroup, setEditingBloodGroup] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingBloodGroup) {
                await updateBloodGroup(editingBloodGroup.id, formData); 
                setEditingBloodGroup(null); 
                update()
            } else {
                await createBloodGroup(formData); 
                success()
            }
            refreshBloodGroup();
            setFormData({ 
                bloodGroup: '',
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

    const refreshBloodGroup = async () => {
        try {
            const response = await getBloodGroup();
            setBloodGroupData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshBloodGroup();
    }, []);

const editRow = (index) => {
    const editedBloodGroup = bloodgroupData[index];

    setFormData({
        bloodGroup: editedBloodGroup.bloodGroup,
        checkIfActive: editedBloodGroup.checkIfActive
    });
    setFormData(editedBloodGroup);
    setEditingBloodGroup(editedBloodGroup);
    setEditingRowIndex(index);
};

const handleCancel = () => {
    setFormData({
        bloodGroup: '',
        checkIfActive: false
    });
    setEditingBloodGroup(null);
};

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bloodgroupData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Blood Group" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
                <Breadcrumb.Item active>BloodGroup</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Blood Group<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Blood Group" id="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} required />
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
                                                    {editingBloodGroup ? "Update" : "Submit"}
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
                            <th><b>Blood Group</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((bloodgroup, index) => (
                            <tr key={bloodgroup.id}>
                                <td>{bloodgroup.bloodGroup}</td>
                                <td>{bloodgroup.checkIfActive ? 'Active' : 'Deactive'}</td>
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

export default BloodGroup