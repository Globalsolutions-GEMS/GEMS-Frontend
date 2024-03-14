"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Table,
  Pagination,
  Breadcrumb,
  Alert,
} from "react-bootstrap";
import { PageHeading } from "widgets";
import { cretePayment, getPayments, updatePayment } from "app/api/feecategory"; // Import updatePayment
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeeCategory = () => {
  const hasMounted = useMounted();
  const [paymentData, setPaymentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    paymentType: "",
    description: "",
    checkIfRte: false,
    checkIfActive: false,
  });
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingPayment, setEditingPayment] = useState(null); // State to track currently edited payment
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingPayment) {
        await updatePayment(editingPayment.id, formData); // Call updatePayment if editingPayment exists
        setEditingPayment(null); // Clear editingPayment state after update
        update();
      } else {
        await cretePayment(formData); // Call cretePayment if editingPayment is null
        success();
      }
      refreshPayment();
      setFormData({
        // Clear form data after submission
        paymentType: "",
        description: "",
        checkIfRte: false,
        checkIfActive: false,
      });
      setShowSuccessAlert(true);
    } catch (error) {
      console.log(error);
      errors();
    }
  };

  const handleInputChange = (event) => {
    const { id, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : event.target.value,
      checkIfRte: id === "checkIfRte" ? checked : prevFormData.checkIfRte,
      checkIfActive:
        id === "checkIfActive" ? checked : prevFormData.checkIfActive,
    }));
  };

  const refreshPayment = async () => {
    try {
      const response = await getPayments();
      setPaymentData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshPayment();
  }, []);

  const editRow = (index) => {
    const editedPayment = paymentData[index];

    setFormData({
      paymentType: editedPayment.paymentType,
      description: editedPayment.description,
      checkIfRte: editedPayment.checkIfRte, // No need to convert to boolean here
      checkIfActive: editedPayment.checkIfActive, // No need to convert to boolean here
    });
    setFormData(editedPayment);
    setEditingPayment(editedPayment); // Set editingPayment to the selected payment
    setEditingRowIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      paymentType: "",
      description: "",
      checkIfRte: false,
      checkIfActive: false,
    });

    // If you want to clear the editingPayment state as well
    setEditingPayment(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paymentData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Fee Category" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
        <Breadcrumb.Item active>Fee Category</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Fee Category
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Payment Type"
                          id="paymentType"
                          value={formData.paymentType}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Description
                      </Form.Label>
                      <Col md={9} xs={12}>
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Description"
                          id="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Check.Label className="col-sm-3 col-form-label form-label">
                        Scholarship
                      </Form.Check.Label>
                      <Col md={9} xs={12}>
                        <Form.Check
                          className="col-sm-3 col-form-label form-label"
                          type="checkbox"
                          id="checkIfRte"
                          value={formData.checkIfRte}
                          onChange={handleInputChange}
                        >
                          <Form.Check.Input
                            type="checkbox"
                            value={formData.checkIfActive}
                            onChange={handleInputChange}
                          />
                          <Form.Check.Label>If Scholarship</Form.Check.Label>
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
                          {editingPayment ? "Update" : "Submit"}
                        </Button>
                        <ToastContainer style={{ marginTop: "40px" }} />
                        <Button
                          variant="secondary"
                          type="reset"
                          style={{ marginLeft: "10px" }}
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <b>Fee Category</b>
              </th>
              <th>
                <b>Description</b>
              </th>
              <th>
                <b>RTE</b>
              </th>
              <th>
                <b>Status</b>
              </th>
              <th className="col-2">
                <b>Action</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((payment, index) => (
              <tr key={payment.id}>
                <td>{payment.paymentType}</td>
                <td>{payment.description}</td>
                <td>{payment.checkIfRte ? "Yes" : "No"}</td>
                <td>{payment.checkIfActive ? "Active" : "Deactive"}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <Button variant="secondary" onClick={() => editRow(index)}>
                    <i className="bi bi-pencil-fill me-2" /> Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <Pagination className="justify-content-end">
          <Pagination.Prev
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(Math.ceil(paymentData.length / itemsPerPage))].map(
            (_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
          <Pagination.Next
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(paymentData.length / itemsPerPage)
            }
          />
        </Pagination>
      </>
    </Container>
  );
};

export default FeeCategory;
