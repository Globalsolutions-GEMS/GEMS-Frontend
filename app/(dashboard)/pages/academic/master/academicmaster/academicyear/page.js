'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createAcademicSession, getAcademicSession, updateAcademicSession } from 'app/api/academicyear';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AcademicYear = () => {
    const hasMounted = useMounted();
    const [academicsessionData, setAcademicSessionData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        sessionName: '',
        shortName: '',
        startDate: '',
        endDate: '',
        active: false,
        oldSession: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingAcademicSession, setEditingAcademicSession] = useState(null);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingAcademicSession) {
                await updateAcademicSession(editingAcademicSession.id, formData);
                setEditingAcademicSession(null);
                update()
            } else {
                await createAcademicSession(formData);
                success()
            }
            refreshAcademicSession();
            setFormData({
                sessionName: '',
                shortName: '',
                startDate: '',
                endDate: '',
                active: false,
                oldSession: false
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
            oldSession: id === 'oldSession' ? checked : prevFormData.oldSession,
        }));
    };

    const refreshAcademicSession = async () => {
        try {
            const response = await getAcademicSession();
            setAcademicSessionData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshAcademicSession();
    }, []);

    const editRow = (index) => {
        const editedAcademicSession = academicsessionData[index];

        setFormData({
            sessionName: editedAcademicSession.sessionName,
            shortName: editedAcademicSession.shortName,
            startDate: editedAcademicSession.startDate,
            endDate: editedAcademicSession.endDate,
            active: editedAcademicSession.active,
            oldSession: editedAcademicSession.oldSession
        });
        setFormData(editedAcademicSession);
        setEditingAcademicSession(editedAcademicSession);
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
            sessionName: '',
            shortName: '',
            startDate: '',
            endDate: '',
            active: false,
            oldSession: false
        });
        setEditingAcademicSession(null);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = academicsessionData.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Academic Year" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Academic Year</Breadcrumb.Item>
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
                                        <Row><Col>
                                            <Row className="mb-3">
                                                <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Session name</Form.Label>
                                                <Col sm={9} className="mb-3 mb-lg-0">
                                                    <Form.Control type="text" placeholder="Please Enter Session Name" id="sessionName" value={formData.sessionName} onChange={handleInputChange} required />
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="email">Short Name</Form.Label>
                                                <Col md={9} xs={12}>
                                                    <Form.Control type="text" placeholder="Please Enter Short Name" id="shortName" value={formData.shortName} onChange={handleInputChange} required />
                                                </Col>
                                            </Row>

                                            <Row className="mb-3">
                                                <Form.Label className="col-sm-3 col-form-label form-label" >Start Date</Form.Label>
                                                <Col md={9} xs={12}>
                                                    <Form.Control type="date" placeholder="Please Enter Start Date" id="startDate" value={formData.startDate} onChange={handleInputChange} required />
                                                </Col>
                                            </Row>

                                            <Row className="mb-3">
                                                <Form.Label className="col-sm-3 col-form-label form-label" >End Date</Form.Label>
                                                <Col md={9} xs={12}>
                                                    <Form.Control type="date" placeholder="Please Enter End Date" id="endDate" value={formData.endDate} onChange={handleInputChange} required />
                                                </Col>
                                            </Row>

                                            {/* <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Active</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="active" value={formData.active} onChange={handleInputChange}>
                                                    <Form.Check.Input type="checkbox" id='active' checked={formData.active} onChange={handleInputChange} />
                                                    <Form.Check.Label >If Active</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Row> */}

                                            <Row className='mb-3'>
                                                <Form.Check.Label className="col-sm-3 col-form-label form-label" >Old Session</Form.Check.Label>
                                                <Col md={9} xs={12}>
                                                    <Form.Check className="col-sm-9 col-form-label form-label" type="checkbox" id="oldSession" value={formData.oldSession} onChange={handleInputChange}>
                                                        <Form.Check.Input type="checkbox" id="oldSession" checked={formData.oldSession} onChange={handleInputChange} />
                                                        <Form.Check.Label >If Old Session</Form.Check.Label>
                                                    </Form.Check>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Form.Label className="col-sm-3 col-form-label form-label">
                                                    Active
                                                </Form.Label>
                                                <Col className='mt-2'>
                                                    <Form.Check
                                                        type="switch"
                                                        id="checkIfActive"
                                                        label="If Active"
                                                        defaultChecked
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="align-items-center">
                                                <Col className="mt-4 d-flex align-items-center justify-content-center">
                                                    <Button variant="primary" type="submit">
                                                        {editingAcademicSession ? "Update" : "Submit"}
                                                    </Button>
                                                    <ToastContainer style={{ marginTop: '40px' }} />
                                                    <Button variant="secondary" type="reset" style={{ marginLeft: '10px' }} onClick={handleCancel} >
                                                        Cancel
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <b>Session Name</b>
                                                            </th>
                                                            <th>
                                                                <b>Start Date</b>
                                                            </th>
                                                            <th>
                                                                <b>End Date</b>
                                                            </th>
                                                            <th className="col-2">
                                                                <b>Action</b>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {currentItems.map((academicsession, index) => (
                                                            <tr key={academicsession.id}>
                                                                <td>{academicsession.sessionName}</td>
                                                                <td>{academicsession.startDate}</td>
                                                                <td>{academicsession.endDate}</td>
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
                                                    {[...Array(Math.ceil(academicsessionData.length / itemsPerPage))].map((_, index) => (
                                                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                                            {index + 1}
                                                        </Pagination.Item>
                                                    ))}
                                                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(academicsessionData.length / itemsPerPage)} />
                                                </Pagination>

                                            </Col>
                                        </Row>
                                    </Form>
                                }
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AcademicYear