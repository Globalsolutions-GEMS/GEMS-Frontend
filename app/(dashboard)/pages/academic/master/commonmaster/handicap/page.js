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
import { createHandicap, getHandicap, updateHandicap } from "app/api/handicap";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Handicap = () => {
  const hasMounted = useMounted();
  const [handicapData, setHandicapData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    shortName: "",
    description: "",
    percentage: "",
    checkIfActive: false,
  });
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingHandicap, setEditingHandicap] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingHandicap) {
        await updateHandicap(editingHandicap.id, formData);
        setEditingHandicap(null);
        update();
      } else {
        await createHandicap(formData);
        success();
      }
      refreshHandicap();
      setFormData({
        shortName: "",
        description: "",
        percentage: "",
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
      checkIfActive:
        id === "checkIfActive" ? checked : prevFormData.checkIfActive,
    }));
  };

  const refreshHandicap = async () => {
    try {
      const response = await getHandicap();
      setHandicapData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshHandicap();
  }, []);

  const editRow = (index) => {
    const editedHandicap = handicapData[index];

    setFormData({
      shortName: editedHandicap.shortName,
      description: editedHandicap.description,
      percentage: editedHandicap.percentage,
      checkIfActive: editedHandicap.checkIfActive,
    });
    setFormData(editedHandicap);
    setEditingHandicap(editedHandicap);
    setEditingRowIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      shortName: "",
      description: "",
      percentage: "",
      checkIfActive: false,
    });
    setEditingHandicap(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = handicapData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Handicap" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
        <Breadcrumb.Item active>Handicap</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Short Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Short Name"
                          id="shortName"
                          value={formData.shortName}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Description<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
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
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Percentage
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Percentage"
                          id="percentage"
                          value={formData.percentage}
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
                          defaultChecked
                        />
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col className="mt-4 d-flex align-items-center justify-content-center">
                        <Button variant="primary" type="submit">
                          {editingHandicap ? "Update" : "Submit"}
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
                <b>Short Name</b>
              </th>
              <th>
                <b>Description</b>
              </th>
              <th>
                <b>Percentage</b>
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
            {currentItems.map((handicap, index) => (
              <tr key={handicap.id}>
                <td>{handicap.shortName}</td>
                <td>{handicap.description}</td>
                <td>{handicap.percentage}</td>
                <td>{handicap.checkIfActive ? "Active" : "Deactive"}</td>
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
          {[...Array(Math.ceil(handicapData.length / itemsPerPage))].map(
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
              currentPage === Math.ceil(handicapData.length / itemsPerPage)
            }
          />
        </Pagination>
      </>
    </Container>
  );
};

export default Handicap;
