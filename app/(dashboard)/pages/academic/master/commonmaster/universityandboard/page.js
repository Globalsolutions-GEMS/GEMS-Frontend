'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createUniversityAndBoard,getUniversityAndBoard,updateUniversityAndBoard } from 'app/api/universityandboard';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UniversityAndBoard = () => {
    const hasMounted = useMounted();
    const [universityandboardData, setUniversityAndBoardData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        universityBoardCode: '',
        universityBoardName: '',
        checkIfHomeUniversity: false,
        checkIfActive: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingUniversityAndBoard, setEditingUniversityAndBoard] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingUniversityAndBoard) {
                await updateUniversityAndBoard(editingUniversityAndBoard.id, formData); 
                setEditingUniversityAndBoard(null); 
                update()
            } else {
                await createUniversityAndBoard(formData); 
                success()
            }
            refreshUniversityAndBoard();
            setFormData({ 
                universityBoardCode: '',
                universityBoardName: '',
                checkIfHomeUniversity: false,
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
            checkIfHomeUniversity: id === 'checkIfHomeUniversity' ? checked: prevFormData.checkIfHomeUniversity,
            checkIfActive: id === 'checkIfActive' ? checked : prevFormData.checkIfActive
        }));
    };

    const refreshUniversityAndBoard = async () => {
        try {
            const response = await getUniversityAndBoard();
            setUniversityAndBoardData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshUniversityAndBoard();
    }, []);

    const editRow = (index) => {
        const editedUniversityAndBoard = universityandboardData[index];
    
        setFormData({
            universityBoardCode: editedUniversityAndBoard.universityBoardCode,
            universityBoardName: editedUniversityAndBoard.universityBoardName,
            checkIfHomeUniversity: editedUniversityAndBoard.checkIfHomeUniversity,
            checkIfActive: editedUniversityAndBoard.checkIfActive,
        });
        setFormData(editedUniversityAndBoard);
        setEditingUniversityAndBoard(editedUniversityAndBoard);
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
        universityBoardCode: '',
        universityBoardName: '',
        checkIfHomeUniversity: false,
        checkIfActive: false
        });
        setEditingUniversityAndBoard(null);
    };
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = universityandboardData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="University And Board" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
                <Breadcrumb.Item active>University And Board</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">University / Board Code<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter University Code" id="universityBoardCode" value={formData.universityBoardCode} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">University / Board Name<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter University Name" id="universityBoardName" value={formData.universityBoardName} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>

                                        <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Home University</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="checkIfHomeUniversity" value={formData.checkIfHomeUniversity} onChange={handleInputChange}>
                                                    <Form.Check.Input type="checkbox" id="checkIfHomeUniversity" checked={formData.checkIfHomeUniversity} onChange={handleInputChange} />
                                                    <Form.Check.Label >If Home University</Form.Check.Label>
                                                </Form.Check>
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
                                                    {editingUniversityAndBoard ? "Update" : "Submit"}
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
                        <th><b>University Code</b></th>
                        <th><b>University Name</b></th>
                        <th><b>Home University</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((universityandboard, index) => (
                            <tr key={universityandboard.id}>
                                <td>{universityandboard.universityBoardCode}</td>
                                <td>{universityandboard.universityBoardName}</td>
                                <td>{universityandboard.checkIfHomeUniversity ? 'Yes' : 'No'}</td>
                                <td>{universityandboard.checkIfActive ? 'Active' : 'Deactive'}</td>
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

export default UniversityAndBoard