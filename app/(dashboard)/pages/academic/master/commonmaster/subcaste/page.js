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
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getCasteCategory,
  createSubCaste,
  updateSubCaste,
  getSubCaste,
} from "app/api/castecategory";

const SubCaste = () => {
  const hasMounted = useMounted();
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    casteCategory: "",
    subcaste: "",
  });

  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingSubCaste, setEditingSubCaste] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [castecategory, setCasteCategory] = useState([]);
  const [selectedCasteCategory, setSelectedCasteCategory] = useState("");
  const [subcastes, setSubCastes] = useState([]);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleInputChange = async (event) => {
    const { id, type, checked, value } = event.target;
    if (id === "castecategory") {
      const selectedCasteCategoryId = parseInt(value);
      setSelectedCasteCategory(selectedCasteCategoryId);

      try {
        const response = await getSubCaste(selectedCasteCategoryId);
        setSubCastes(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      const newValue = type === "checkbox" ? checked : value;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: newValue === "on" ? true : newValue,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (editingSubCaste) {
        response = await updateSubCaste(editingSubCaste.id, formData);
        refreshSubCaste();
      } else {
        response = await createSubCaste(selectedCasteCategory, formData);
        refreshSubCaste();
      }
      if (response.status === 200) {
        toast.success("Data saved successfully!");
        refreshSubCaste();
        setFormData({ casteCategory: "", subcaste: "" });
        setEditingSubCaste(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save data!");
    }
  };

  useEffect(() => {
    if (hasMounted) {
      getCasteCategory()
        .then((response) => {
          const data = response.data;
          setCasteCategory(data);
        })
        .catch((error) => console.error(error));
    }
  });

  const refreshSubCaste = async () => {
    try {
      const response = await getSubCaste(selectedCasteCategory);
      setSubCastes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refreshSubCaste();
  }, []);

  const handleCasteCategoryChange = async (event) => {
    const selectedCasteCategoryId = event.target.value;
    setSelectedCasteCategory(selectedCasteCategoryId);
    try {
      const response = await getSubCaste(selectedCasteCategoryId);
      setSubCastes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setFormData({
      subcaste: "",
    });
    setEditingSubCaste(null);
  };

  const editRow = (index) => {
    const editedSubCaste = subcastes[index];

    setFormData({
      subcaste: editedSubCaste.subcaste,
    });
    setFormData(editedSubCaste);
    setEditingSubCaste(editedSubCaste);
    setEditingRowIndex(index);
  };

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
                            Caste Category<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={9} className="mb-3 mb-lg-0">
                            <Form.Select
                              type="text"
                              placeholder="Please Enter Caste Category"
                              id="casteCategory"
                              value={selectedCasteCategory}
                              onChange={handleCasteCategoryChange}
                              required
                            >
                              <option value="">Select Caste Category</option>
                              {castecategory.map((category) => (
                                <option key={category.id} value={category.id}>
                                  {category.casteCategory}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-3 col-form-label form-label">
                            SubCaste<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={9} className="mb-3 mb-lg-0">
                            <Form.Control
                              type="text"
                              placeholder="Please Enter Sub Caste."
                              id="subcaste"
                              value={formData.subcaste}
                              onChange={handleInputChange}
                              required
                            />
                          </Col>
                        </Row>

                        <Row className="align-items-center">
                          <Col className="mt-4 d-flex align-items-center justify-content-center">
                            <Button variant="primary" type="submit">
                              {editingSubCaste ? "Update" : "Submit"}
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
                      </Col>
                      <Col>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>
                                <b>SubCaste</b>
                              </th>
                              <th className="col-2">
                                <b>Action</b>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {subcastes.map((subcaste, index) => (
                              <tr key={subcaste.id}>
                                <td>{subcaste.subcaste}</td>
                                <td className="d-flex justify-content-center align-items-center">
                                  <Button
                                    variant="secondary"
                                    onClick={() => editRow(index)}
                                  >
                                    <i className="bi bi-pencil-fill me-2" />{" "}
                                    Edit
                                  </Button>
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

export default SubCaste;
