'use client'
// import node module libraries
import { Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';
import React, { useEffect, useState } from 'react';

import { getTitles, getGenders, getCasteCategory, createDetails, updateDetails, getDetails } from '../../../../../../api/studentdetails'

const StudentAdmission = () => {
    const hasMounted = useMounted();
    const [modalShow, setModalShow] = React.useState(false);

    const [titles, setTitles] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState('');

    const [genders, setGenders] = useState([]);
    const [selectedGender, setSelectedGender] = useState('');

    const [casteCategory, setCasteCategory] = useState([]);
    const [selectedCasteCategory, setSelectedCasteCategory] = useState('');

    const [details, setDetails] = useState();
    const [formData, setFormData] = useState({
        title: 0,
        motherName: '',
        surname: '',
        umn: '',
        firstName: '',
        fatherName: '',
        middleName: '',
        ufn: '',
        uName: '',
        enrollmentNumber: 0,
        gender: 0,
        mobile: 0,
        casteCategory: 0,
        email: '',
        remark: '',
    })

    const [editingDetails, setEditingDetails] = useState(null);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingDetails) {
                await updateDetails(editingDetails.id, formData);
                setEditingDetails(null);
                update()
            } else {
                await createDetails(formData);
                success()
            }
            refreshDetails();
            setFormData({
                title: null,
                motherName: '',
                surname: '',
                umn: '',
                firstName: '',
                fatherName: '',
                middleName: '',
                ufn: '',
                uName: '',
                enrollmentNumber: null,
                gender: null,
                mobile: 0,
                casteCategory: null,
                email: '',
                remark: '',
            });
            setShowSuccessAlert(true);
        } catch (error) {
            console.log(error);
            errors()
        }
    }

    const handleInputChange = (event) => {
        const { id, value } = event.target;

        if (id === 'title') {
            setSelectedTitle(value);
        }
        // Update the selectedGender state if the input field is the gender field
        if (id === 'gender') {
            setSelectedGender(value);
        }

        // Update the selectedCasteCategory state if the input field is the caste category field
        if (id === 'casteCategory') {
            setSelectedCasteCategory(value);
        }

        // Update the formData state for all fields
        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const refreshDetails = async () => {
        try {
            const response = await getDetails();
            setDetails(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        refreshDetails();
    }, [])

    useEffect(() => {
        // Fetch titles data from the API when the component mounts
        if (hasMounted) {
            getTitles()
                .then(response => {
                    const data = response.data; // Access data from the response
                    setTitles(data);
                })
                .catch(error => console.error('Error fetching Titles:', error));
        }
    }, [hasMounted]);

    useEffect(() => {
        // Fetch titles data from the API when the component mounts
        if (hasMounted) {
            getGenders()
                .then(response => {
                    const data = response.data; // Access data from the response
                    setGenders(data);
                })
                .catch(error => console.error('Error fetching Genders:', error));
        }
    }, [hasMounted]);

    useEffect(() => {
        // Fetch titles data from the API when the component mounts
        if (hasMounted) {
            getCasteCategory()
                .then(response => {
                    const data = response.data; // Access data from the response
                    setCasteCategory(data);
                })
                .catch(error => console.error('Error fetching CasteCategory:', error));
        }
    }, [hasMounted]);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Student Admission" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Admission Fees</Breadcrumb.Item>
                <Breadcrumb.Item active>Student Admission</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mb-8">
                <Card>
                    <Card.Body>
                        <Col xl={12} lg={8} md={12} xs={12}>
                            Note : <span className="text-danger">* Marked Is Mandatory !</span>
                            {/* All fields marked with a <span className="text-danger">RED</span> asterisk(<span className="text-danger">*</span>) are required in order to proceed. */}
                            <div>
                                {hasMounted &&
                                    <Form onSubmit={handleSubmit}>
                                        <Card className='mb-3'>
                                            <Card.Body>
                                                <PageHeading heading="Course Details" />
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Programme<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Select type="text" placeholder="Please Enter " id="mothertongue" />
                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Fee Category<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Select type="text" placeholder="Please Enter " id="mothertongue" />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Course<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Select type="text" placeholder="Please Enter " id="mothertongue" />
                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Standard Fee<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" id="mothertongue" disabled />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col></Col>
                                                    <Col className="d-flex align-items-center justify-content-center">
                                                        <Button variant="primary" type="">
                                                            Search Student
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                        <Card className='mb-3'>
                                            <Card.Body>
                                                <PageHeading heading="Student Details" />
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Title<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Select id="title" value={selectedTitle} onChange={handleInputChange}>
                                                            <option value="" disabled>Please Select a Title</option>
                                                            {titles.map(title => (
                                                                <option key={title.id} value={title.id}>{title.nametitle}</option>
                                                            ))}
                                                        </Form.Select>
                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Mother Name</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Mother Name" id="motherName" value={formData.motherName} onChange={handleInputChange} />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Last Name/Surname<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Last Name/Surname" id="surname" value={formData.surname} onChange={handleInputChange} />
                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Unicode Mother Name</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Unicode Mother Name" id="umn" value={formData.umn} onChange={handleInputChange} />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >First Name</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter First Name" id="firstName" value={formData.firstName} onChange={handleInputChange} />
                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Father Name</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Father Name" id="fatherName" value={formData.fatherName} onChange={handleInputChange} />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Middle Name</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Middle Name" id="middleName" value={formData.middleName} onChange={handleInputChange} />
                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Unicode Father Name</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Unicode Father Name" id="ufn" value={formData.ufn} onChange={handleInputChange} />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Unicode Name</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Unicode Name" id="uName" value={formData.uName} onChange={handleInputChange} />
                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Enrollment Number</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Enrollment Number" id="enrollmentNumber" value={formData.enrollmentNumber} onChange={handleInputChange} />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Gender<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Select id="gender" value={selectedGender} onChange={handleInputChange}>
                                                            <option value="" disabled>Please Select a Gender</option>
                                                            {genders.map(gender => (
                                                                <option key={gender.id} value={gender.id}>{gender.genders}</option>
                                                            ))}
                                                        </Form.Select>

                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Mobile</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter 10 Digit Mobile Number" id="mobile" value={formData.mobile} onChange={handleInputChange} />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Caste Category</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Select id="casteCategory" value={selectedCasteCategory} onChange={handleInputChange}>
                                                            <option value="" disabled>Please Select a Caste Category</option>
                                                            {casteCategory.map(castecate => (
                                                                <option key={castecate.id} value={castecate.id}>{castecate.casteCategory}</option>
                                                            ))}
                                                        </Form.Select>

                                                    </Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Email</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Email" id="email" value={formData.email} onChange={handleInputChange} />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col></Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Adm Through</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Select type="text" placeholder="Please Enter Email" id="mothertongue" />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col></Col>
                                                    <Form.Label className="col-sm-2 col-form-label form-label" >Remark</Form.Label>
                                                    <Col sm={4} className="mb-3 mb-lg-0">
                                                        <Form.Control as="textarea" placeholder="Please Enter Email" id="remark" value={formData.remark} onChange={handleInputChange} />
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                        <Card className='mb-3'>
                                            <Card.Body>
                                                <PageHeading heading="Subject Details" />
                                                <Row className="mb-3">
                                                    <Col className="d-flex align-items-center justify-content-center">
                                                        <Button variant="primary" onClick={() => setModalShow(true)}>
                                                            Add Subject
                                                        </Button>
                                                        <MyVerticallyCenteredModal
                                                            show={modalShow}
                                                            onHide={() => setModalShow(false)}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                        <Row className="mb-3">
                                            <Col className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                                <ToastContainer style={{ marginTop: '40px' }} />
                                                <Button variant="primary" type="" style={{ marginLeft: "10px" }}>
                                                    Save and Pay
                                                </Button>
                                                <Button variant="secondary" type="" style={{ marginLeft: "10px" }}>
                                                    Cancel
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                }
                            </div>
                        </Col>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default StudentAdmission


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Subject
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mb-3">
                    <Form.Label className="col-sm-3 col-form-label form-label" >Medium<span className="text-danger">*</span></Form.Label>
                    <Col className="mb-3 mb-lg-0">
                        <Form.Select type="text" placeholder="Please Enter Email" id="mothertongue" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Label className="col-sm-4 col-form-label form-label" >Subject Type<span className="text-danger">*</span></Form.Label>
                    <Col sm={4}>
                        <Form.Check
                            label="Subject"
                            type="radio"
                            name='medium'
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Check
                            label="Group"
                            type="radio"
                            name='medium'
                        />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button>Add</Button>
                <Button variant='secondary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
