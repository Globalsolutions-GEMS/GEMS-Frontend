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
} from "react-bootstrap";
import { PageHeading } from "widgets";
import { createFaculty, getFaculty, updateFaculty } from "app/api/faculty";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Faculty = () => {
  const hasMounted = useMounted();
  const [facultyData, setFacultyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    facultyStream: "",
    checkIfActive: false,
  });
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingFaculty, setEditingFaculty] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
 
  const success = () => toast.success("Data Submitted Successfully!!!");
  const updateToast = () => toast.success("Data Updated Successfully!!!");
  const errorToast = () => toast.error("Ooops!!! Something went wrong");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingFaculty) {
        await updateFaculty(editingFaculty.id, formData);
        setEditingFaculty(null);
        updateToast();
      } else {
        await createFaculty(formData);
        success();
      }
      refreshFaculty();
      setFormData({
        facultyStream: "",
        checkIfActive: false,
      });
      setShowSuccessAlert(true);
    } catch (error) {
      console.log(error);
      errorToast();
    }
  };

  const handleInputChange = (event) => {
    const { id, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : event.target.value,
      checkIfActive: id === 'checkIfActive' ? checked : prevFormData.checkIfActive,
    }));
  };

  const refreshFaculty = async () => {
    try {
      const response = await getFaculty();
      setFacultyData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshFaculty();
  }, []);

  const editRow = (index) => {
    const editedFaculty = facultyData[index];

    setFormData({
      facultyStream: editedFaculty.facultyStream,
      checkIfActive: editedFaculty.checkIfActive,
    });
    setFormData(editedFaculty);
    setEditingFaculty(editedFaculty);
    setEditingRowIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      facultyStream: "",
      checkIfActive: false,
    });
    setEditingFaculty(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = facultyData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Stream" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Course Configuration</Breadcrumb.Item>
        <Breadcrumb.Item active>Stream</Breadcrumb.Item>
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
                        Stream<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Stream Name"
                          id="facultyStream"
                          value={formData.facultyStream}
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
                          {editingFaculty ? "Update" : "Submit"}
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
              <b>Stream</b>
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
          {currentItems.map((faculty, index) => (
            <tr key={faculty.id}>
              <td>{faculty.facultyStream}</td>
              <td>{faculty.checkIfActive ? "Active" : "Deactive"}</td>
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
        {[...Array(Math.ceil(facultyData.length / itemsPerPage))].map(
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
            currentPage === Math.ceil(facultyData.length / itemsPerPage)
          }
        />
      </Pagination>
    </Container>
  );
};

export default Faculty;
