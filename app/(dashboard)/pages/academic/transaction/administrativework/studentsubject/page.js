"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

<<<<<<< HEAD:app/(dashboard)/pages/academic/transaction/administrativework/studentsubject/page.js
const StudentSubject = () => {
    const hasMounted = useMounted();
=======
const StudentSubjectUpdation = () => {
  const hasMounted = useMounted();
>>>>>>> 949d3699d46894f8b13bd8864bad278f57c2f634:app/(dashboard)/pages/academic/transaction/administrativework/studentsubjectupdation/page.js

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Student Subject" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Administrative Work</Breadcrumb.Item>
        <Breadcrumb.Item active>Student Subject</Breadcrumb.Item>
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
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Session<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="session"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Programme<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="session"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Course<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Course"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Medium<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Course"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Section
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Course"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-2">
                    <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Order By<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={2} className="mt-2 mb-lg-0">
                        <Form.Check
                          type="radio"
                          label="Student ID"
                          id="studentId"
                        />
                      </Col>
                      <Col sm={2} className="mt-2 mb-lg-0">
                       
                        <Form.Check
                          type="radio"
                          label="Roll Number"
                          id="studentId"
                        />
                      </Col>
                    </Row>
                    
                    <Row className="mb-3">
                      <Col className="d-flex align-items-left justify-content-left mb-3">
                        <Button
                          variant="secondary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Report
                        </Button>
                      </Col>
                      <Col></Col>
                    </Row>
                    <Row className="mb-3">
                      <Col className="d-flex align-items-left justify-content-left mb-3">
                        <Button variant="primary" type="submit">
                          Submit & Replace
                        </Button>
                        <Button
                          variant="primary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Update
                        </Button>
                        <Button
                          variant="primary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Remove Opt.Sub.
                        </Button>
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

<<<<<<< HEAD:app/(dashboard)/pages/academic/transaction/administrativework/studentsubject/page.js

            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Session<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Programme<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Course<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Medium<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Section</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Order By<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>

                                        </Row>
                                        <Row className='mb-3'>
                                            <Col className="d-flex align-items-left justify-content-left mb-3"> 
                                                <Button variant="secondary" type="" style={{ marginLeft: "10px" }}>
                                                    Report
                                                </Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                        <Row className='mb-3'>
                                            <Col className="d-flex align-items-left justify-content-left mb-3">
                                                <Button variant="primary" type="submit">
                                                    Submit & Replace
                                                </Button>
                                                <Button variant="primary" type="" style={{ marginLeft: "10px" }} >
                                                    Update
                                                </Button>
                                                <Button variant="primary" type="" style={{ marginLeft: "10px" }} >
                                                    Remove Opt.Sub.
                                                </Button>
                                                <Button variant="secondary" type="" style={{ marginLeft: "10px" }}>
                                                    Cancel
                                                </Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                        
                                    </Form>
                                }
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default StudentSubject
=======
export default StudentSubjectUpdation;
>>>>>>> 949d3699d46894f8b13bd8864bad278f57c2f634:app/(dashboard)/pages/academic/transaction/administrativework/studentsubjectupdation/page.js
