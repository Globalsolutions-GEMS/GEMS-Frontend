"use client";
import React from "react";
// import node module libraries
import { Breadcrumb, Container, Modal } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

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
          Add New Division
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Section<span className="text-danger">*</span>
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Select id="certificatecode" required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Seats<span className="text-danger">*</span>
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control
                id="certificatecode"
                placeholder="Please Enter No. of Seats"
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Range From
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control
                id="certificatecode"
                placeholder="Please Enter Range From"
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Range To
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control
                id="certificatecode"
                placeholder="Please Enter Range To"
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
              Prefix
            </Form.Label>
            <Col sm={8} className="mb-3 mb-lg-0">
              <Form.Control
                id="certificatecode"
                placeholder="Please Enter Prefix"
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label className="col-sm-4 col-form-label form-label">
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const CourseDivision = () => {
  const hasMounted = useMounted();
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Course Division" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Fees Configuration</Breadcrumb.Item>
        <Breadcrumb.Item active>Course Division</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Programme<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter Degree/Diploma Short Name"
                          id="degreediploma"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-3 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Course<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={9} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter Degree/Diploma Short Name"
                          id="degreediploma"
                          required
                        />
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                        <Button
                          variant="primary"
                          onClick={() => setModalShow(true)}
                        >
                          Add New Division
                        </Button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
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

export default CourseDivision;
