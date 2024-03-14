'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createAcademicAcademic Year, getAcademicAcademic Year, updateAcademicAcademic Year } from 'app/api/academicyear';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AcademicYear = () => {
    const hasMounted = useMounted();
    const [academicAcademic YearData, setAcademicAcademic YearData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        Academic YearName: '',
        shortName: '',
        startDate: '',
        endDate: '',
        active: false,
        oldAcademic Year: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingAcademicAcademic Year, setEditingAcademicAcademic Year] = useState(null);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingAcademicAcademic Year) {
                await updateAcademicAcademic Year(editingAcademicAcademic Year.id, formData);
                setEditingAcademicAcademic Year(null);
                update()
            } else {
                await createAcademicAcademic Year(formData);
                success()
            }
            refreshAcademicAcademic Year();
            setFormData({
                Academic YearName: '',
                shortName: '',
                startDate: '',
                endDate: '',
                active: false,
                oldAcademic Year: false
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
            oldAcademic Year: id === 'oldAcademic Year' ? checked : prevFormData.oldAcademic Year,
        }));
    };

    const refreshAcademicAcademic Year = async () => {
        try {
            const response = await getAcademicAcademic Year();
            setAcademicAcademic YearData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshAcademicAcademic Year();
    }, []);

    const editRow = (index) => {
        const editedAcademicAcademic Year = academicAcademic YearData[index];

        setFormData({
            Academic YearName: editedAcademicAcademic Year.Academic YearName,
            shortName: editedAcademicAcademic Year.shortName,
            startDate: editedAcademicAcademic Year.startDate,
            endDate: editedAcademicAcademic Year.endDate,
            active: editedAcademicAcademic Year.active,
            oldAcademic Year: editedAcademicAcademic Year.oldAcademic Year
        });
        setFormData(editedAcademicAcademic Year);
        setEditingAcademicAcademic Year(editedAcademicAcademic Year);
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
            Academic YearName: '',
            shortName: '',
            startDate: '',
            endDate: '',
            active: false,
            oldAcademic Year: false
        });
        setEditingAcademicAcademic Year(null);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = academicAcademic YearData.slice(indexOfFirstItem, indexOfLastItem);
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
                                                <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Academic Year name</Form.Label>
                                                <Col sm={9} className="mb-3 mb-lg-0">
                                                    <Form.Control type="text" placeholder="Please Enter Academic Year Name" id="Academic YearName" value={formData.Academic YearName} onChange={handleInputChange} required />
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
                                                <Form.Check.Label className="col-sm-3 col-form-label form-label" >Old Academic Year</Form.Check.Label>
                                                <Col md={9} xs={12}>
                                                    <Form.Check className="col-sm-9 col-form-label form-label" type="checkbox" id="oldAcademic Year" value={formData.oldAcademic Year} onChange={handleInputChange}>
                                                        <Form.Check.Input type="checkbox" id="oldAcademic Year" checked={formData.oldAcademic Year} onChange={handleInputChange} />
                                                        <Form.Check.Label >If Old Academic Year</Form.Check.Label>
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
                                                        {editingAcademicAcademic Year ? "Update" : "Submit"}
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
                                                                <b>Academic Year Name</b>
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
                                                        {currentItems.map((academicAcademic Year, index) => (
                                                            <tr key={academicAcademic Year.id}>
                                                                <td>{academicAcademic Year.Academic YearName}</td>
                                                                <td>{academicAcademic Year.startDate}</td>
                                                                <td>{academicAcademic Year.endDate}</td>
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
                                                    {[...Array(Math.ceil(academicAcademic YearData.length / itemsPerPage))].map((_, index) => (
                                                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                                            {index + 1}
                                                        </Pagination.Item>
                                                    ))}
                                                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(academicAcademic YearData.length / itemsPerPage)} />
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