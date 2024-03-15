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
  createAcademicAcademicYear,
  getAcademicAcademicYear,
  updateAcademicAcademicYear,
} from "app/api/academicyear";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AcademicYear = () => {
  const hasMounted = useMounted();
  const [academicAcademicYearData, setAcademicAcademicYearData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    AcademicYearName: "",
    shortName: "",
    startDate: "",
    endDate: "",
    active: false,
    oldAcademicYear: false,
  });
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingAcademicAcademicYear, setEditingAcademicAcademicYear] =
    useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingAcademicAcademicYear) {
        await updateAcademicAcademicYear(
          editingAcademicAcademicYear.id,
          formData
        );
        setEditingAcademicAcademicYear(null);
        update();
      } else {
        await createAcademicAcademicYear(formData);
        success();
      }
      refreshAcademicAcademicYear();
      setFormData({
        AcademicYearName: "",
        shortName: "",
        startDate: "",
        endDate: "",
        active: false,
        oldAcademicYear: false,
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
      active: id === "active" ? checked : prevFormData.active,
      oldAcademicYear:
        id === "oldAcademicYear" ? checked : prevFormData.oldAcademicYear,
    }));
  };

  const refreshAcademicAcademicYear = async () => {
    try {
      const response = await getAcademicAcademicYear();
      setAcademicAcademicYearData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshAcademicAcademicYear();
  }, []);

  const editRow = (index) => {
    const editedAcademicAcademicYear = academicAcademicYearData[index];

    setFormData({
      AcademicYearName: editedAcademicAcademicYear.AcademicYearName,
      shortName: editedAcademicAcademicYear.shortName,
      startDate: editedAcademicAcademicYear.startDate,
      endDate: editedAcademicAcademicYear.endDate,
      active: editedAcademicAcademicYear.active,
      oldAcademicYear: editedAcademicAcademicYear.oldAcademicYear,
    });
    setFormData(editedAcademicAcademicYear);
    setEditingAcademicAcademicYear(editedAcademicAcademicYear);
    setEditingRowIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      AcademicYearName: "",
      shortName: "",
      startDate: "",
      endDate: "",
      active: false,
      oldAcademicYear: false,
    });
    setEditingAcademicAcademicYear(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = academicAcademicYearData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="AcademicYear" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Academic Master</Breadcrumb.Item>
        <Breadcrumb.Item active>Academic Year</Breadcrumb.Item>
      </Breadcrumb>
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
                          <Form.Label
                            className="col-sm-3 col-form-label form-label"
                            htmlFor="fullName"
                          >
                            Academic Year name
                          </Form.Label>
                          <Col sm={9} className="mb-3 mb-lg-0">
                            <Form.Control
                              type="text"
                              placeholder="Please Enter AcademicYear Name"
                              id="AcademicYearName"
                              value={formData.AcademicYearName}
                              onChange={handleInputChange}
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Label
                            className="col-sm-3 col-form-label form-label"
                            htmlFor="email"
                          >
                            Short Name
                          </Form.Label>
                          <Col md={9} xs={12}>
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
                          <Form.Label className="col-sm-3 col-form-label form-label">
                            Start Date
                          </Form.Label>
                          <Col md={9} xs={12}>
                            <Form.Control
                              type="date"
                              placeholder="Please Enter Start Date"
                              id="startDate"
                              value={formData.startDate}
                              onChange={handleInputChange}
                              required
                            />
                          </Col>
                        </Row>

                        <Row className="mb-3">
                          <Form.Label className="col-sm-3 col-form-label form-label">
                            End Date
                          </Form.Label>
                          <Col md={9} xs={12}>
                            <Form.Control
                              type="date"
                              placeholder="Please Enter End Date"
                              id="endDate"
                              value={formData.endDate}
                              onChange={handleInputChange}
                              required
                            />
                          </Col>
                        </Row>

                        {/* <Row className='mb-3'>
                                            <Form.Check.Label className="col-sm-3 col-form-label form-label" >Active</Form.Check.Label>
                                            <Col md={9} xs={12}>
                                                <Form.Check className="col-sm-3 col-form-label form-label" type="checkbox" id="active" value={formData.active} onChange={handleInputChange}>
                                                    <Form.Check.Input type="checkbox" id='active' checked={formData.active} onChange={handleInputChange} />
                                                    <Form.Check.Label >If Active</Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Row> */}

                        <Row className="mb-3">
                          <Form.Check.Label className="col-sm-3 col-form-label form-label">
                            Old AcademicYear
                          </Form.Check.Label>
                          <Col md={9} xs={12}>
                            <Form.Check
                              className="col-sm-9 col-form-label form-label"
                              type="checkbox"
                              id="oldAcademicYear"
                              value={formData.oldAcademicYear}
                              onChange={handleInputChange}
                            >
                              <Form.Check.Input
                                type="checkbox"
                                id="oldAcademicYear"
                                checked={formData.oldAcademicYear}
                                onChange={handleInputChange}
                              />
                              <Form.Check.Label>
                                If Old AcademicYear
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
                              id="checkIfActive"
                              label="If Active"
                              defaultChecked
                            />
                          </Col>
                        </Row>
                        <Row className="align-items-center">
                          <Col className="mt-4 d-flex align-items-center justify-content-center">
                            <Button variant="primary" type="submit">
                              {editingAcademicAcademicYear
                                ? "Update"
                                : "Submit"}
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
                                <b>AcademicYear Name</b>
                              </th>
                              <th>
                                <b>Start Date</b>
                              </th>
                              <th>
                                <b>End Date</b>
                              </th>
                              <th className="col-2">
                                <b>Action</b>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentItems.map((academicAcademicYear, index) => (
                              <tr key={academicAcademicYear.id}>
                                <td>{academicAcademicYear.AcademicYearName}</td>
                                <td>{academicAcademicYear.startDate}</td>
                                <td>{academicAcademicYear.endDate}</td>
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

                        <Pagination className="justify-content-end">
                          <Pagination.Prev
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                          />
                          {[
                            ...Array(
                              Math.ceil(
                                academicAcademicYearData.length / itemsPerPage
                              )
                            ),
                          ].map((_, index) => (
                            <Pagination.Item
                              key={index}
                              active={index + 1 === currentPage}
                              onClick={() => paginate(index + 1)}
                            >
                              {index + 1}
                            </Pagination.Item>
                          ))}
                          <Pagination.Next
                            onClick={() => paginate(currentPage + 1)}
                            disabled={
                              currentPage ===
                              Math.ceil(
                                academicAcademicYearData.length / itemsPerPage
                              )
                            }
                          />
                        </Pagination>
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

export default AcademicYear;
