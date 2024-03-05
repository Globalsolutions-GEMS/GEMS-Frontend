"use client";
// import node module libraries
import { Container, Table } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
import { getBanks, createBankAccount } from "app/api/bankdetails";

// import sub components
import useMounted from "hooks/useMounted";

import { ToastContainer, toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const BankAccount = () => {
  const hasMounted = useMounted();
  const [bankAccountData, setBankAccountData] = useState([]);
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    bank: "",
    accountNumber: "",
    checkIfActive: false,
  });

  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingBankAccount, setEditingBankAccount] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [bank, setBank] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingBankAccount) {
        update();
      } else {
        await createBankAccount(formData);
        success();
      }
      refreshBankAccount();
      setFormData({
        bank: "",
        accountNumber: "",
        checkIfActive: false,
      });
      setShowSuccessAlert(true);
    } catch (error) {
      console.log(error);
      errors();
    }
  };

  const handleInputChange = (event) => {
    const { id, type, checked, value } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: newValue === "on" ? true : newValue, // Convert 'on' to true, otherwise use the value directly
    }));
  };

  const refreshBankAccount = async () => {
    try {
      const response = await getAllBankAccounts();
      setBankAccountData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshBankAccount();
  }, []);

  useEffect(() => {
    if (hasMounted) {
      getBanks()
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
                              value={formData.bank}
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
                          <Form.Label className="col-sm-2 col-form-label form-label">
                            Active
                          </Form.Label>
                          <Col className="mt-2">
                            <Form.Check
                              type="switch"
                              id="checkIfActive"
                              label="Check If Active"
                              defaultChecked
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
