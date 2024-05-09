"use client";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  Container,
  Table,
  Col,
  Row,
  Form,
  Card,
  Button,
  Pagination,
} from "react-bootstrap";
import {} from "react-bootstrap";

import { PageHeading } from "widgets";
import { toast, ToastContainer } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

import useMounted from "hooks/useMounted";
import {
  getAcademicYear,
  getCashbook,
  getCertificate,
  getFeeHead,
  getProgramme,
  submitCertFee,
  getCertFeeFilter,
  updateCertFee,
} from "../../../../../../api/certificatefee";

const CertificateFee = () => {
  const hasMounted = useMounted();
  const [academicYearData, setAcademicYearData] = useState([]);
  const [cashbookData, setCashbookData] = useState([]);
  const [certificateData, setCertificateData] = useState([]);
  const [feeheadData, setFeeheadData] = useState([]);
  const [programmeData, setProgrammeData] = useState([]);
  const [certFeeData, setCertFeeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const [formData, setFormData] = useState({
    academicSessionId: "",
    certificateId: "",
    programmeId: "",
    cashbookId: "",
    feeHeadId: "",
    fees: "",
    checkIfActive: false,
  });

  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editingCertificateFee, setEditingCertificateFee] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const success = () => toast.success("Data Submitted Successfully!!!");
  const update = () => toast.success("Data Updated Successfully!!!");
  const errors = () => toast.error("Ooops!!! Somthing went Wrong");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingCertificateFee) {
        await updateCertFee(editingCertificateFee.id, formData);
        setEditingCertificateFee(null);
        update();
      } else {
        await submitCertFee(formData);
        success();
      }
      fetchCourses();
      setFormData({
        academicSessionId: "",
        certificateId: "",
        programmeId: "",
        cashbookId: "",
        feeHeadId: "",
        fees: "",
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

  const editRow = (index) => {
    const editedCertificateFee = certFeeData[index];
  
    // Set the form data state with the values from editedCertificateFee
    setFormData({
      academicSessionId: editedCertificateFee.academicSession.id,
      certificateId: editedCertificateFee.certificate.id,
      programmeId: editedCertificateFee.programme.id,
      cashbookId: editedCertificateFee.cashbook.id,
      feeHeadId: editedCertificateFee.feeHead.id,
      fees: editedCertificateFee.fees,
      checkIfActive: editedCertificateFee.checkIfActive,
    });
  
    // Set the editingCertificateFee state to enable update operation
    setEditingCertificateFee(editedCertificateFee);
    setEditingRowIndex(index);
  };
  

  const handleCancel = () => {
    setFormData({
      academicSessionId: "",
      certificateId: "",
      programmeId: "",
      cashbookId: "",
      feeHeadId: "",
      fees: "",
      checkIfActive: false,
    });
    setEditingCertificateFee(null);
    setEditingRowIndex(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = certFeeData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const refreshAcademicSession = async () => {
    try {
      const response = await getAcademicYear();
      setAcademicYearData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshAcademicSession();
  }, []);

  const refreshCashbook = async () => {
    try {
      const response = await getCashbook();
      setCashbookData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshCashbook();
  }, []);

  const refreshCertificate = async () => {
    try {
      const response = await getCertificate();
      setCertificateData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshCertificate();
  }, []);

  const refreshFeehead = async () => {
    try {
      const response = await getFeeHead();
      setFeeheadData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshFeehead();
  }, []);

  const refreshProgramme = async () => {
    try {
      const response = await getProgramme();
      setProgrammeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshProgramme();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getCertFeeFilter(formData.academicSessionId);
      setCertFeeData(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    if (formData.academicSessionId) {
      fetchCourses();
    }
  }, [formData]);

  return (
    <Container fluid className="p-6">
      <PageHeading heading="Certificate Fee" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Configuration</Breadcrumb.Item>
        <Breadcrumb.Item active>Certificate Fee</Breadcrumb.Item>
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
                        Academic Year<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="academicSessionId"
                          value={formData.academicSessionId}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">
                            Please Select a Academic Session
                          </option>
                          {academicYearData.map((academicyear) => (
                            <option
                              key={academicyear.id}
                              value={academicyear.id}
                            >
                              {academicyear.sessionName}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Cashbook<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="cashbookId"
                          value={formData.cashbookId}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please Select a Cashbook</option>
                          {cashbookData.map((cashbook) => (
                            <option key={cashbook.id} value={cashbook.id}>
                              {cashbook.receiptBookName}
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
                        Certificate<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="certificateId"
                          value={formData.certificateId}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please Select a Certificate</option>
                          {certificateData.map((certificate) => (
                            <option key={certificate.id} value={certificate.id}>
                              {certificate.certificateName}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Fee Head<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          id="feeHeadId"
                          value={formData.feeHeadId}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please Select a Fee Head</option>
                          {feeheadData.map((feehead) => (
                            <option key={feehead.id} value={feehead.id}>
                              {feehead.headDescription}
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
                        <Form.Select
                          id="programmeId"
                          value={formData.programmeId}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please Select a Programme</option>
                          {programmeData.map((programme) => (
                            <option key={programme.id} value={programme.id}>
                              {programme.programmeName}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Fees<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Fees"
                          id="fees"
                          value={formData.fees}
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
                          name="checkIfActive"
                          value={formData.checkIfActive}
                          onChange={handleInputChange}
                          defaultChecked
                        />
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col
                        xs={12}
                        className="mt-4 d-flex align-items-center justify-content-center"
                      >
                        <Button
                          variant="secondary"
                          type=""
                          style={{ marginRight: "10px" }}
                        >
                          Copy
                        </Button>
                        <Button variant="primary" type="submit">
                          {editingCertificateFee ? "Update" : "Submit"}
                        </Button>
                        <ToastContainer style={{ marginTop: "40px" }} />
                        <Button
                          variant="secondary"
                          onClick={handleCancel}
                          type="reset"
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </Button>
                      </Col>
                      <Col className="mt-3">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>
                                <b>Certificate Name</b>
                              </th>
                              <th>
                                <b>Fees</b>
                              </th>
                              <th>
                                <b>Status</b>
                              </th>
                              <th className="col-2">
                                <b>Action</b>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentItems.map((certFee, index) => (
                              <tr key={certFee.id}>
                                <td>{certFee.certificate.certificateName}</td>
                                <td>{certFee.fees}</td>
                                <td>{certFee.checkIfActive ? "Yes" : "No"}</td>
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
                              Math.ceil(certFeeData.length / itemsPerPage)
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
                              Math.ceil(certFeeData.length / itemsPerPage)
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

export default CertificateFee;
