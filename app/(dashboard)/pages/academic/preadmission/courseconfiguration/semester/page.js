// 'use client'
// // import node module libraries
// import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
// import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// // import widget as custom components
// import { PageHeading } from 'widgets'

// // import sub components
// import useMounted from 'hooks/useMounted';
// import { CheckCircleFill } from 'react-bootstrap-icons';


// const Semester = () => {
//     const hasMounted = useMounted();

//     return (
//         <Container fluid className="p-6">

//             {/* Page Heading */}
//             <PageHeading heading="Semester" />
//             <Breadcrumb>
//                 <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
//                 <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
//                 <Breadcrumb.Item href="#">Course Configuration</Breadcrumb.Item>
//                 <Breadcrumb.Item active>Semester</Breadcrumb.Item>
//             </Breadcrumb>


//             <Row className="mb-8">
//                 <Col xl={12} lg={8} md={12} xs={12}>
//                     <Card>
//                         <Card.Body>
//                             <div>
//                                 {hasMounted &&
//                                     <Form>
//                                         <Row className="mb-3">
//                                             <Form.Label className="col-sm-3 col-form-label form-label" >Year<span className="text-danger">*</span></Form.Label>
//                                             <Col md={9} xs={12}>
//                                                 <Form.Select type="year" placeholder="Please Select" id="shortname" required />
//                                             </Col>
//                                         </Row>
//                                         <Row className="mb-3">
//                                             <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Semester No.<span className="text-danger">*</span></Form.Label>
//                                             <Col sm={9} className="mb-3 mb-lg-0">
//                                                 <Form.Control type="text" placeholder="Please Enter Semester No" id="semesternumber" required />
//                                             </Col>
//                                         </Row>
//                                         <Row className="mb-3">
//                                             <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Semester Description<span className="text-danger">*</span></Form.Label>
//                                             <Col sm={9} className="mb-3 mb-lg-0">
//                                                 <Form.Control type="text" placeholder="Please Enter Semester Description" id="semesternumber" required />
//                                             </Col>
//                                         </Row>
//                                         <Row className="mb-3">
//                                             <Form.Label className="col-sm-3 col-form-label form-label">
//                                                 Active
//                                             </Form.Label>
//                                             <Col className='mt-2'>
//                                                 <Form.Check
//                                                     type="switch"
//                                                     id="checkIfActive"
//                                                     label="If Active"
//                                                     defaultChecked
//                                                 />
//                                             </Col>
//                                         </Row>
                                        
//                                         <Row className="align-items-center">

//                                             <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
//                                                 <Button variant="primary" type="submit" >
//                                                     Submit
//                                                 </Button>
//                                                 <Button variant="secondary" type="" style={{ marginLeft: '10px' }}>
//                                                     Cancel
//                                                 </Button>
//                                             </Col>
//                                         </Row>
//                                     </Form>
//                                 }
//                             </div>
//                         </Card.Body>
//                     </Card>

//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Semester

'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { getYear , createSemester , getSemester , updateSemester } from 'app/api/year';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Semester = () => {
    const hasMounted = useMounted();
    const [semesterData, setSemesterData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        semesterNumber: '',
        semesterDescription: '',
        checkIfActive: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingSemester, setEditingSemester] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingSemester) {
                await updateSemester(editingSemester.id, formData); 
                setEditingSemester(null); 
                update()
            } else {
                await createSemester({
                semester : formData.semester ,
                YearID: formData.YearID
                });
                success()
            }
            refreshYear();
            refreshSemester();
            setFormData({ 
                year:'',
                semesterNumber: '',
                semesterDescription: '',
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


    const refreshSemester = async () => {
        try {
            const response = await getSemester();
            setSemesterData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshSemester();
    }, []);


    const refreshYear = async () => {
        try {
            const response = await getYear();
            setSemesterData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshYear();
    }, []);


    const editRow = (index) => {
        const editedSemester = semesterData[index];
    
        setFormData({
            semesterNumber: editedSemester.semesterNumber,
            semesterDescription: editedSemester.semesterDescription,
            checkIfActive: editedSemester.checkIfActive
        });
        setFormData(editedSemester);
        setEditingSemester(editedSemester);
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
        semesterNumber: '',
        semesterDescription: '',
        checkIfActive: false
        });
        setEditingSemester(null);
    };
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = semesterData.slice(indexOfFirstItem, indexOfLastItem);
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Semester" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Course</Breadcrumb.Item>
                <Breadcrumb.Item active>Semester</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Year<span className="text-danger">*</span></Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Select type="year" placeholder="Please Select" id="year" value={formData.year} onChange={handleInputChange} required >
                                                <option value="">Select Year</option>
                                                    {semesterData.map((semester, index) => (
                                                        <option key={index} value={semester.id}>{semester.year}</option>
                                                    ))}
                                                </Form.Select>  
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Semester No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Semester No" id="semesterNumber" value={formData.semesterNumber} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Semester Description<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Semester Description" id="semesterDescription" value={formData.semesterDescription} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Active</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="checkIfActive" value={formData.checkIfActive} onChange={handleInputChange}>
                                                    <Form.Check.Input type="checkbox" id="checkIfActive" checked={formData.checkIfActive} onChange={handleInputChange}/>
                                                    <Form.Check.Label >Check If Active</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Row>
                                        
                                        <Row className="align-items-center">

                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                            <Button variant="primary" type="submit">
                                                    {editingSemester ? "Update" : "Submit"}
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
                        <th><b>Year </b></th>  
                        <th><b>Semester No. </b></th>
                        <th><b>Semester Description</b></th>
                        <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((semester, index) => (
                            <tr key={semester.id}>
                                <td>{semester.year}</td>
                                <td>{semester.semesterNumber}</td>
                                <td>{semester.semesterDescription}</td>
                                <td>{semester.checkIfActive ? 'Active' : 'Deactive'}</td>
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
                    {[...Array(Math.ceil(semesterData.length / itemsPerPage))].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(semesterData.length / itemsPerPage)} />
                </Pagination>

            </>
        </Container>
    )
}

export default Semester