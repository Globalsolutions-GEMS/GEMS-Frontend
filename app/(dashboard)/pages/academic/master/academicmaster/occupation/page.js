'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createOccupation , getOccupation , updateOccupation } from 'app/api/occupation';


const Occupation = () => {
    const hasMounted = useMounted();
    const [occupationData, setOccupationData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        occupation: '',
        active: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingOccupation, setEditingOccupation] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingOccupation) {
                await updateOccupation(editingOccupation.id, formData); 
                setEditingOccupation(null); 
                update()
            } else {
                await createOccupation(formData); 
                success()
            }
            refreshOccupation();
            setFormData({ 
                occupation: '',
                active: false
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
            active: id === 'active' ? checked : prevFormData.active,
        }));
    };

    const refreshOccupation = async () => {
        try {
            const response = await getOccupation();
            setOccupationData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshOccupation();
    }, []);

    const editRow = (index) => {
        const editedOccupation = occupationData[index];

        setFormData({
            occupation: editedOccupation.occupation,
            active: editedOccupation.active,
        });
        setFormData(editedOccupation);
        setEditingOccupation(editedOccupation); 
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
            occupation: '',
            active: false
        });
        setEditingOccupation(null);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = occupationData.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Occupation" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Occupation</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Occupation<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Occupation" id="occupation" value={formData.occupation} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                        <Form.Label className="col-sm-3 col-form-label form-label">
                                            Active
                                        </Form.Label>
                                        <Col className='mt-2'>
                                            <Form.Check
                                            type="switch"
                                            id="active"
                                            label="If Active"
                                            checked={formData.active}
                                            onChange={handleInputChange}
                                            defaultChecked
                                            />
                                        </Col>
                                        </Row>
                                        <Row className="align-items-center">

                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    {editingOccupation ? "Update" : "Submit"}
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
                            <th><b>Occupation</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((occupation, index) => (
                            <tr key={occupation.id}>
                                <td>{occupation.occupation}</td>
                                <td>{occupation.active ? 'Active' : 'Deactive'}</td>
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

export default Occupation