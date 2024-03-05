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
  Pagination
} from "react-bootstrap";
import { createBank, getBanks, updateBank } from "app/api/bankdetails";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bank = () => {
  const hasMounted = useMounted();
  const [bankData, setBankData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    bankCode: "",
    bankName: "",
    bankAddress: "",
    checkIfActive: false,
  });
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingBank, setEditingBank] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const success = () => toast.success("Data Submitted Successfully!!");
  const update = () => toast.success("Data Updated Successfully!!");
  const errors = () => toast.error("Ooops!!! Something went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingBank) {
        await updateBank(editingBank.id, formData);
        setEditingBank(null);
        update();
      } else {
        await createBank(formData);
        success();
      }
      refreshBank();
      setFormData({
        bankCode: "",
        bankName: "",
        bankAddress: "",
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
      checkIfActive: id === "checkIfActive" ? checked : prevFormData.checkIfActive,
    }));
  };

  const refreshBank = async () => {
    try {
      const response = await getBanks();
      setBankData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshBank();
  }, []);

  const editRow = (index) => {
    const editedBank = bankData[index];
    setFormData({
      bankCode: editedBank.bankCode,
      bankName: editedBank.bankName,
      bankAddress: editedBank.bankAddress,
      checkIfActive: editedBank.checkIfActive,
    });
    setEditingBank(editedBank);
    setEditingRowIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      bankCode: "",
      bankName: "",
      bankAddress: "",
      checkIfActive: false,
    });
    setEditingBank(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bankData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Bank Code<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Bank Code"
                          id="bankCode"
                          value={formData.bankCode}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Bank Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Bank Name"
                          id="bankName"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Bank Address
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Bank Address"
                          id="bankAddress"
                          value={formData.bankAddress}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Active
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="checkIfActive"
                          label="Check If Active"
                          checked={formData.checkIfActive}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col className="mt-4 d-flex align-items-center justify-content-center">
                        <Button variant="primary" type="submit">
                          {editingBank ? "Update" : "Submit"}
                        </Button>
                        <Button
                          variant="secondary"
                          type="button"
                          style={{ marginLeft: "10px" }}
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                        <ToastContainer style={{ marginTop: "40px" }} />
                      </Col>
                    </Row>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <b>Bank Code</b>
            </th>
            <th>
              <b>Bank Name</b>
            </th>
            <th>
              <b>Bank Address</b>
            </th>
            <th>
              <b>Active</b>
            </th>
            <th className="col-2">
              <b>Action</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((bank, index) => (
            <tr key={bank.id}>
              <td>{bank.bankCode}</td>
              <td>{bank.bankName}</td>
              <td>{bank.bankAddress}</td>
              <td>{bank.checkIfActive ? "Active" : "Deactive"}</td>
              <td className="d-flex justify-content-center align-items-center">
                <Button variant="secondary" onClick={() => editRow(index)}>
                  <i className="bi bi-pencil-fill me-2" /> Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="justify-content-end">
        <Pagination.Prev
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(Math.ceil(bankData.length / itemsPerPage))].map(
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
            currentPage === Math.ceil(bankData.length / itemsPerPage)
          }
        />
      </Pagination>
    </Container>
  );
};

export default Bank;
