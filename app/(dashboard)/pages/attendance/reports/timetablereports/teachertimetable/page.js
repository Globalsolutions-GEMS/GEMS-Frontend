"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TeacherTimeTable = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Teacher Timetable" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Attendance</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Reports</Breadcrumb.Item>
        <Breadcrumb.Item href="#"> Timetable Reports</Breadcrumb.Item>
        <Breadcrumb.Item active>Teacher Timetable</Breadcrumb.Item>
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
                        Academic Year<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="Academic Year"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Attendance Session<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Course"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-2 col-form-label form-label">
                        Teacher<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Course"
                          id="course"
                          required
                        />
                      </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Format 1
                        </Form.Label>
                        <Col className="mt-2">
                          <Form.Check
                            type="radio"
                            name="radio"
                           
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Format 2
                        </Form.Label>
                        <Col className="mt-2">
                          <Form.Check
                            type="radio"
                            name="radio"
                            
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Label className="col-sm-2 col-form-label form-label">
                          Format 3
                        </Form.Label>
                        <Col className="mt-2">
                          <Form.Check
                            type="radio"
                            name="radio"
                          
                          />
                        </Col>
                      </Row>
                   
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                       <Button
                        variant="secondary"
                        type=""
                        style={{ marginLeft: "10px" }}
                      >
                        Cancel
                      </Button>
                      </Col>
                      <Col></Col>
                     
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

export default TeacherTimeTable;
