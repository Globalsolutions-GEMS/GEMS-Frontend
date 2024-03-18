'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Breadcrumb, Alert } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createCertificate , getCertificate , updateCertificate } from 'app/api/certificate';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Certificate = () => {
    const hasMounted = useMounted();
    const [certificateData, setCertificateData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        certificateCode: '',
        certificateName: '',
        originalCertificate: 1,
        xeroxCertificate: '',
        active: false,
        document: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingCertificate, setEditingCertificate] = useState(null); 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingCertificate) {
                await updateCertificate(editingCertificate.id, formData); 
                setEditingCertificate(null); 
                update()
            } else {
                await createCertificate(formData); 
                success()
            }
            refreshCertificate();
            setFormData({ 
        certificateCode: '',
        certificateName: '',
        originalCertificate: 1,
        xeroxCertificate: '',
        active: false,
        document: false
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
            document: id === 'document' ? checked : prevFormData.document,
        }));
    };

    const refreshCertificate = async () => {
        try {
            const response = await getCertificate();
            setCertificateData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshCertificate();
    }, []);

    const editRow = (index) => {
        const editedCertificate = certificateData[index];
    
        setFormData({
        certificateCode: editedCertificate.certificateCode,
        certificateName: editedCertificate.certificateName,
        originalCertificate: 1,
        xeroxCertificate: editedCertificate.xeroxCertificate,
        active: editedCertificate.active,
        document: editedCertificate.document
        });
        setFormData(editedCertificate);
        setEditingCertificate(editedCertificate);
        setEditingRowIndex(index);
    };
    
    const handleCancel = () => {
        setFormData({
        certificateCode: '',
        certificateName: '',
        originalCertificate: 1,
        xeroxCertificate: '',
        active: false,
        document: false
        });
        setEditingCertificate(null);
    };
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = certificateData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Certificate" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Data</Breadcrumb.Item>
                <Breadcrumb.Item active>Certificate</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Certificate Code<span className="text-danger">*</span></Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Certificate Code" id="certificateCode" value={formData.certificateCode} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="text">Certificate Name<span className="text-danger">*</span></Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Control type="text" placeholder="Please Enter Certificate Name" id="certificateName" value={formData.certificateName} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="text">Original Certificate<span className="text-danger">*</span></Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Control type="email" placeholder="1" id="originalCertificate" disabled readOnly />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="text">Xerox Certificate<span className="text-danger">*</span></Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Control type="text" placeholder="Please Enter Xerox Certificate" id="xeroxCertificate" value={formData.xeroxCertificate} onChange={handleInputChange} required />
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

                                    <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Document</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="document" value={formData.document} onChange={handleInputChange} >
                                                    <Form.Check.Input type="checkbox" id="document" checked={formData.document} onChange={handleInputChange} />
                                                    <Form.Check.Label >Check If Document</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Row>
                                        
                                        <Row className="align-items-center">

                                        <Col className="mt-4 d-flex align-items-center justify-content-center">
                                            <Button variant="primary" type="submit">
                                                    {editingCertificate ? "Update" : "Submit"}
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
                            <th><b>Certificate Code</b></th>
                            <th><b>Certificate Name</b></th>
                            <th><b>Original Certificate</b></th>
                            <th><b>Xerox Certificate</b></th>
                            <th><b>Active</b></th>
                            <th><b>Document</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((certificate, index) => (
                            <tr key={certificate.id}>
                                <td>{certificate.certificateCode}</td>
                                <td>{certificate.certificateName}</td>
                                <td>{1}</td>
                                <td>{certificate.xeroxCertificate}</td>
                                <td>{certificate.active ? 'Active' : 'Deactive'}</td>
                                <td>{certificate.document ? 'Yes' : 'No'}</td>
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

export default Certificate