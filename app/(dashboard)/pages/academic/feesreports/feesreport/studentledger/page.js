'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const StudentLedger = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Student Ledger" />
            <Breadcrumb>
            <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Fees Reports</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Fees Report</Breadcrumb.Item>
                <Breadcrumb.Item active>Student Ledger</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Session</Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                             
                                            <Form.Label
                                              className="col-sm-2 col-form-label form-label"
                                              htmlFor="fullName"
                                            >
                                              Search By
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col
                                              sm={4}
                                              className="mb-3 mb-lg-0"
                                            >
                                              <InputGroup>
                                                <Form.Control
                                                  placeholder="Input group append..."
                                                  aria-label="Input group append..."
                                                  aria-describedby="basic-addon2"
                                                />
                                                <Button
                                                  variant="outline-secondary"
                                                  id="button-addon2"
                                                >
                                                  <FontAwesomeIcon
                                                    icon={faSearch}
                                                  />
                                                </Button>
                                              </InputGroup>
                                            </Col>
                                         </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Enter Input<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Control type="text" placeholder="Please Enter Student ID No." id="session" required />
                                            </Col>
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

export default StudentLedger