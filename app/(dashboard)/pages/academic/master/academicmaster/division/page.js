'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Breadcrumb } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createSection , getSection , updateSection } from 'app/api/division';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Section = () => {
    const hasMounted = useMounted();
    const [sectionData, setSectionData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        sectionName: '',
        active: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingSection, setEditingSection] = useState(null);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingSection) {
                await updateSection(editingSection.id, formData); 
                setEditingSection(null); 
                update()
            } else {
                await createSection(formData); 
                success()
            }
            refreshSection();
            setFormData({ 
                sectionName: '',
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

    const refreshSection = async () => {
        try {
            const response = await getSection();
            setSectionData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshSection();
    }, []);


    const editRow = (index) => {
        const editedSection = sectionData[index];

        setFormData({
            sectionName: editedSection.sectionName,
            active: editedSection.active,
        });
        setFormData(editedSection);
        setEditingSection(editedSection); 
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
            sectionName: '',
        active: false
        });
        setEditingSection(null);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sectionData.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Division" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Section</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Division Name <span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Section Name" id="sectionName" value={formData.sectionName} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        

                                        <Row className="mb-3">
                                      <Form.Label className="col-sm-3 col-form-label form-label">Active</Form.Label>
                                      <Col className='mt-2'>
                                        <Form.Check type="switch" id="active" label="Check If Active" checked={formData.active} onChange={handleInputChange} defaultChecked/> 
                                        </Col>
                                    </Row>
 
                                        <Row className="align-items-center">

                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    {editingSection ? "Update" : "Submit"}
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
                            <th><b>Division Name</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((section, index) => (
                            <tr key={section.id}>
                                <td>{section.sectionName}</td>
                                <td>{section.active ? 'Active' : 'Deactive'}</td>
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

export default Section