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
import {
  createCasteCategory,
  getCasteCategory,
  updateCasteCategory,
} from "app/api/castecategory";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CasteCategory = () => {
  const hasMounted = useMounted();
  const [castecategoryData, setCasteCategoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    casteCategory: "",
    description: "",
    code: "",
    serialNumber: "",
    checkIfActive: false,
    checkIfReserved: false,
    checkIfOpenCategory: false,
  });
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingCasteCategory, setEditingCasteCategory] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingCasteCategory) {
        await updateCasteCategory(editingCasteCategory.id, formData);
        setEditingCasteCategory(null);
        update();
      } else {
        await createCasteCategory(formData);
        success();
      }
      refreshCasteCategory();
      setFormData({
        casteCategory: "",
        description: "",
        code: "",
        serialNumber: "",
        checkIfActive: false,
        checkIfReserved: false,
        checkIfOpenCategory: false,
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
      checkIfReserved:
        id === "checkIfReserved" ? checked : prevFormData.checkIfReserved,
      checkIfOpenCategory:
        id === "checkIfOpenCategory" ? checked : prevFormData.checkIfReserved,
    }));
  };

  const refreshCasteCategory = async () => {
    try {
      const response = await getCasteCategory();
      setCasteCategoryData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshCasteCategory();
  }, []);

  const editRow = (index) => {
    const editedCasteCategory = castecategoryData[index];

    setFormData({
      casteCategory: editedCasteCategory.casteCategory,
      description: editedCasteCategory.description,
      code: editedCasteCategory.code,
      serialNumber: editedCasteCategory.serialNumber,
      checkIfActive: editedCasteCategory.checkIfActive,
      checkIfReserved: editedCasteCategory.checkIfReserved,
      checkIfOpenCategory: editedCasteCategory.checkIfOpenCategory,
    });
    setFormData(editedCasteCategory);
    setEditingCasteCategory(editedCasteCategory);
    setEditingRowIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      casteCategory: "",
      description: "",
      code: "",
      serialNumber: "",
      checkIfActive: false,
      checkIfReserved: false,
      checkIfOpenCategory: false,
    });
    setEditingCasteCategory(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = castecategoryData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
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
                        Caste Category <span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Caste Category"
                          id="casteCategory"
                          value={formData.casteCategory}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Description <span className="text-danger">*</span>
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
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Code
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Code"
                          id="code"
                          value={formData.code}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Serial Number
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Serial Number"
                          id="serialNumber"
                          value={formData.serialNumber}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Check.Label className="col-sm-3 col-form-label form-label">
                        Reserved
                      </Form.Check.Label>
                      <Col md={9} xs={12}>
                        <Form.Check
                          className="col-sm-3 col-form-label form-label"
                          type="checkbox"
                          id="checkIfReserved"
                          value={formData.checkIfReserved}
                          onChange={handleInputChange}
                        >
                          <Form.Check.Input
                            type="checkbox"
                            id="checkIfReserved"
                            checked={formData.checkIfReserved}
                            onChange={handleInputChange}
                          />
                          <Form.Check.Label>Check If Reserved</Form.Check.Label>
                        </Form.Check>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Check.Label className="col-sm-3 col-form-label form-label">
                        Is Open
                      </Form.Check.Label>
                      <Col md={9} xs={12}>
                        <Form.Check
                          className="col-sm-3 col-form-label form-label"
                          type="checkbox"
                          id="checkIfOpenCategory"
                          value={formData.checkIfOpenCategory}
                          onChange={handleInputChange}
                        >
                          <Form.Check.Input
                            type="checkbox"
                            id="checkIfOpenCategory"
                            checked={formData.checkIfOpenCategory}
                            onChange={handleInputChange}
                          />
                          <Form.Check.Label>
                            Check If Open Category
                          </Form.Check.Label>
                        </Form.Check>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Active
                      </Form.Label>
                      <Col className="mt-2">
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
                        <Button variant="primary" type="submit">
                          {editingCasteCategory ? "Update" : "Submit"}
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
                <b>Caste Category</b>
              </th>
              <th>
                <b>Description</b>
              </th>
              <th>
                <b>Code</b>
              </th>
              <th>
                <b>Serial Number</b>
              </th>
              <th>
                <b>Active</b>
              </th>
              <th>
                <b>Reserved</b>
              </th>
              <th>
                <b>Open</b>
              </th>
              <th className="col-2">
                <b>Action</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((castecategory, index) => (
              <tr key={castecategory.id}>
                <td>{castecategory.casteCategory}</td>
                <td>{castecategory.description}</td>
                <td>{castecategory.code}</td>
                <td>{castecategory.serialNumber}</td>
                <td>{castecategory.checkIfActive ? "Active" : "Deactive"}</td>
                <td>
                  {castecategory.checkIfReserved ? "Reserved" : "Not Reserved"}
                </td>
                <td>
                  {castecategory.checkIfOpenCategory ? "Open" : "Not Open"}
                </td>
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
          {[...Array(Math.ceil(castecategoryData.length / itemsPerPage))].map(
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
              currentPage === Math.ceil(castecategoryData.length / itemsPerPage)
            }
          />
        </Pagination>
      </>
    </Container>
  );
};

export default CasteCategory;
