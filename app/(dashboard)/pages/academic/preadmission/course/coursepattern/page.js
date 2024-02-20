'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createCoursePattern , getCoursePattern ,updateCoursePattern } from 'app/api/coursepattern';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CoursePattern = () => {
    const hasMounted = useMounted();
    const [coursepatternData, setCoursePatternData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        coursePattern: '',
        coursePatternName: '',
        noOfSemester: '',
        checkIfActive: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingCoursePattern, setEditingCoursePattern] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingCoursePattern) {
                await updateCoursePattern(editingCoursePattern.id, formData); 
                setEditingCoursePattern(null); 
                update()
            } else {
                await createCoursePattern(formData); 
                success()
            }
            refreshCoursePattern();
            setFormData({ 
                coursePattern: '',
                coursePatternName: '',
                noOfSemester: '',
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

    const refreshCoursePattern = async () => {
        try {
            const response = await getCoursePattern();
            setCoursePatternData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshCoursePattern();
    }, []);

const editRow = (index) => {
    const editedCoursePattern = coursepatternData[index];

    setFormData({
        coursePattern : editedCoursePattern.coursePattern,
        coursePatternName : editedCoursePattern.coursePatternName,
        noOfSemester : editedCoursePattern.noOfSemester,
        checkIfActive : editedCoursePattern.checkIfActive,
    });
    setFormData(editedCoursePattern);
    setEditingCoursePattern(editedCoursePattern);
    setEditingRowIndex(index);
};

const handleCancel = () => {
    setFormData({
                coursePattern: '',
                coursePatternName: '',
                noOfSemester: '',
                checkIfActive: false
    });
    setEditingCoursePattern(null);
};

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = coursepatternData.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Course Pattern" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Course</Breadcrumb.Item>
                <Breadcrumb.Item active>Course Pattern</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Course Pattern<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Course Pattern" id="coursePattern" value={formData.coursePattern} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Course Pattern Name<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Course Pattern Name" id="coursePatternName" value={formData.coursePatternName} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >No. Of Semester<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                {/* <Form.Select type="text" placeholder="Please Select" id="noOfSemester" value={formData.noOfSemester} onChange={handleInputChange} required /> */}
                                                <Form.Control type="text" placeholder="Please Enter" id="noOfSemester" value={formData.noOfSemester} onChange={handleInputChange} required />
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
                                                    label="Check If Active"
                                                    defaultChecked
                                                />
                                            </Col>
                                        </Row>
                                        
                                        
                                        <Row className="align-items-center">

                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                            <Button variant="primary" type="submit">
                                                    {editingCoursePattern ? "Update" : "Submit"}
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
                            <th><b>Corse Pattern</b></th>
                            <th><b>Course Pattern Name</b></th>
                            <th><b>No. of Semester</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((coursepattern, index) => (
                            <tr key={coursepattern.id}>
                                <td>{coursepattern.coursePattern}</td>
                                <td>{coursepattern.coursePatternName}</td>
                                <td>{coursepattern.noOfSemester}</td>
                                <td>{coursepattern.checkIfActive ? 'Active' : 'Deactive'}</td>
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
                    {[...Array(Math.ceil(coursepatternData.length / itemsPerPage))].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(coursepatternData.length / itemsPerPage)} />
                </Pagination>

            </>
        </Container>
    )
}

export default CoursePattern