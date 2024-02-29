'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Pagination, Breadcrumb, } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { createCashBook, getCashBook, updateCashBook } from 'app/api/cashbook';
import useMounted from 'hooks/useMounted';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReceiptBook = () => {
    const hasMounted = useMounted();
    const [cashbookData, setCashBookData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        receiptBookCode: '',
        receiptBookName: '',
        cashReceiptNo: '',
        bankReceiptNo: '',
        documentReceiptNo: '',
        hsnsacNo: '',
        receiptBookType: '',
        srNo: '',
        checkIfGstApplicable: false,
        checkIfActive: false
    });
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [editingCashBook, setEditingCashBook] = useState(null);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingCashBook) {
                await updateCashBook(editingCashBook.id, formData);
                setEditingCashBook(null);
                update()
            } else {
                await createCashBook(formData);
                success()
            }
            refreshCashBook();
            setFormData({
                receiptBookCode: '',
                receiptBookName: '',
                cashReceiptNo: '',
                bankReceiptNo: '',
                documentReceiptNo: '',
                hsnsacNo: '',
                receiptBookType: '',
                srNo: '',
                checkIfGstApplicable: false,
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
            checkIfGstApplicable: id === 'checkIfGstApplicable' ? checked : prevFormData.checkIfGstApplicable,
            checkIfActive: id === 'checkIfActive' ? checked : prevFormData.checkIfActive
        }));
    };

    const refreshCashBook = async () => {
        try {
            const response = await getCashBook();
            setCashBookData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refreshCashBook();
    }, []);

    const editRow = (index) => {
        const editedCashBook = cashbookData[index];

        setFormData({
            receiptBookCode: editedCashBook.receiptBookCode,
            receiptBookName: editedCashBook.receiptBookName,
            cashReceiptNo: editedCashBook.cashReceiptNo,
            bankReceiptNo: editedCashBook.bankReceiptNo,
            documentReceiptNo: editedCashBook.documentReceiptNo,
            hsnsacNo: editedCashBook.hsnsacNo,
            receiptBookType: editedCashBook.receiptBookType,
            srNo: editedCashBook.srNo,
            checkIfGstApplicable: editedCashBook.checkIfGstApplicable,
            checkIfActive: editedCashBook.checkIfActive,
        });
        setFormData(editedCashBook);
        setEditingCashBook(editedCashBook);
        setEditingRowIndex(index);
    };

    const handleCancel = () => {
        setFormData({
            receiptBookCode: '',
            receiptBookName: '',
            cashReceiptNo: '',
            bankReceiptNo: '',
            documentReceiptNo: '',
            hsnsacNo: '',
            receiptBookType: '',
            srNo: '',
            checkIfGstApplicable: false,
            checkIfActive: false
        });
        setEditingCashBook(null);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cashbookData.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Receipt Book" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Course</Breadcrumb.Item>
                <Breadcrumb.Item active>Receipt Book</Breadcrumb.Item>
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
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Receipt Book Code<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Receipt Book Code" id="receiptBookCode" value={formData.receiptBookCode} onChange={handleInputChange} required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Receipt Book Name<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Receipt Book Name" id="receiptBookName" value={formData.receiptBookName} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Cash Receipt No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Cash Receipt No." id="cashReceiptNo" value={formData.cashReceiptNo} onChange={handleInputChange} required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Bank Rececipt No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Bank Rececipt No." id="bankReceiptNo" value={formData.bankReceiptNo} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Document Receipt No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Document Receipt No." id="documentReceiptNo" value={formData.documentReceiptNo} onChange={handleInputChange} required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >HSN/ SAC Number<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter HSN/ SAC Number" id="hsnsacNo" value={formData.hsnsacNo} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Receipt Book Type<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                {/* <Form.Control type="text" placeholder="Please Enter Receipt Book Name" id="receiptBookType" value={formData.receiptBookType} onChange={handleInputChange} required /> */}

                                                <Form.Select type="text" placeholder="Please Enter Receipt Book Name" id="receiptBookType" value={formData.receiptBookType} onChange={handleInputChange} required>
                                                    <option value="">Select a Receipt Book Type</option>
                                                    <option value="Book 1">Admission</option>
                                                    <option value="Book 2">Examination</option>
                                                    <option value="Book 3">Other</option>
                                                    {/* Add more option value if we need to add the data manually */}
                                                </Form.Select>

                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Sr. No.<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Sr. No." id="srNo" value={formData.srNo} onChange={handleInputChange} required />
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label">
                                                GST Applicable
                                            </Form.Label>
                                            <Col className='mt-2 col-sm-4'>
                                                <Form.Check
                                                    type="checkbox"
                                                    id="checkIfActive"
                                                    label="Check If GST Applicable"
                                                />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label">
                                                Active
                                            </Form.Label>
                                            <Col className='mt-2 col-sm-4'>
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
                                                    {editingCashBook ? "Update" : "Submit"}
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
                            <th><b>ReceiptBook Code</b></th>
                            <th><b>ReceiptBook Name</b></th>

                            <th><b>Receipt Book Type</b></th>
                            <th><b>Gst Applicable</b></th>
                            <th><b>Active</b></th>
                            <th className="col-2"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((cashbook, index) => (
                            <tr key={cashbook.id}>
                                <td>{cashbook.receiptBookCode}</td>
                                <td>{cashbook.receiptBookName}</td>

                                <td>{cashbook.receiptBookType}</td>
                                <td>{cashbook.checkIfGstApplicable ? 'Applicable' : 'Not Applicable'}</td>
                                <td>{cashbook.checkIfActive ? 'Active' : 'Deactive'}</td>
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
                    {[...Array(Math.ceil(cashbookData.length / itemsPerPage))].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(cashbookData.length / itemsPerPage)} />
                </Pagination>

            </>
        </Container>
    )
}

export default ReceiptBook





