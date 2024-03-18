'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createConcession , getConcession , updateConcession } from 'app/api/concession'; 
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Concession = () => {
    const hasMounted = useMounted();
    const [concessionData, setConcessionData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        shortName: '',
        conDescription: '',
        percentage: '',
        active: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingConcession, setEditingConcession] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingConcession) {
                await updateConcession(editingConcession.id, formData); 
                setEditingConcession(null); 
                update()
            } else {
                await createConcession(formData); 
                success()
            }
            refreshConcession();
            setFormData({ 
                shortName: '',
                conDescription: '',
                percentage: '',
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

    const refreshConcession = async () => {
        try {
            const response = await getConcession();
            setConcessionData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshConcession();
    }, []);

const editRow = (index) => {
    const editedConcession = concessionData[index];

    setFormData({
        shortName:editedConcession.shortName,
        conDescription:editedConcession.conDescription,
        percentage:editedConcession.percentage,
        active: editedConcession.active
    });
    setFormData(editedConcession);
    setEditingConcession(editedConcession);
    setEditingRowIndex(index);
};

const handleCancel = () => {
    setFormData({
        shortName: '',
        conDescription: '',
        percentage: '',
        active: false
    });
    setEditingConcession(null);
};

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = concessionData.slice(indexOfFirstItem, indexOfLastItem);

    //const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Concession" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Concession</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Short name</Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Short Name" id="shortName" value={formData.shortName} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">Concession Description</Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Control type="text" placeholder="Please Enter Concession Description" id="conDescription" value={formData.conDescription} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">Percentage</Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Control type="text" placeholder="Please Enter Percentage" id="percentage" value={formData.percentage} onChange={handleInputChange} required />
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
                                                    {editingConcession ? "Update" : "Submit"}
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
                            <th><b>Short Name</b></th>
                            <th><b>Con Description</b></th>
                            <th><b>Percentage</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((concession, index) => (
                            <tr key={concession.id}>
                                <td>{concession.shortName}</td>
                                <td>{concession.conDescription}</td>
                                <td>{concession.percentage}</td>
                                <td>{concession.active ? 'Active' : 'Deactive'}</td>
                                <td className="d-flex justify-content-center align-items-center">
                                    <Button variant='secondary' onClick={() => editRow(index)} >
                                        <i className="bi bi-pencil-fill me-2" /> Edit
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* <Pagination className="justify-content-end">
                    <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(Math.ceil(concessionData.length / itemsPerPage))].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(concessionData.length / itemsPerPage)} />
                </Pagination> */}

            </>
        </Container>
    )
}

export default Concession