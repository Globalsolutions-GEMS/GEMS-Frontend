"use client";

import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button, Pagination, Table } from "react-bootstrap";
import { PageHeading } from "widgets";

import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";

import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';

import { createSubjectDefinition, getAllSubjectDefinition, updateSubjectDefinition, getAllSubject , getAcademicSession } from "../../../../../../api/subjectdefinition"
import { useEffect, useState } from "react";

const SubjectDefinition = () => {
  const hasMounted = useMounted();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingSubjectDefnition, setEditingSubjectDefnition] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [subjectDefnitionData, setsubjectDefnitionData] = useState([]);

  const [subject, setSubject] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [academicyear, setAcademicYear] = useState([]);
  const [selectedAcademicYear, setSelectedAcademicYear] = useState("");

  // const [selectedYear, setSelectedYear] = useState(""); 

  const [formData, setFormData] = useState({
    subjectId: "",
    subIntroduceYear: "",
    subjectCode: "",
    subjectName: "",
    shortName: "",
    credits: "",
    srNo: "",
    category: "",
    optional: false,
    graceApplicable: false,
    additionalSubject: false,
    academicExtraCredit: false,
    avg: false,
    passingHead: false,
    excludeFromExam: false,
    studentStatusNew: false,
    studentStatusOld: false,
    active: false,
    exportToExcel: false
  });

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingSubjectDefnition) {
        await updateSubjectDefinition(editingSubjectDefnition.id, formData);
        setEditingSubjectDefnition(null);
        update();
      } else {
      await createSubjectDefinition(formData);
      success();
      }
      refreshSubjectDefinition();
      setFormData({
        subjectId: "",
        subIntroduceYear: "",
        subjectCode: "",
        subjectName: "",
        shortName: "",
        credits: "",
        srNo: "",
        category: "",
        optional: false,
        graceApplicable: false,
        additionalSubject: false,
        academicExtraCredit: false,
        avg: false,
        passingHead: false,
        excludeFromExam: false,
        studentStatusNew: false,
        studentStatusOld: false,
        active: false,
        exportToExcel: false
      });
      setShowSuccessAlert(true);
    }
     catch (error) {
      console.log(error);
      errors();
    }
  };

  const refreshSubjectDefinition = async () => {
    try {
      const response = await getAllSubjectDefinition();
      setsubjectDefnitionData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshSubjectDefinition();
  }, []);



  useEffect(() => {
    if (hasMounted) {
      getAcademicSession()
        .then((response) => {
          const data = response.data;
          setAcademicYear(data);
        })
        .catch((error) => console.error("Error fetching Year:", error));
    }
  }, [hasMounted]);



  useEffect(() => {
    if (hasMounted) {
      getAllSubject()
        .then((response) => {
          const data = response.data;
          setSubject(data);
        })
        .catch((error) => console.error("Error fetching Subject:", error));
    }
  }, [hasMounted]);


  const handleInputChange = (event) => {
    const { id, type, checked } = event.target;
    const value = type === "checkbox" ? checked : event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
      studentStatusNew: id === "studentStatusNew" ? checked : prevFormData.studentStatusNew,
      studentStatusOld: id === "studentStatusOld" ? checked : prevFormData.studentStatusOld,
    }));
  };
  

  const editRow = (index) => {
    const editedSubjectDefinition = subjectDefnitionData[index];
    console.log("Edited Subject ID:", editedSubjectDefinition.subjectId);
    setFormData({
      subjectId: editedSubjectDefinition.subjectId,
        subIntroduceYear: editedSubjectDefinition.subIntroduceYear,
        subjectCode: editedSubjectDefinition.subjectCode,
        subjectName: editedSubjectDefinition.subjectName,
        shortName: editedSubjectDefinition.shortName,
        credits: editedSubjectDefinition.credits,
        srNo: editedSubjectDefinition.srNo,
        category: editedSubjectDefinition.category,
        optional: editedSubjectDefinition.optional,
        graceApplicable: editedSubjectDefinition.graceApplicable,
        additionalSubject: editedSubjectDefinition.additionalSubject,
        academicExtraCredit: editedSubjectDefinition.academicExtraCredit,
        avg: editedSubjectDefinition.avg,
        passingHead: editedSubjectDefinition.passingHead,
        excludeFromExam: editedSubjectDefinition.excludeFromExam,
        studentStatusNew: editedSubjectDefinition.studentStatusNew,
        studentStatusOld: editedSubjectDefinition.studentStatusOld,
        active: editedSubjectDefinition.active,
        exportToExcel: editedSubjectDefinition.exportToExcel,
    });
    // setFormData(editedSubjectDefinition);
    setEditingSubjectDefnition(editedSubjectDefinition);
    setEditingRowIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      subjectId: "",
      subIntroduceYear: "",
      subjectCode: "",
      subjectName: "",
      shortName: "",
      credits: "",
      srNo: "",
      category: "",
      optional: false,
      graceApplicable: false,
      additionalSubject: false,
      academicExtraCredit: false,
      avg: false,
      passingHead: false,
      excludeFromExam: false,
      studentStatusNew: false,
      studentStatusOld: false,
      active: false,
      exportToExcel: false
    });
    setEditingSubjectDefnition(null);
  };

  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = subjectDefnitionData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleYearSelect = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Subject Definition" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Subject</Breadcrumb.Item>
        <Breadcrumb.Item active>Subject Definition</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Subject Introduce In Year
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select"
                          id="subIntroduceYear"
                          value={formData.subIntroduceYear}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled>
                            Please Select Year
                          </option>
                          {academicyear.map((academicyear) => (
                            <option key={academicyear.id} value={academicyear.id}>
                              {/* {new Date(academicyear.startDate).getFullYear()} */}
                               {academicyear.sessionName}
                                </option> 
                          ))}
                        </Form.Select>
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Credits<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Select Credit"
                          id="credits"
                          value={formData.credits}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Subject Code<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Subject Code"
                          id="subjectCode"
                          value={formData.subjectCode}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Serial No.<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Select  Serial No."
                          id="srNo"
                          value={formData.srNo}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Subject Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Subject Name"
                          id="subjectName"
                          value={formData.subjectName}
                          onChange={handleInputChange}
                          required
                        />
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Subject Type<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Subject Type"
                          id="subjectId"
                          value={formData.subjectId}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled>
                            Please Select Subject
                          </option>
                          {subject.map((subject) => (
                            <option key={subject.id} value={subject.id}>
                              {subject.subjectTypeName}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Subject Short Name<span className="text-danger">*</span>
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
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Category<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Category"
                          id="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please Select</option>
                          <option value="Major">Major</option>
                          <option value="Minor">Minor</option>
                        </Form.Select>

                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Optional
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="optional"
                          label="If Optional"
                          checked={formData.optional}
                          onChange={handleInputChange}
                          defaultChecked

                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Avg. 100/2
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="avg"
                          label="If Avg. 100/2"
                          checked={formData.avg}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Grace Applicable
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="graceApplicable"
                          label="If Grace Applicable"
                          checked={formData.graceApplicable}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Passing Head
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="passingHead"
                          label="If Passing Head"
                          checked={formData.passingHead}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Additinal Subject
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="additionalSubject"
                          label="If Additinal Subject"
                          checked={formData.additionalSubject}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Exclude For Exam
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="excludeFromExam"
                          label="If Exclude For Exam"
                          checked={formData.excludeFromExam}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Academic Extra Credit
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="academicExtraCredit"
                          label="If Academic Extra Credit"
                          checked={formData.academicExtraCredit}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Student Status<span className="text-danger">*</span>
                      </Form.Label>

                      <Col sm={2} className="mt-2">
                        <Form.Check
                          label="New"
                          type="radio"
                          name="search"
                          id="studentStatusNew"
                          checked={formData.studentStatusNew}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col sm={2} className="mt-2">
                        <Form.Check
                          label="Old"
                          type="radio"
                          name="search"
                          id="studentStatusOld"
                          checked={formData.studentStatusOld}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col sm={6}></Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        If Active
                      </Form.Label>
                      <Col className="mt-2">
                        <Form.Check
                          type="switch"
                          id="active"
                          label="If Active"
                          checked={formData.active}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Export To Excel
                      </Form.Label>
                      <Col sm={4} className="mb-3 mt-2 mb-lg-0">
                        <Form.Check
                          type="checkbox"
                          placeholder="Please Select Course"
                          id="exportToExcel"
                          checked={formData.exportToExcel}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Button variant="primary" type="submit">
                          {editingSubjectDefnition ? "Update" : "Submit"}
                        </Button>
                        <ToastContainer style={{ marginTop: "80px" }} />
                        <Button
                          variant="secondary"
                          type="reset"
                          style={{ marginLeft: "10px" }}
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="secondary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Report
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
                <b>SubIntroduce Year</b>
              </th>
              <th>
                <b>Subject Name</b>
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
          {/* <tbody>
            {currentItems.map((subjectdefinition, index) => (
              <tr key={subjectdefinition.id}>
                <td>{subjectdefinition.sessionName}</td>
                <td>{subjectdefinition.subjectName}</td>
                <td>{subjectdefinition.shortName}</td>
                <td>{subjectdefinition.active ? "Active" : "Deactive"}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <Button variant="secondary" onClick={() => editRow(index)}>
                    <i className="bi bi-pencil-fill me-2" /> Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody> */}

<tbody>
  {currentItems.map((subjectdefinition, index) => (
    <tr key={subjectdefinition.id}>
      <td>{subjectdefinition.subIntroduceYear}</td> {/* Updated to subIntroduceYear */}
      <td>{subjectdefinition.subjectName}</td>
      <td>{subjectdefinition.shortName}</td>
      <td>{subjectdefinition.active ? "Active" : "Deactive"}</td>
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
          {[...Array(Math.ceil(subjectDefnitionData.length / itemsPerPage))].map(
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
              currentPage === Math.ceil(subjectDefnitionData.length / itemsPerPage)
            }
          />
        </Pagination>
      </>
    </Container>
  );
};

export default SubjectDefinition;



 
                            