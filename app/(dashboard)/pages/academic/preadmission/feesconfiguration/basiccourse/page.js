"use client";
import { useEffect, useState } from "react";
// import node module libraries
import {
  Breadcrumb,
  Container,
  Col,
  Row,
  Form,
  Card,
  Button,
} from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

import { ToastContainer, toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

import {
  getAllFaculty,
  getAllDegree,
  getAllCashbook,
  createBasicCourse,
  getAllBasicCourse,
} from "../../../../../../api/basiccourse";

const BasicCourse = () => {
  const hasMounted = useMounted();

  const [basicCourseData, setBasicCourseData] = useState([]);
  const [itemsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    faculty: "",
    degree: "",
    cashbook: "",
    courseLevel: "",
    basicCourse: "",
    shortName: "",
    serialNumber: "",
    active: false,
  });
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingBasicCourse, setEditingBasicCourse] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [faculty, setFaculty] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [degree, setDegree] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState("");
  const [cashbook, setCashbook] = useState([]);
  //const [selectedCashbook, setSelectedCashbok] = useState("");

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingBasicCourse) {
        // await updateBasicCourse(editingBasicCourse.id,formData);
        // setEditingBasicCourse(null);
        update();
      } else {
        await createBasicCourse(formData);
        success();
      }
      refreshBasicCourse();
      setFormData({
        facultyId: "",
        degree: "",
        cashbook: "",
        courseLevel: "",
        basicCourse: "",
        shortName: "",
        serialNumber: "",
        active: false,
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

  const refreshBasicCourse = async () => {
    try {
      const response = await getAllBasicCourse();
      setBasicCourseData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshBasicCourse();
  }, []);

  // const editRow = (index) => {};
  

  useEffect(() => {
    if (hasMounted) {
      getAllFaculty()
        .then((response) => {
          const data = response.data; 
          setFaculty(data);
        })
        .catch((error) => console.error("Error fetching Faculty:", error));
    }
  }, [hasMounted]);

  useEffect(() => {

    if (hasMounted) {
      getAllDegree()
        .then((response) => {
          const data = response.data;
          setDegree(data);
        })
        .catch((error) => console.error("Error fetching Degree:", error));
    }
  }, [hasMounted]);

  useEffect(() => {
    
    if (hasMounted) {
      getAllCashbook()
        .then((response) => {
          const data = response.data; 
          setCashbook(data);
        })
        .catch((error) => console.error("Error fetching Cashbook:", error));
    }
  }, [hasMounted]);

  const courseLevels = [
    { value: "UNDER GRADUATE", label: "Undergraduate" },
    { value: "POST GRADUATE", label: "Postgraduate" },
    { value: "DIPLOMA", label: "Diploma" },
  ];

 
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Programme" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Configuration</Breadcrumb.Item>
        <Breadcrumb.Item active>Programme</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Faculty<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="faculty"
                          value={formData.faculty}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled>
                            Please Select Faculty
                          </option>
                          {faculty.map((faculty) => (
                            <option key={faculty.id} value={faculty.id}>
                              {faculty.facultyStream}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Degree<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="degree"
                          value={formData.degree}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled>
                            Please Select a Degree
                          </option>
                          {degree.map((degree) => (
                            <option key={degree.id} value={degree.id}>
                              {degree.degreeDiplomaName}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Reciept Book<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="cashbook"
                          value={formData.cashbook}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled>
                            Please Select a Cashbook
                          </option>
                          {cashbook.map((cashbook) => (
                            <option key={cashbook.id} value={cashbook.id}>
                              {cashbook.receiptBookName}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Course Level
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="courseLevel"
                          value={formData.courseLevel}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled>
                            Please Select a Course Level
                          </option>
                          {courseLevels.map((courseLevel) => (
                            <option
                              key={courseLevel.value}
                              value={courseLevel.value}
                            >
                              {courseLevel.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Programme<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Programme"
                          id="basicCourse"
                          value={formData.basicCourse}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Short Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
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
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Serial No.<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Serial No."
                          id="serialNumber"
                          value={formData.serialNumber}
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
                          label="If Active"
                          defaultChecked
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
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

export default BasicCourse;
