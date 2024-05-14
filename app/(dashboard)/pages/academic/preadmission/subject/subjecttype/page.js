"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button, Pagination, Table } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";

import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';

import { createSubject, getAllSubject, getSpecificSubject } from "../../../../../../api/subjecttype"

import { useEffect, useState } from "react";

const SubjectType = () => {
  const hasMounted = useMounted();
  const [formData, setFormData] = useState({
    subjectTypeName: "",
    theory: false,
    practical: false,
    theoryCumPractical: false,
    active: false
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingSubjectType, setEditingSubjectType] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [subjectTypeData, setSubjectTypeData] = useState([]);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createSubject(formData);d
      console.log(formData);
      success();
      refreshSubjectType();
      setFormData({
        subjectTypeName: "",
        theory: false,
        practical: false,
        theoryCumPractical: false,
        active: false
      });
      setShowSuccessAlert(true);
    } catch (error) {
      console.log(error);
      errors();
    }
  };

  const refreshSubjectType = async () => {
    try {
      const response = await getAllSubject();
      setSubjectTypeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshSubjectType();
  }, []);


  const handleInputChange = (event) => {
    const { id, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : event.target.value,
      active : id === "active" ? checked : prevFormData.active,
      theory : id === "theory" ? checked : prevFormData.theory,
      // theory: false,
      // practical: false,
      // theoryCumPractical: false,
    }));
  };

  const handleCancel = () => {
    setFormData({
      subjectTypeName: "",
      theory: false,
      practical: false,
      theoryCumPractical: false,
      active: false
    });
    setEditingSubjectType(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = subjectTypeData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Subject Type" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Subject</Breadcrumb.Item>
        <Breadcrumb.Item active>Subject Type</Breadcrumb.Item>
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
                        Subject Type<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter"
                          id="subjectTypeName"
                          value={formData.subjectTypeName}
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
                        Type
                      </Form.Label>
                      <Col sm={5} >
                        <Row>
                          <Col sm={3} className="mt-2">
                            <Form.Check
                              label="Theory"
                              type="radio"
                              name="radio"
                              id="theory"
                              checked={formData.theory}
                              onChange={handleInputChange}
                            />

                          </Col>
                          <Col sm={3} className="mt-2">
                            <Form.Check
                              label="Practical"
                              type="radio"
                              name="radio"
                              id="practical"
                              checked={formData.practical}
                              onChange={handleInputChange}
                            />
                          </Col>
                          <Col sm={6} className="mt-2">
                            <Form.Check
                              label="Theory Cum Practical"
                              type="radio"
                              name="radio"
                              id="theoryCumPractical"
                              checked={formData.theoryCumPractical}
                              onChange={handleInputChange}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Active
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

                    <Row className="align-items-center">
                      <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <ToastContainer style={{ marginTop: "80px" }} />
                        <Button
                          variant="secondary"
                          type="reset"
                          style={{ marginLeft: "10px" }}
                          onClick={handleCancel}
                        >
                          Close
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
                <b>SubjectType Name</b>
              </th>
              <th>
                <b>Theory</b>
              </th>
              <th>
                <b>Practical</b>
              </th>
              <th>
                <b>Theory Cum Practical</b>
              </th>
              <th>
                <b>Active</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((subject, index) => (
              <tr key={subject.id}>
                <td>{subject.subjectTypeName}</td>
                <td>{subject.theory ? "Yes" : "No"}</td>
                <td>{subject.practical ? "Yes" : "No"}</td>
                <td>{subject.theoryCumPractical ? "Yes" : "No"}</td>
                <td>{subject.active ? "Active" : "Deactive"}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination className="justify-content-end">
          <Pagination.Prev
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(Math.ceil(subjectTypeData.length / itemsPerPage))].map(
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
              currentPage === Math.ceil(subjectTypeData.length / itemsPerPage)
            }
          />
        </Pagination>
      </>
    </Container>
  );
};

export default SubjectType;
