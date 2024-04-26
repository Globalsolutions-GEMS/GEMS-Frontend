"use client";
import { useEffect, useState } from "react";
import { Breadcrumb, Container, Modal, Table , Pagination} from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

import { PageHeading } from "widgets";

import useMounted from "hooks/useMounted";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';

import {
  getBasicCourse,
  findCoursesbypro,
  updateCourse,
  getSpecificCourse,
  getAllCourses
} from "../../../../../../api/coursecreation";

const CourseUpdation = () => {
  const hasMounted = useMounted();
  const [modalShow, setModalShow] = React.useState(false);
  const [basicCourse, setBasicCourse] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [formData, setFormData] = useState({
    basicCourseId: "",
  });
  const [updateFormData, setUpdateFormData] = useState({
    courseName: "",
    shortName: "",
    checkIfActive: true,
    duration: 0,
    yearName: "",
    maxSeats: 0,
    lastAdmissionDate: "",
    startDate: "",
    endDate: "",
    maxCredits: 0,
    minCredits: 0,
    maxSeats: 0,
  });

  const [courseupdationData, setCourseUpdationData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");
  const update = () => toast.success("Data Updated Successfully!!!");


  const handleUpdateInputChange = (event) => {
    const { id, value } = event.target;
    setUpdateFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleEditButtonClick = (courseId) => {
    setSelectedCourseId(courseId); // Set the selected course ID when the "Edit" button is clicked
    setModalShow(true); // Open the modal
  };


  const handleUpdateCourse = async () => {
    try {
      const response = await updateCourse(selectedCourseId, updateFormData); // Send PUT request to update the course
      // Handle success response
      console.log("Course updated successfully:", response.data);
      // Update the courses state with the updated course
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === selectedCourseId ? { ...course, shortName: updateFormData.shortName } : course
        )
      );
      // Close the modal or perform any other necessary actions
      setModalShow(false);
      update();
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Error updating course:", error);
      errors();
    }
  };
  
  
  const refreshCourseUpdation = async () => {
    try {
      const response = await findCoursesbypro(formData.basicCourseId); 
      setCourses(response.data); 
      setShowSuccessAlert(true); 
    } catch (error) {
      console.error("Error refreshing course updation:", error);
    }
  };
  

  useEffect(() => {
    refreshCourseUpdation();
  }, []);



  useEffect(() => {
    const fetchSpecificCourse = async () => {
      try {
        const response = await getSpecificCourse(selectedCourseId);
        const specificCourseData = response.data;
        setUpdateFormData(specificCourseData);
      } catch (error) {
        console.error("Error fetching specific course:", error);
      }
    };

    if (selectedCourseId) {
      fetchSpecificCourse();
    }
  }, [selectedCourseId]);

  const handleInputChange = (event) => {
    const { id, type, checked, value } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: newValue === "on" ? true : newValue,
    }));
  };

  useEffect(() => {
    if (hasMounted) {
      getBasicCourse()
        .then((response) => {
          const data = response.data; // Access data from the response
          setBasicCourse(data);
        })
        .catch((error) => console.error("Error fetching Faculty:", error));
    }
  }, [hasMounted]);

  const fetchCourses = async () => {
    try {
      const response = await findCoursesbypro(formData.basicCourseId);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  

  useEffect(() => {
    if (formData.basicCourseId) {
      fetchCourses();
    }
  }, [formData]);

  const fetchAllCourses = async () => {
    try {
      const response = await getAllCourses();
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    if (hasMounted) {
      fetchAllCourses();
    }
  }, [hasMounted]);

 const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Course Updation" />
      <ToastContainer style={{ marginTop: '40px' }} />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Configuration</Breadcrumb.Item>
        <Breadcrumb.Item active>Course Updation</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Programme<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="basicCourseId"
                          value={formData.basicCourseId}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled>
                            Please Select a Programme
                          </option>
                          {basicCourse.map((basicCourse) => (
                            <option key={basicCourse.id} value={basicCourse.id}>
                              {basicCourse.basicCourse}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Button
                          variant="secondary"
                          type=""
                          style={{ marginLeft: "10px" }}
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <b>Course/Year</b>
            </th>
            <th>
                <b>Short Name</b>
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
          {/* {courses.map((course) => ( */}
          {currentItems.map((course) => (
            <tr key={course.id}>
              <td>{course.courseName}</td>
              <td>{course.shortName}</td>
              <td>{course.checkIfActive ? "Yes" : "No"}</td>
              <td className="d-flex justify-content-center align-items-center">
                <Button
                  variant="secondary"
                  onClick={() => handleEditButtonClick(course.id)}
                >
                  <i className="bi bi-pencil-fill me-2" /> Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="justify-content-end">
                      <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                      {[...Array(Math.ceil(courses.length / itemsPerPage))].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </Pagination.Item>
                      ))}
                      <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(courses.length / itemsPerPage)} />
                    </Pagination>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Record
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form> 
            <Row className="mb-3">
              <Form.Label className="col-sm-4 col-form-label form-label">
                Course/Year Name<span className="text-danger">*</span>
              </Form.Label>
              <Col sm={8} className="mb-3 mb-lg-0">
                <Form.Control
                  type="text"
                  id="courseName"
                  value={updateFormData.courseName}
                  onChange={handleUpdateInputChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label className="col-sm-4 col-form-label form-label">
                Short Name<span className="text-danger">*</span>
              </Form.Label>
              <Col sm={8} className="mb-3 mb-lg-0">
                <Form.Control
                  type="text"
                  id="shortName"
                  value={updateFormData.shortName}
                  onChange={handleUpdateInputChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label className="col-sm-4 col-form-label form-label">
                Max Seats
              </Form.Label>
              <Col sm={8} className="mb-3 mb-lg-0">
                <Form.Control
                  type="text"
                  id="maxSeats"
                  value={updateFormData.maxSeats}
                  onChange={handleUpdateInputChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label className="col-sm-4 col-form-label form-label">
                Next Course/Year
              </Form.Label>
              <Col sm={8} className="mb-3 mb-lg-0">
                <Form.Select
                  id="yearName"
                  value={updateFormData.yearName}
                  onChange={handleUpdateInputChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label className="col-sm-4 col-form-label form-label">
                Last Admission Date
              </Form.Label>
              <Col sm={8} className="mb-3 mb-lg-0">
                <Form.Control
                  type="date"
                  id="lastAdmissionDate"
                  value={updateFormData.lastAdmissionDate}
                  onChange={handleUpdateInputChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label className="col-sm-4 col-form-label form-label">
                Course Start Date
              </Form.Label>
              <Col sm={8} className="mb-3 mb-lg-0">
                <Form.Control
                  type="date"
                  id="startDate"
                  value={updateFormData.startDate}
                  onChange={handleUpdateInputChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label className="col-sm-4 col-form-label form-label">
                Course End Date
              </Form.Label>
              <Col sm={8} className="mb-3 mb-lg-0">
                <Form.Control
                  type="date"
                  id="endDate"
                  value={updateFormData.endDate}
                  onChange={handleUpdateInputChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label className="col-sm-4 col-form-label form-label">
                Maximum Credit<span className="text-danger">*</span>
              </Form.Label>
              <Col sm={8} className="mb-3 mb-lg-0">
                <Form.Control
                  id="maxCredits"
                  value={updateFormData.maxCredits}
                  onChange={handleUpdateInputChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label className="col-sm-4 col-form-label form-label">
                Minimum Credit<span className="text-danger">*</span>
              </Form.Label>
              <Col sm={8} className="mb-3 mb-lg-0">
                <Form.Control
                  id="minCredits"
                  value={updateFormData.minCredits}
                  onChange={handleUpdateInputChange}
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleUpdateCourse}>
            Update
          </Button>
          <ToastContainer style={{ marginTop: '40px' }} />
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CourseUpdation;
