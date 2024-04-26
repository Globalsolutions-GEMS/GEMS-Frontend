"use client";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  Container,
  Col,
  Row,
  Form,
  Card,
  Button,
  Table,
  Pagination
} from "react-bootstrap";
import { PageHeading } from "widgets";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';

import {
  getBasicCourse,
  getCoursePattern,
  getFeePattern,
  createCourse,
  findCourses,
  getAllCourses,
  getSpecificCourse,
  findCoursesbypro,
  updateCourse
} from "../../../../../../api/coursecreation";

const CourseCreation = () => {
  const [formData, setFormData] = useState({
    basicCourseId: "",
    duration: "",
    coursePatternId: "",
    feePatternId: "",
    checkIfActive: false,
  });

  const [basicCourse, setBasicCourse] = useState([]);
  const [coursePattern, setCoursePattern] = useState([]);
  const [feePattern, setFeePattern] = useState([]);
  const [courses, setCourses] = useState([]);
  const [coursecreationData, setCourseCreationData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleInputChange = (event) => {
    const { id, type, checked, value } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: newValue === "on" ? true : newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createCourse(formData); // Submit form data
      success(); // Show success toast
      refreshCourseCreation(); // Refresh course data
      setFormData({
        basicCourseId: "",
        duration: "",
        coursePatternId: "",
        feePatternId: "",
        checkIfActive: false,
      }); // Reset form data
      setShowSuccessAlert(true);
    } catch (error) {
      console.log(error);
      errors(); // Show error toast
    }
  };
  
  

  useEffect(() => {
    getBasicCourse()
      .then((response) => {
        setBasicCourse(response.data);
      })
      .catch((error) => console.error("Error fetching Basic Courses:", error));
  }, []);

  useEffect(() => {
    getCoursePattern()
      .then((response) => {
        setCoursePattern(response.data);
      })
      .catch((error) =>
        console.error("Error fetching Course Patterns:", error)
      );
  }, []);

  useEffect(() => {
    getFeePattern()
      .then((response) => {
        setFeePattern(response.data);
      })
      .catch((error) => console.error("Error fetching Fee Patterns:", error));
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await findCourses(
        formData.basicCourseId,
        formData.coursePatternId,
        formData.feePatternId
      );
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    if (
      formData.basicCourseId &&
      formData.coursePatternId &&
      formData.feePatternId
    ) {
      fetchCourses();
    }
  }, [formData]);


  // const refreshCourseCreation = async () => {
  //   try {
  //     const response = await getSpecificCourse();
  //     setCourseCreationData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const refreshCourseCreation = async () => {
    try {
      const response = await getAllCourses(); // Fetch all courses
      const sortedCourses = response.data.sort((a, b) => b.id - a.id); // Sort by ID in descending order
      setCourses(sortedCourses); // Update courses state
      setCurrentPage(1); // Reset pagination to first page
    } catch (error) {
      console.log(error);
    }
  };
  
  

  useEffect(() => {
    refreshCourseCreation();
  }, []);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-6">
      <PageHeading heading="Course Creation" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Configuration</Breadcrumb.Item>
        <Breadcrumb.Item active>Course Creation</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Programme<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
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
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Duration<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Duration"
                          id="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Course Pattern<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="coursePatternId"
                          value={formData.coursePatternId}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled>
                            Please Select a Course Pattern
                          </option>
                          {coursePattern.map((coursepattern) => (
                            <option
                              key={coursepattern.id}
                              value={coursepattern.id}
                            >
                              {coursepattern.coursePatternName}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Fee Pattern<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="feePatternId"
                          value={formData.feePatternId}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled>
                            Please Select a Fee Pattern
                          </option>
                          {feePattern.map((feepattern) => (
                            <option key={feepattern.id} value={feepattern.id}>
                              {feepattern.feePatternName}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-3 col-form-label form-label">
                        Active
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="checkbox"
                          id="checkIfActive"
                          label="If Active"
                          checked={formData.checkIfActive}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <ToastContainer style={{ marginTop: '40px' }} />
                        <Button
                          variant="secondary"
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
                            <b>Course Name</b>
                          </th>
                          <th>
                            <b>Active</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {/* {courses.map((course) => ( */}
                        {currentItems.map((course) => (
                          <tr key={course.id}>
                            <td>{course.courseName}</td>
                            <td>{course.checkIfActive ? "Yes" : "No"}</td>
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
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseCreation;
