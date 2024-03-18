"use client";
// import node module libraries
import { Breadcrumb, Container, Table } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import React from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
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
              <Form.Control id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Short Name<span className="text-danger">*</span>
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Max Seats
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Next Course/Year
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Select id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              University Course
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Select id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Last Admission Date
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control type="date" id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Course Start Date
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control type="date" id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Course End Date
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control type="date" id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Maximum Credit<span className="text-danger">*</span>
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Minimum Credit<span className="text-danger">*</span>
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control id="certificatecode" required />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary">
          Update
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const CourseUpdation = () => {
  const hasMounted = useMounted();
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Course Updation" />
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
                        <Form.Select id="certificatecode" required />
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
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <b>Course/Year</b>
              </th>
              <th>
                <b>Short Name</b>
              </th>
              <th className="col-2">
                <b>Action</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bachelor Of Arts</td>
              <td>BA</td>
              <td className="d-flex justify-content-center align-items-center">
                <Button variant="secondary" onClick={() => setModalShow(true)}>
                  <i className="bi bi-pencil-fill me-2" /> Edit
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    </Container>
  );
};

export default CourseUpdation;
