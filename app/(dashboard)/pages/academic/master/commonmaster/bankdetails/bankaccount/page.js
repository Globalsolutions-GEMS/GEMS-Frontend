"use client";
// import node module libraries
import { Container, Table } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
import {
  retriveAllBanks,
  retrieveAccountForBank,
  createBankAccountforBank,
} from "app/api/bankdetails";

// import sub components
import useMounted from "hooks/useMounted";

import { ToastContainer, toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const BankAccount = () => {
  const hasMounted = useMounted();
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    checkIfActive: false,
  });

  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingBankAccount, setEditingBankAccount] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [bank, setBank] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [bankAccounts, setBankAccounts] = useState([]);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleInputChange = async (event) => {
    const { id, type, checked, value } = event.target;
    if (id === "bank") {
      const selectedBankId = parseInt(value);
      setSelectedBank(selectedBankId);

      try {
        const response = await retrieveAccountForBank(selectedBankId);
        setBankAccounts(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      const newValue = type === "checkbox" ? checked : value;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: newValue === "on" ? true : newValue,
        checkIfActive:
          id === "checkIfActive" ? checked : prevFormData.checkIfActive,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createBankAccountforBank(selectedBank, formData);
      if (response.status === 200) {
        success(); // Show success toast
        const newBankAccount = response.data; // Assuming the response contains the newly created bank account data
        setBankAccounts((prevBankAccounts) => [
          ...prevBankAccounts,
          newBankAccount,
        ]); // Add the new bank account to the list
      } else {
        errors(); // Show error toast
      }
    } catch (error) {
      console.error(error);
      errors(); // Show error toast
    }
  };

  useEffect(() => {
    if (hasMounted) {
      retriveAllBanks()
        .then((response) => {
          const data = response.data;
          setBank(data);
        })
        .catch((error) => console.error(error));
    }
  });

  return (
    <Container fluid>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-3 col-form-label form-label">
                            Bank Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={9} className="mb-3 mb-lg-0">
                            <Form.Select
                              id="bank"
                              value={selectedBank}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled>
                                Please Select a Bank
                              </option>
                              {bank.map((bank) => (
                                <option key={bank.id} value={bank.id}>
                                  {bank.bankName}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-3 col-form-label form-label">
                            Account No.<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={9} className="mb-3 mb-lg-0">
                            <Form.Control
                              type="text"
                              placeholder="Please Enter Account No."
                              id="accountNumber"
                              value={formData.accountNumber}
                              onChange={handleInputChange}
                              required
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
                          <Col
                            md={{ offset: 4, span: 8 }}
                            xs={12}
                            className="mt-4"
                          >
                            <Button variant="primary" type="submit">
                              Submit
                            </Button>
                            <Button
                              variant="secondary"
                              type=""
                              style={{ marginLeft: "10px" }}
                            >
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
                                <b>Account Number</b>
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
                            {bankAccounts.map((bankAccount) => (
                              <tr key={bankAccount.id}>
                                <td>{bankAccount.accountNumber}</td>
                                <td>{bankAccount.checkIfActive ? "Active" : "Deactive"}</td>
                                {/* Assuming status is a field in the bank account data */}
                                <td className="col-2">
                                  {/* Action buttons */}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BankAccount;
