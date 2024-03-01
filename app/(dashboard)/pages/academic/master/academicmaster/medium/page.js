'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Breadcrumb } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createMedium , getMedium , updateMedium} from 'app/api/medium';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Medium = () => {
    const hasMounted = useMounted();

    const [mediumData , setMediumData] = useState ([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData , setFormData] = useState ({
        mediumCode:'',
        mediumDescription:'',
        active: false,
        isDefault: false
    });

    const [editingRowIndex , setEditingRowIndex] = useState(null);
    const [editingMedium , setEditingMedium] = useState(null); // using this State to track currently edited medium
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!");
    const update = () => toast.success("Data Updated Successfully!!");
    const errors = () => toast.error("Ooops!!! Something went Wrong");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          if (editingMedium) {
            await updateMedium(editingMedium.id, formData); // calls updateMedium if editingMedium exists
            setEditingMedium(null); //clears editingMedium state after update
            update() //toast that will show message
          } else {
            await createMedium(formData); //calls createMedium if editingMedium is null;
            success()
          }
        
     refreshMedium();
     setFormData({ // clears form data after submission
        mediumCode:'',
        mediumDescription:'',
        active: false,
        isDefault: false
     });
     setShowSuccessAlert(true);
    }
    catch (error) {
        console.log(error);
        errors(); // toast that we have created
    }
}

    const handleInputChange = (event) => {
        const {id , type , checked} = event.target;
        console.log(`id: ${id}, type: ${type}, checked: ${checked}`);
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]:type === 'checkbox' ? checked : event.target.value,
            active: id === 'active' ? checked : prevFormData.active,
            isDefault: id === 'isDefault' ? checked : prevFormData.isDefault,
        }));
    };

    const refreshMedium = async () => {
        try {
          const response =  await getMedium();
          setMediumData(response.data);  
        } catch (error) {
            console.log(error);
        }
    };

    useEffect (() => {
        refreshMedium();
    },[]);

    const editRow = (index) => {
        const editedMedium = mediumData[index];
        setFormData({
        mediumCode: editedMedium.mediumCode,
        mediumDescription: editedMedium.mediumDescription,
        active: editedMedium.active,  
        isDefault: editedMedium.isDefault, 
        });

        setFormData(editedMedium);
        setEditingMedium(editedMedium);
        setEditingRowIndex(index);

    };

    const handleCancel = ()=> {
        setFormData({
        mediumCode:'',
        mediumDescription:'',
        active: false,
        isDefault: false
        });
        setEditingMedium(null);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mediumData.slice(indexOfFirstItem , indexOfLastItem);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Medium" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Medium</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Medium Code</Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Medium Code" id="mediumCode" value={formData.mediumCode} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" >Medium Description</Form.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Control type="text" placeholder="Please Enter Medium Description" id="mediumDescription" value={formData.mediumDescription} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>

                                        <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Is Default</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="isDefault" value={formData.isDefault} onChange={handleInputChange}>
                                                    <Form.Check.Input type="checkbox" id="isDefault" checked={formData.isDefault} onChange={handleInputChange}/>
                                                    <Form.Check.Label >Check If Default</Form.Check.Label>
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
                                                <Button variant="primary" type="submit" >
                                                    {editingMedium ? "Update" : "Submit"}
                                                </Button>
                                                <ToastContainer style={{ marginTop: '40px' }} />
                                                <Button variant="secondary" type="reset" style={{ marginLeft: '10px' }} onClick={handleCancel}>
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
                        <th> <b>Medium Code </b></th>
                        <th> <b>Medium Description </b></th>
                        <th> <b>Active </b></th>
                        <th> <b>IsDefault </b></th>
                        <th className="col-2"><b>Action</b></th>
                    </tr>
                </thead>
                <tbody>
                {currentItems.map((medium, index) => (
                            <tr key={medium.id}>
                                <td>{medium.mediumCode}</td>
                                <td>{medium.mediumDescription}</td>
                                <td>{medium.active ? 'Yes' : 'No'}</td>
                                <td>{medium.isDefault ? 'Default' : 'Not Default'}</td>
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

export default Medium